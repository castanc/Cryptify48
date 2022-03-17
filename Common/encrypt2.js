
function encryptString(data, userid, password, date = null) {
    if (!date)
        date = new Date();
    eo = {};    //encryptObject
    eo.DateCreated = date;
    eo.deviceId = deviceId;
    eo.DateExpiry = new Date();
    eo.Version = versionNumber;
    eo.data1 = data;

    os = {};
    os.deviceId = deviceId;
    os.data = "";
    os.data2 = "";

    showSpinner(true, "Encrypting...");
    os.data = sjcl.encrypt(password, JSON.stringify(eo));
    showSpinner(false);
    let ix = os.data.indexOf(`"ct":"`);
    if (ix > 0) {
        //todo: ensure makeid not generating "datax" strings
        let part1 = os.data.substr(0, ix + 6);
        let part2 = os.data.substr(ix + 6);
        os.data = btoa(part1);
        os.data2 = part2;
    }
    return JSON.stringify(os);

}


function decryptString(data, password) {

    let decoded = atob(data);
    let unencr = sjcl.decrypt(password, decoded);
    return unencr;

}


function processEncrypt(password, hint, dateCreated, expirationDate, lockDate) {
    //showSpinner();
    encryptionDone = false;
    decryptionDone = false;
    resultDTO = {};
    resultDTO.result = 0;
    resultDTO.message = "";
    let fName = "";
    let messages = ["Process completed ok", "No data to process", "Empty or invalid password.", "Invalid file type. Cannot process file"];
    let lk = "";
    let instructions = "";
    let showHint = "";
    let fMode = "";
    let instructionsFile = "";

    if (!usingFile)
        instructions = getInstructions();
    else 
    {
        instructionsFile = getFileInstructions();
    }

    if (config.ShowLink && !usingFile)
        lk = `Link: ${landingLink}\n`;

    if (hint.length > 0)
        showHint = `Hint:${hint}\n`;

    if (data.length == 0)
        resultDTO.result = -1;
    else if (password.length < config.MinPwdLen)
        resultDTO.result = -2;

    let encryptionLength = data.length;


    if (resultDTO.result == 0) {
        eo = {};    //encryptObject
        eo.DateCreated = dateCreated;
        eo.DateExpiry = expirationDate;
        eo.DateLock = lockDate;
        eo.Version = versionNumber;
        eo.data1 = "";
        eo.FileType = "text";
        eo.Users = "";
        eo.SecondPassword = "";

        os = {};
        os.Link = lk;
        if ( config.SendInstructions)
        {
            os.SoftwareID = `${softwareID} ${versionNumber}`;
            os.Instructions = instructions;
        }

        if ( hint.length > 0 )
            os.Hint = hint;

        if ( usingFile )
            os.FileName = fileName;

        os.FileMode = fileMode;
        os.FileType = "text";

        os.data = "";
        os.data2 = "";
        os.data3 = "";

        if (usingFile) {
            if (selFile) 
                os.FileType = selFile.type;

            fMode = `FileMode:${fileMode}\n`;

            encryptionLength = data.length * (encryptionLevel / 100);
            eo.data1 = data.substr(0, encryptionLength);
            fName = fileName + ".txt";
        }
        else
        {
            eo.data1 = data;
            setField("loadedText",data);
        }

        os.data = JSON.stringify(eo);
        os.data = sjcl.encrypt(password, JSON.stringify(eo));
        setField("userPassword", "");
        let ix = os.data.indexOf(`"ct":"`);
        if (ix > 0) {
            //todo: ensure makeid not generating "datax" strings
            let part1 = os.data.substr(0, ix + 6);
            let part2 = os.data.substr(ix + 6);
            os.data = btoa(part1);
            os.data2 = part2;
        }

        if (encryptionLength < data.length)
            os.data3 = data.substr(encryptionLength);


        data = `SoftwareID:${softwareID} ${versionNumber}
${showHint}${lk}${instructions}${fMode}
data:${os.data}data2:${os.data2}data3:${os.data3}`;

        if (usingFile) {
            let fn = getField("txFileName");
            if ( fn.length > 0 )
                fileName = fn;

            outFileName = fileName; //`${fileName}.crypti.txt`;
            downloadDataFile(JSON.stringify(os), outFileName);
            //writeTextFile(null,JSON.stringify(os), `${fileName}.json`)
            resultDTO.message = "File encrypted and downloaded locally.";

            copyToClipboardNew(`${instructionsFile}\n${lk}`,false);

        }
        else
            setField("loadedText",`${os.data}${os.data2}`);
        encryptionDone = true;
        return resultDTO;
    }
}


function doEncryptNew() {

    if ( data.length == 0 && !usingFile)
        data = getField("inputText");

    if (data.length > 0 && validatePassword()) {
        showSpinner(true,"Encrypting...");
        let dateCreated = new Date();
        let expirationDate = dateCreated;
        let lockDate = dateCreated;

        let hint = getField("pwdHint");

        if (validatePassword()) {
            let password = getPassword();
            let resultDTO = processEncrypt(password, hint, dateCreated, expirationDate, lockDate);
            showSpinner(false);
            if (resultDTO.result >= 0) {
                updateTotals(1);
                gotoPage(1);
                setField("userPassword", "");
                hideControl("divEncrypt");
                hideControl("divDecrypt");
                hideControl("divInputText");
                hideControl("divErase");
                //showBlock("divHide");
                hideControl("divFileInfo");
                showBlock("divShare");
                hideControl("divNext");
                hideControl("divViewPassword");
                Keyboard.close();
        
                if (usingFile)
                {
                    hideControl("divInputPDF");
                    showMessage(`${encryptIcon} OK. Share from Downloads Folder: <b>${outFileName}</b>. </br>Instructions copied to clipboard.`, statusSuccess);
                    hideControl("divNext");
                }
                else {
                    copyToClipboardNew(data, false);
                    hidePages();
                    showMedia("divText");
                    showBlock("divPaste");
                    showBlock("divOpenFile");
                    //showBlock("divHide");
                    showMessage(`${encryptIcon} OK. Copied to clipboard. ${shareIcon} to Share.`, statusSuccess);
                }
                hideControl("divNext");
            }
            else {
                showSpinner(false);
                showError("Error encrypting data.", statusError);
            }
        }
    }
    
}







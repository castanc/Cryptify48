

function processDecrypt(password) {
    encryptionDone = false;
    decryptionDone = false;
    resultDTO = {};
    resultDTO.result = 0;
    resultDTO.message = "";
    let fName = "";
    let messages = ["Process completed ok", "No data to process", "Empty or invalid password.", "Invalid file type. Cannot process file"];
    let isJson = false;
    
    if ( usingFile )
        isJson = fileName.toLowerCase().includes(".crypti") &&
        fileName.toLowerCase().endsWith(".txt");

    if (data.length == 0)
        resultDTO.result = -1;
       
    else if (password.length < config.MinPwdLen)
        resultDTO.result = -2;

    if (resultDTO.result == 0) {
        let os = {}
        os.data3 = "";
        if (isJson)
        {
            os = JSON.parse(data);
            fileName = os.FileName;
        }
        else {
            os.data = extract(data, "data:", "data2:");
            os.data2 = extract(data, "data2:", "data3:");
            //todo: enable when supporting encryption coverage
            os.data3 = "";  // extract(data, "data3:");
            if (data.includes("FileMode:Binary"))
                os.FileMode = "Binary";
            else
                os.FileMode = "Text";
        }

        //os.data2 = os.data2.substr(10, os.data.length - 10); 
        //os.data = os.data.substr(5, os.data.length - 5); 
        os.data = atob(os.data)
        os.data = os.data + os.data2;
        data = "";
        try {
            os.data = sjcl.decrypt(password, os.data);
            setField("userPassword","");
            eo = JSON.parse(os.data);
            data = eo.data1 + os.data3;
            selFile.type = os.FileType;
            selFile.name = fileName;
            decryptionDone = true;
            resultDTO.message = "Decryption finished succesfully.";
        }
        catch (ex) {
            let err = ex.message;
            showSpinner(false);
            showError("Invalid data or password." + ex.message);
            resultDTO.result = -1;
            data = "";
        }
    }
    return resultDTO;
}


function doDecryptNew() {
        event.preventDefault();

    let result = validatePassword();
    if ( !result )
    {
        showError(lastError);
        return;
    }
    if (data.length > 0 && result  ) {
        showSpinner(true,"Decrypting...");
        let password = getPassword();
        let resultDTO = processDecrypt(password);
        showSpinner(false);
        if (resultDTO.result >= 0 )
        {
            gotoPage(1);
            setField("userPassword","");
            hideControl("divInputText");
            hideControl("divEncrypt");
            hideControl("divDecrypt");
            showBlock("divDownload");
            hideControl("divShare");
            hideControl("divNext");
            hideControl("divErase");
            //hideControl("divView");
            hideControl("divViewPassword");
            Keyboard.close();
    

            //todo update selFile with decrypted file info
            selFile.size = data.length;
            showData();
            sumTotals("D",data.length);
            if ( !usingFile )
            {
                if ( config.CopyDecrypted)
                {
                    copyToClipboardNew(data);
                    hideControl("divCopy");
                    showMessage(`${decryptIcon} OK. Copied to clipboard. ${saveIcon}to Save.`,statusSuccess);

                }
                else
                {
                    showBlock("divCopy");
                    showMessage(`${decryptIcon} OK. ${copyIcon}to Copy. ${saveIcon}to Save.`,statusSuccess);
                }
                setField("loadedText",data);
                showMedia("divText");
                hideControl("divFileInfo");
            }
            else 
            {
                //showMedia();
                showMessage(`${decryptIcon}OK. ${saveIcon}To Save.`,statusSuccess);
                //showBlock("divHide");
                showBlock("divDownload");
                //hideControl("divView");
                hideControl("divInputPDF");
                showBlock("divFileInfo");
                hideControl("divNext");
            }
            hideControl("PAGE1");
            hideControl("PAGE2");
        }
        else
        {
            //hideControl("divView");
            //hideControl("divHide");
             showError(lastError);
        }
    }
    else showError("Invalid data.");
}







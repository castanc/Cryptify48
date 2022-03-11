


function closeAllAux() {
    if (currentSection.length > 0)
        hideControl(currentSection);

    currentSection = "";

    settingsOpen = false;
    logOpen = false;
    sysInfoOpen = false;
    // hideControl("divSysInfo");
    // hideControl("divSysSettings");
}


function setSourceData(value = "") {
    data = "";
    let result = false;
    if (!value || value.length == 0) {
        value = getField("inputText");
    }
    if (value.length > 0) {
        data = value;
        result = true;
    }
    else {
        showError("Enter data to encrypt.");
        if (page == 1)
            nextPage();
    }
    return result;
}

function validateHint() {
    if (fieldTouched)
        nextPage();
}


function enableOptions() {
    hideControl("divInfo");

    let pwd = getField("userPassword");
    if (canProcess && pwd.length >= config.MinPwdLen && data.length > 0 && !(encryptionDone || decryptionDone)) {
        showBlock("divEncrypt");
        showBlock("divDecrypt");
    }
    else {
        hideControl("divEncrypt");
        hideControl("divDecrypt");
    }

    if (encryptionDone || decryptionDone) {
        hideControl("divNext");
        hideControl("PAGE1");
        hideControl("PAGE2");
        if (usingFile)
            hideControl("divShare");
        else
            showBlock("divShare");

        if (decryptionDone) {
            if (usingFile) {
                showBlock("divDownload");
                hideControl("divShare");
            }
        }
    }
    else if (!encryptionDone && !decryptionDone) {
        if (canProcess)
            showBlock("divNext");
        hideControl("divDownload");
        hideControl("divShare");
        hideControl("divCopy");
    }
    if (manualText) {
        showBlock("divPaste");
        hideControl("divMedia");
    }
    if (!canProcess)
        hideControl("divNext");

}



function gotoPage(pageId) {
    currentSection = `PAGE${page}`;
    hideControl(currentSection);
    page = pageId;
    if (page > totalPages)
        page = 1;
    currentSection = `PAGE${page}`;
    showBlock(`PAGE${page}`)

    togglePage();
}



function nextPage() {
        event.preventDefault();

    handleSysIcons();
    currentSection = `PAGE${page}`;
    hideControl(currentSection);
    page++;
    if (page > totalPages)
        page = 1;
    currentSection = `PAGE${page}`;
    showBlock(`PAGE${page}`)
    togglePage();
}



function showSection(sectionName) {
    addTrace(`showSection(${sectionName})`)
    if (currentSection.length > 0)
        hideControl(currentSection);
    currentSection = sectionName;
    showBlock(sectionName);
}


async function doCopy() {
        event.preventDefault();

    copyToClipboardNew(data, true);

}




function pasteFromClipboard(fieldId) {
        event.preventDefault();

    pasteClipboard();
    // let text = getField("inputText");
    // if ( text.length>0)
    //     showMessage(`Text pasted from clipboard (${text.length}) bytes.`);
    // console.log("index.pasteClipboard(): CLipboard text:", text);

}


function finishInputText() {
    showMessage("");
    if (data.length == 0)
        data = getField("inputText");
    showData();

}


function selectPaste() {
    closeAllAux();

    handleSysIcons();
    reset();
    hideControl("divInputText");
    toggleInitialIcons();
    hideControl("bigFile");
    let dt = pasteClipboard();
    //gotoPage(1);
}
function selectText() {
    handleSysIcons();
    clear();
    toggleInitialIcons();
    hideControl("bigFile");

}

function setData(value) {
    manualText = true;
    //toggleClear();
}

function finishText() {
    data = getField("inputText");
    if (data.length > 0) {
        setField("loadedText", data);
        manualText = true;
        currentMedia = " divText";
    }

}

function getPassword() {
    return getField("userPassword");
}


//https://www.csestack.org/hide-show-password-eye-icon-html-javascript/
function enableViewPassword(idField, eyeField) {
	const togglePassword = document.getElementById(eyeField);
	const password = document.getElementById(idField);

	togglePassword.addEventListener('click', function (e) {
		// toggle the type attribute
		e.preventDefault();
		//event.preventDefault();
		const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
		password.setAttribute('type', type);
		// toggle the eye slash icon
		this.classList.toggle('fa-eye-slash');
	});
}




function checkPassword() {
    let pwd = getField("userPassword");
    if ( pwd.length > 0 )
        showBlock("divViewPassword");
    else
        hideControl("divViewPassword");

    let dataReady = pwd.length >= config.MinPwdLen;
    dataReady = true;
    if (dataReady) {
        showBlock("divEncrypt");
        if (encryptedFile)
            showBlock("divDecrypt");
    }

    return dataReady;
}

function validatePassword(value) {
    console.log("validatePassword");
    if (!value)
        value = getPassword();

    let result = false;

    result = value.length >= pwdLen;
    if (!result) {
        if (page != 2)
            gotoPage(2);
        showError(`Password must be minimum ${pwdLen} in length`, statusError);
    }

    return result;
}

function finishPage() {
    if (!mobile)
        nextPage();
}

function firstData() {
    console.log("firstData()");
    // hideControl("divInfo");
    // hideControl("divSettings");

}

function performEncrypt() {
    let r = doEncrypt();
    showResultMessage(r);
    if (r.result >= 0) {
        hideControl("PAGE1");
        hideControl("PAGE2");
    }


}



function handleSysIcons() {
    showMessage("");
    if (sysIcons) {
        hideControl("divInfo");
        hideControl("divSettings");
        sysIcons = false;
    }
}

function showPasswordMessage() {
    let pwd = getPassword();
    if (pwd.length < config.MinPwdLen) {
        hideControl("divMedia");
        hideControl("divInputText");
        gotoPage(2);
        showWarning("Optional <i>Password Hint</i>, <b>Password. (*Required)</b>", statusWarning);
        setFocus("userPassword");
    }
}

function warningMessage() {

    let msg = `Type or ${pasteIcon} Paste Text, or ${folderIcon} Open a File.`;
    if (data.length == 0) {
        showWarning(msg)
    }

}

function togglePage() {
    showMessage("");
    if (page == 1) {
        warningMessage();
        setCurrentField("inputText");
        if (usingFile) {
            hideControl("divInputText");
        }
        if (manualText || dataFromClipboard)
            showMedia("divText");

        if (mediaOpen) {
            showBlock(currentMedia);
            showBlock("divMedia");
            showBlock("divFileInfo");
            showBlock("divHide");
        }
        else {
            hideControl("divMedia");
            hideControl("divHide");
        }
    }
    else if (page == 2) {
        let pwd = getPassword();
        setCurrentField("userPassword");
        if (pwd.length < config.MinPwdLen) {
            showWarning("Optional <i>Password Hint</i>, <b>Password. (*Required)</b>", statusWarning);
            setFocus("userPassword");
        }
        if (encryptedFile || manualText || dataFromClipboard)
            showFileInfo();
        else {
            hideControl("divMedia");
            hideControl("divView");
            hideControl("divHide");
        }
    }
}

function isDataReady() {
    let pwd = getField("userPassword");
    return (data.length + pwd.length >= 0);
}

function toggleInitialIcons() {
    if (!isDataReady()) {
        showBlock("divSettings");
        showBlock("divInfo");
    }
    else {
        hideControl("divSettings");
        hideControl("divInfo");
    }
    showBlock("divNext");
}

function toggleCanProcess(canProc, fSize) {
    if (!canProc) {
        setIconsStateInitial();
        gotoPage(1);
        showError(`File too big (${fSize}) for current RAM Memory.(${navigator.deviceMemory})GB`, statusWarning);
    }
}


function toggleClear() {
    console.log("toggleClear()");
    if (!isDataReady()) {
        if (page == 2)
            gotoPage(1);
    }
}

function setIconsStateInitial() {
    sysInfoOpen = false;
    settingsOpen = false;
    hideControl("divSysInfo");
    hideControl("divSysSettings");
    showBlock("divInfo");
    showBlock("divSettings");
    hideControl("divShare");
    hideControl("divCopy");
    hideControl("divEncrypt");
    hideControl("divDecrypt");
    hideControl("divDownload");



    hideControl("divMedia");
    hideControl("PAGE2");
    hideControl("divView");
    hideControl("divHide");
    showBlock("divPaste");
}


function reset() {
    clear();
}

function doClear() {
    clear();
}

function closeHelp() {
    hideControl("divHelp");
}

function showHelp() {
    if (config.ShowHelp) {
        let helpHtml = `Icon legends:</br>
${homeIcon} Start, Clear All, Enter manual text</br>
${infoIcon} System Info</br>
${settingsIcon} Settings</br>
${copyIcon} Copy decrypted text</br>
${pasteIcon} Paste text</br>
${folderIcon} Open local file</br>
${pdfIcon} See loaded PDF ( Desktop only )</br>
${encryptIcon} Encrypt Loaded Data</br>
${decryptIcon} Decrypt Loaded Data</br>
${eyeIcon} See Media</br>
${hideIcon} Hide Media</br>
${shareIcon} Share Encrypted text</br>
${saveIcon} Save Decrypted data</br>
${nextIcon} Next page</br>
`;

        showInfoAt("helpText", helpHtml);
        if ( config.ShowHelp )
            showBlock("divHelp");

    }
    else hideControl("divHelp");

}

function clear() {
    event.preventDefault();
    closeAllAux();
    hideControl("divHelp");

    if (encryptionDone || decryptionDone)
        clearMedia();

    document.getElementById("mainForm").reset();

    fieldTouched = false;
    encryptedFile = false;
    usingFile = false;
    readBase64 = false;
    data = "";
    mediaOpen = false;
    fileDecrypted = false;
    encryptionDone = false;
    encryptedText = false;
    decryptionDone = false;
    dataFromClipboard = false;
    canProcess = true;
    currentMedia = "";
    data = "";
    noFocus = false;
    sysIcons = true;
    manualText = false;
    isPDF = false;
    sharingFile = false;


    // setField("inputText", "");
    // setField("loadedText", "");
    // setField("userPassword", "");
    // setField("pwdHint", "");

    setIconsStateInitial();
    showBlock("divInfo");
    showBlock("divSettings")

    showBlock("divNext");
    showBlock("divInputText");
    showBlock("divPaste");
    showBlock("divOpenFile");
    hideControl("divInputPDF");
    hideControl("divFileInfo");
    hideControl("divDownload");
    hideControl("divDownload2");
    showBlock("result");
    showTitle();

    hideControl("divView");
    hideControl("divHide");
    hideControl("divViewPassord");
    gotoPage(1);
    currentField = "inputText";
    openKeyboard();
}

function setOffHelpMessage(value) {
    config.ShowHelp = value;
    saveConfig();
    hideControl("divHelp");
}

function setFieldTouched() {
    fieldTouched = true;
}


function enableInput() {
    console.log("enableInput");
    if (manualText || dataFromClipboard) {
        setField("inputText", data);
        showBlock("divInputText");
        toggleMedia();
    }
}

function viewInputPDF() {
        event.preventDefault();

    if (!mobile) {
        let pdfWindow = window.open("")
        pdfWindow.document.write(`<iframe width='100%' height='100%' src='${data}'></iframe>`);
    }
}

function openPDF() {
    if (!mobile) {
        let pdfWindow = window.open("")
        pdfWindow.document.write(`<iframe width='100%' height='100%' src='${data}'></iframe>`);
    }
    else doDownload(data, fileName);
}

function renderPDF() {
    if (!mobile) {
        let html = `<iframe width='100%' height='100%'  src='${data}'></iframe>`;
        html = `<iframe src='${data}'></iframe>`;

        let divpdf = document.getElementById("divPDF");
        writeInnerHTML("divPDF", html);
        showBlock("divPDF");

    }

}


function resetHard() {
    clear();
    skipLanding = true;
    addInstructions = true;
    hideControl("encryptActions");
    for (let i = 0; i < 20; i++) {
        copyToClipboardNew(makeid(64));
        showMessage(`Reset complete.(${i})`);
    }
    showMessage("Reset Complete.");


}


function doReadFile(evt) {
    showMessage("Reading file...");
    handleFileSelect(evt);
    showData();
}




function toggleSysInfo() {
        event.preventDefault();

    hideControl("divHelp");
    if (settingsOpen)
        toggleSettings();

    sysInfoOpen = !sysInfoOpen;
    if (sysInfoOpen) {
        currentSection = "divSysInfo";
        hideControl("PAGE1");
        hideControl("PAGE2");
        showInfo("System Info");
        console.log("userEmail", userEmail);
        showBlock("divSysInfo");
    }
    else {
        showInfo("");
        hideControl("divSysInfo");
        gotoPage(1);
    }
}


function toggleSettings() {
    event.preventDefault();
    hideControl("divHelp");
    settingsOpen = !settingsOpen;
    if (settingsOpen) {
        currentSection = "divSysSettings";
        hideControl("PAGE1");
        hideControl("PAGE2");
        showInfo("Settings");
        configChanged = false;
        showBlock("divSysSettings");

    }
    else {
        if (getSettingsSave()) {
            hideControl("divSysSettings");
            gotoPage(1);
            showInfo("Settings updated.");
        }

    }
}

function getTotalsText() {
    let html = `</br></br>
    ${encryptIcon} ${totals.te}, ${getSizeText(totals.teb)} 
    ${decryptIcon} ${totals.td}, ${getSizeText(totals.tdb)} 
    ${encryptIcon}${decryptIcon} ${totals.te + totals.td}, ${getSizeText(totals.teb + totals.tdb)}</br>
    `;

    return html;
}


function hideSysInfo() {
    gotoPage(1);
    hideControl("sysInfo");
}

function function6() {
    mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    //mobile=false //desktop

    getIsDesktop();
    window.onerror = function (msg, url, line) {
        showError(`${msg}</br>${url}</br>Line:${line}`);
        // alert("Message : " + msg);
        // alert("url : " + url);
        // alert("Line number : " + line);
    }

    createMenu();
    if ( location.protocol != "https:")
        initConfig();
    else
        getUserEmail();

    // if ( !mobile || location.protocol != "https:")
    //     window.location.replace("https://sites.google.com/view/kryptifystage/home");

    setField("txDarkMode", darkMode);
    setField("txFileAPISupported", supported.toString());
    setField("txCanCopy", canCopy.toString());
    setField("txUserAgent", navigator.userAgent);
    setField("txProtocol", location.protocol);
    setField("txWidth", window.innerWidth);
    setField("txMobile", mobile);
    setField("txRAM", navigator.deviceMemory.toString());
    //setField("txUserId", userEmail);
    maxData = navigator.deviceMemory * 1024 * 1024 * 3;

    // const togglePassword = document.getElementById("togglePassword");
    // const password = document.getElementById("userPassword");

    // togglePassword.addEventListener('click', function (e) {
    //     // toggle the type attribute
    //     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    //     password.setAttribute('type', type);
    //     // toggle the eye slash icon
    //     this.classList.toggle('fa-eye-slash');
    // });


    // const ctl = document.getElementById("divView");
    // ctl.addEventListener('click', function (e) {
    //     // toggle the type attribute
    // 	if ( mediaOpen )
    //     {
    //         hideControl("divMedia");
    // 		this.classList.toggle("fa-eye");
    //         mediaOpen = false;
    //     }
    // 	else
    //     {
    //         showBlock("divMedia");
    //     	this.classList.toggle("fa-eye-slash");
    //         mediaOpen = true;
    //     }
    // });

    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    fileSelectionDiv = "fileSelection";

    if (!supported) {
        document.getElementById('files').addEventListener('change', handleFileSelect, false);
        fileSelectionDiv = "fileSelection";
    }

    showBlock("iconMenu");
    warningMessage();


    window.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) { }
        {
        }

        if (e.getModifierState('CapsLock')) {
            showWarning("CAPS Lock is ON");
            CAPSLockOn = true;
        }
        else {
            //showMessage("");
            CAPSLockOn = false;
        }
    });

    window.addEventListener('onunload', function (e) {
        saveLogs();
    });


    const togglePassword = document.getElementById("viewPassword");
    const password = document.getElementById("userPassword");
    
	togglePassword.addEventListener('click', function (e) {
		// toggle the type attribute
		//e.preventDefault();
		event.preventDefault();
		const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
		password.setAttribute('type', type);
		// toggle the eye slash icon
		this.classList.toggle('fa-eye-slash');
	});


    if (location.protocol != "https");
        showHelp();


    // window.addEventListener('beforeunload', function (e) {
    //     e.preventDefault();
    //     e.returnValue = '';
    // });    
    showTitle();
    window.scrollTo(0, 1);
    setCurrentField("inputText");
    if ( mobile )
        config.UseGreenKeyboard = true;

    openKeyboard();
    disableInputs(mobile);
}

function createMenuNavBar(genAddUpdate = false, icons = false) {
    //todo: causes infine recursion
    let canSave = true; // validateParameters();
    let options = [];
    let html = "";


    options.push({ icon: "fas fa-cog", parent: "", className: "btn-secondary", id: "btnSysInfo", kind: "main", method: "menuChanged", pars: "'KEYS_SELECTION','KEYS'", caption: "System info" });
    options.push({ icon: "fas fa-paste", parent: "", className: "btn-secondary", id: "btnPARAMETERS", kind: "main", method: "menuChanged", pars: "'PARAMETERS_SELECTION','PARAMETERS'", caption: "PARAMETERS" });
    options.push({ separator: "|", icon: "far fa-save", parent: "FINISH", className: "btn-secondary", id: "btnFINISH", kind: "main", method: "menuChanged", pars: "'SAVE_SELECTION','FINISH'", caption: "FINISH" });



    if (!existingKey && genAddUpdate) {
        if (currentKey.length > 0 &&
            currentValue.length > 0 && section == "KEYS")
            options.push({ icon: "fa-solild fa-plus", className: "btn-primary", id: "btnAdd", method: "createKey", caption: "Add" });
    }


    if (section == "KEYS") {
        if (existingKey && currentValue.length > 0) {
            if (genAddUpdate)
                options.push({ icon: "fa-solid fa-pen-to-square", className: "btn-primary", id: "btnUpdate", method: "updateKey", caption: "Update" });

            //options.push({ icon: "fa fa-file-signature", id: "btnRename", method: "renameKey", caption: "Rename" });

        }
        if (currentKey.length > 0) {
            options.push({ icon: "fa-shuffle", className: "btn-secondary", id: "btnGenerate", method: "generate", caption: "Random" });
            options.push({ icon: "fa-hand-sparkles", className: "btn-secondary", id: "btnRules", method: "validateMeetRules", caption: "Rules" });
        }
    }

    if (newFile && section == "FINISH")
        options.push({ icon: "fa-shuffle", className: "btn-secondary", id: "btnRandom", method: "generate2", caption: "Random" });

    if (section == "KEYS" && existingKey)
        options.push({ icon: "fa trash-can", className: "btn-danger", id: "btnDelete", method: "deleteKey", caption: "Delete" });

    if (kch || sch || pch)
        options.push({ icon: "far fa-square", className: "btn-secondary", id: "btnClear", method: "clearForm", caption: "Clear" });


    let dout = getValue("saveForm", "dataOut").trim();
    if (section == "FINISH" && dout.length > 0)
        options.push({ icon: "fa-regular fa-copy", className: "btn-secondary", id: "btnCopy", method: "copyToCC", pars: 'dataOut', caption: "Copy" });

    options.push({ icon: "fa-regular fa-floppy-disk", className: "btn-success", id: "btnSave", method: "saveToDisk", caption: "Save" });

    if (supported && location.protocol == "https:")
        options.push({ icon: "fa-solid fa-floppy-disk", onclick: `onclick="saveAsToDisk()"`, caption: "Save As" });

    //buildMenu("MENU1", "", options, "fa fa-bars");
    buildMenuButtons("MENU1", options);
}



function doShare() {
        event.preventDefault();

    if (data.length > 0)
        shareData("Criptyfy", data, landingLink);
    else
        showError("No data to share.");

}


function doSharePwd() {
    let pwd = getField("userPassword");
    if (pwd.trim().length > 0) {
        let hint = getField("pwdHint");
        shareData(`Criptyfy:
${hint} ${pwd}`, "");
    }
    else showError("Empty password.");
}


//Main entry point

window.addEventListener('load', function6);


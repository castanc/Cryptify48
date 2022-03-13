var currentField = "";

function openKeyboard(force = false) {
    if (force || config.UseGreenKeyboard) {
        if (currentField.length > 0) {
            let x = document.getElementById(currentField);
            Keyboard.open(x.value, keyed);
        }
    }
}

function keyed(k) {
    if ( Keyboard.properties.isOpen && initialMenuOptions )
    {
        showMessage("");
        hideControl("divInfo");
        hideControl("divSettings");
        hideControl("divOpenFile");
        hideControl("divPaste");
        initialMenuOptions = false;
    }
    let x = document.getElementById(currentField);
    let last = k.substr(k.length - 1);

    if (Keyboard.properties.capsLock) {
        if (Keyboard.shiftKeys.original.includes(last)) {
            let ix = Keyboard.shiftKeys.original.indexOf(last);
            k = k.substr(0, k.length - 1) + Keyboard.shiftKeys.shifted.substr(ix, 1);
        }
    }
    // if (Keyboard.properties.tilde) {
    //     if (Keyboard.foreign.tildeOrig.includes(last)) {
    //         let ix = Keyboard.foreign.tildeOrig.indexOf(last);
    //         k = k.substr(0, k.length - 1) + String.fromCharCode(Keyboard.foreign.tildeShifted[ix]);
    //     }
    // }
    if (Keyboard.properties.acute) {
        if (Keyboard.foreign.aCute.includes(last)) {
            let ix = Keyboard.foreign.aCute.indexOf(last);
            k = k.substr(0, k.length - 1) + String.fromCharCode(Keyboard.foreign.aCuteShifted[ix]);
        }
    }

    Keyboard.properties.value = k;
    x.value = k;

    if (currentField == "userPassword") {
        if (k.length > 0)
            showBlock("divViewPassword");
        else
            hideControl("divViewPassword");

            if ( k.len)
        showBlock("divEncrypt");
        if ( openEncryptedFile)
            showBlock("divDecrypt");
    }

}


function getAsciis(){

    let text = "";
    let i = 1
    while(i<1023)
    {
        text = `${text}\n${i}\t${String.fromCharCode(i)}`;
        i++;
    }
    setField("inputText",text);
    copyToClipboardNew(text);
    return text;
}

function setCurrentField(cField) {
    if (currentField.length > 0) {
        let x = document.getElementById(currentField);
        x.style.backgroundColor = "black";
        x.style.color = "white";
    }
    currentField = cField;
    let x = document.getElementById(cField);
    x.style.backgroundColor = "white";
    x.style.color = "black";
    Keyboard.properties.value = x.value;

    let dbgMsg = `setCurrentField(${cField}) [${Keyboard.properties.value}]`;
    console.log(dbgMsg);
}

function disableInputs(val = true) {
    disableCtl("inputText", val);
    disableCtl("userPassword", val);
    disableCtl("pwdHint", val);
    disableCtl("txUserId", val);
    disableCtl("txDarkMode", val);
    disableCtl("txFileAPISupported", val);
    disableCtl("txCanCopy", val);
    disableCtl("txProtocol", val);
    disableCtl("txWidth", val);
    disableCtl("txRAM", val);
    disableCtl("txMobile", val);
    disableCtl("txUserAgent", val);
    
    // txMinPwdLen
    // txGenPwdLen
    // chbShowMedia
    // chbSendInstructions
    // chbSendLink
    // chbCopy
    // chbZoom

}
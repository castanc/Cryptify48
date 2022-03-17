var currentField = "";

function openKeyboard(force = false) {
    let currVal = "";
    if (force || mobile || config.UseGreenKeyboard) {
        if (currentField.length > 0) {
            let x = document.getElementById(currentField);
            if ( x) 
                currVal = x.value;
        }
        Keyboard.open(currVal, keyed);
    }
}



function keyed(k) {
    if (Keyboard.properties.isOpen && initialIcons) {
        showMessage("");
        hideControl("divInfo");
        hideControl("divSettings");
        hideControl("divOpenFile");
        hideControl("divPaste");
        hideTitle();
        initialIcons = false;
    }
    showMessage("");
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

        if (k.length >= config.MinPwdLen)
            showBlock("divEncrypt");
        if (openEncryptedFile && k.length >= config.MinPwdLen)
            showBlock("divDecrypt");
    }


}


function getAsciis() {

    let text = "";
    let i = 1
    while (i < 1023) {
        text = `${text}\n${i}\t${String.fromCharCode(i)}`;
        i++;
    }
    setField("inputText", text);
    copyToClipboardNew(text);
    return text;
}

function protectFields(flds)
{
    let f = flds.split(",");
    f.forEach(fld=>{
        let x = document.getElementById(fld);
        if ( x )
        {
            x.style.backgroundColor = "black";
            x.style.color = "white";
        }
    })
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

    showBlock("divErase");
    if ( (mobile || config.UseGreenKeyboard)) // && !Keyboard.properties.isOpen ) //&& !mediaOpen )
        openKeyboard();

    // let dbgMsg = `setCurrentField(${cField}) [${Keyboard.properties.value}]`;
    // console.log(dbgMsg);
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
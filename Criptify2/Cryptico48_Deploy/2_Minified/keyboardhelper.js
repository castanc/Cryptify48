var currentField = "";

function openKeyboard(force=false) {
    if (force || config.UseGreenKeyboard) {
        if (currentField.length > 0) {
            let x = document.getElementById(currentField);
            Keyboard.open(x.value, keyed);
        }
    }
}

function keyed(k) {
    console.log("keyed", k);
    let x = document.getElementById(currentField);
    x.value = k;
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
    let dbgMsg = `setCurrentField(${cField}) [${Keyboard.value}]`;
    console.log(dbgMsg);
    Keyboard.value = getField(cField);
    dbgMsg = `setCurrentField(${cField}) [${Keyboard.value}]`;
    console.log(dbgMsg);

}

function disableInputs(val=true)
{
    disableCtl("inputText",val);
    disableCtl("userPassword",val);
    disableCtl("pwdHint",val);
}
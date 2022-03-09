function openKeyboard()
{
    let x = document.getElementById(currentField);
    Keyboard.open(x.value,keyed);
}

function keyed(k)
{
    console.log("keyed",k);
    let x = document.getElementById(currentField);
    x.value = k;
}
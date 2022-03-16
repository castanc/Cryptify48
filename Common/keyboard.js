const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    shiftKeys: {
        original: "1234567890,.?'()",
        shifted: "!~#$%^&*[];:/\"{}"
    },


    foreign: {
        tildeOrig: "naoNAO",
        tildeShifted: [327, 227, 245, 
            209, 195, 336],
        aCute: "aeiouynAEIOUYN",
        aCuteShifted: [225, 233, 237, 243, 250, 253, 241,
            193, 201, 205, 211, 218, 221,209]
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false,
        tilde: false,
        acute: false,
        currentKeyElement: null,
        isOpen: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.keysContainer.classList.add("key-size");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    //tab key: fa fa-step-forward
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m",",", ".", "?",
            "'","@","(",")","space", "acute" 
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        const createFAIconHTML = (icon_name) => {
            return `<i class="${icon_name}"></i>`;
        };



        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "tab":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createFAIconHTML("fa fa-step-forward");

                    keyElement.addEventListener("click", () => {
                        nextPage();
                    });

                    break;
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;


                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "tilde":
                    //setup toggeable button
                    //<i class="fa-solid fa-tilde"></i>

                    //keyElement.innerHTML = createFAIconHTML("fa-solid fa-tilde");
                    keyElement.classList.add("keyboard__key--activatable");

                    keyElement.addEventListener("click", () => {
                        //this._toggleCapsLock();
                        this.properties.tilde = !this.properties.tilde;
                        keyElement.classList.toggle("keyboard__key--active", this.properties.tilde);
                    });
                    break;

                case "acute":
                    //setup toggeable button
                    keyElement.classList.add("keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("circle");

                    keyElement.addEventListener("click", () => {
                        //this._toggleCapsLock();
                        this.properties.acute = !this.properties.acute;
                        keyElement.classList.toggle("keyboard__key--active", this.properties.acute);
                    });
                    break;


                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        if (currentField == "userPassword")
                        {
                            nextPage();
                            setCurrentField("pwdHint");
                        }
                        else if ( currentField== "userEmail")
                            saveEmail();
                        else {
                            this.properties.value += "\n";
                            this._triggerEvent("oninput");
                        }
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");
                    //keyElement.innerHTML = createFAIconHTML("fa fa-window-close");
                    

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {

        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();

                if (this.properties.capsLock) {
                    if (this.shiftKeys.original.includes(key.textContent)) {
                        let ix = this.shiftKeys.original.indexOf(key.textContent);
                        key.textContent = this.shiftKeys.shifted.substr(ix, 1);
                    }
                }
                else {
                    if (this.shiftKeys.shifted.includes(key.textContent)) {
                        let ix = this.shiftKeys.shifted.indexOf(key.textContent);
                        key.textContent = this.shiftKeys.original.substr(ix, 1);
                    }

                }

            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
        this.properties.isOpen = true;
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
        this.properties.isOpen = false;
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
var totals = {};

function createConfig() {
    //userEmail = "";
    config = {};
    config.FirstUse = new Date();
    config.Version = versionNumber;
    config.LastReportDate = new Date();
    config.showMediaOnOpen = true;
    config.IP = "";
    config.mobile = false;
    config.UserEmail = userEmail;
    config.MinPwdLen = 4;
    config.GenPwdLen = 64;
    config.SendInstructions = true;
    config.ShowLink = true;
    config.ServerId = 0;
    config.UserType = "F";
    config.FreeDays = 30;
    config.ShowHelp = true;
    config.CopyDecrypted = true;
    config.UseGreenKeyboard = mobile;
}


function createRecordFirstTime() {
    let rec  = {};
    rec.width = window.innerWidth;
    rec.StartDate = getTimeStamp(new Date());
    rec.EndDate = rec.StartDate;
    rec.userAgent = navigator.userAgent;
    rec.protocol = location.protocol;
    rec.height = window.innerHeight;
    rec.UserEmail = userEmail;
    if ( mobile )
        rec.mobile = 1;
    else
        rec.mobile = 0;

    rec.deviceId = deviceId;
    rec.userEmail = config.UserEmail;
    try
    {
        rec.RAM = navigator.deviceMemory.toString();
    }
    catch(ex)
    {
        rec.RAM = "Error";
    }
    return rec;
}


function createTotals() {
    rec = {};
    totals.StartDate = getTimeStamp(new Date());
    totals.EndDate = totals.StartDate;
    totals.te = 0;
    totals.td = 0;
    totals.teb = 0;
    totals.tdb = 0;
    totals.userAgent = navigator.userAgent;
    totals.protocol = location.protocol;
    totals.width = window.innerWidth;
    totals.height = window.innerHeight;
    if ( mobile )
        totals.mobile = 1;
    else
        totals.mobile = 0;
    totals.deviceId = deviceId;
    totals.userEmail = config.UserEmail;
    try
    {
        totals.RAM = navigator.deviceMemory.toString();
    }
    catch(ex)
    {
        totals.RAM = "Error";
    }
}

function sumTotals(op, size) {
    if (op == "E") {
        totals.te++;
        totals.teb += size;
        saveTotals();
    }
    else if (op == "D") {
        totals.td++;
        totals.tdb += size;
        saveTotals();
    }
}

function updateTotals() {
    let sd = new Date(totals.StartDate);
    let ed = new Date(totals.EndDate);
    let ms = ed.getTime() - sd.getTime();

    // To calculate the no. of days between two dates
    let secs = ms / 1000;
    let hours = ms / (1000 * 3600);
    let days = ms / (1000 * 3600 * 24);
    console.log("diff:", ms);
    if (isGoogleVer && hours > checkHours && location.protocol == "https:") {
        console.log("calling updateServerRecord()");
        updateServerRecord();
    }

}

function loadTotals() {
    console.log("loadTotals() reading totals")
    data = localStorage.getItem("totals");
    if (!data) {
        //recreate totals
        console.log("recreating totals");
        createTotals();
        totals.EndDate = getTimeStamp(new Date());
        data = JSON.stringify(totals);
    }
    if (data)
        try {
            totals = JSON.parse(data);
            updateTotals();
        }
        catch (ex) {
        }
    else
        createTotals();

}

function initConfig() {
    let obj = null;
    data = localStorage.getItem("data");
    try {
        if (data)
            obj = JSON.parse(data);
    }
    catch (ex) {
        obj = null;
    }
    if (!obj) {
        console.log("initConfig() creating configuration.")
        createConfig();
        createTotals();
        saveTotals();
        saveConfig();
        downloadDataFile(data, `${config.deviceId}.cry`);
        if (location.protocol == "https:") {
            registerFirstTime();
        }
    }
    else {
        try {
            //todo: use string obfuscations, base64 of first part of json before the encrypted data
            data = sjcl.decrypt(userEmail, data);
            config = JSON.parse(data);
            config.mobile = mobile;
            saveConfig();
            console.log("reading configuration", config)

            setField("txMinPwdLen", config.MinPwdLen.toString());
            setField("txGenPwdLen", config.GenPwdLen.toString());
            let ctl = document.getElementById("chbSendInstructions");
            ctl.checked = config.SendInstructions;

            ctl = document.getElementById("chbSendLink");
            ctl.checked = config.ShowLink;

            ctl = document.getElementById("chbShowMedia");
            ctl.checked = config.showMediaOnOpen;

            ctl = document.getElementById("chbHelp");
            ctl.checked = config.ShowHelp;

            ctl = document.getElementById("chbZoom");
            ctl.checked = config.FixZoomIssue;

            setField("txDarkMode", darkMode);
            setField("txFileAPISupported", supported.toString());
            setField("txCanCopy", canCopy.toString());
            setField("txUserAgent", navigator.userAgent);
            setField("txProtocol", location.protocol);
            setField("txWidth", window.innerWidth);
            setField("txMobile", mobile);
            setField("txRAM", navigator.deviceMemory.toString());
            setField("txUserId", config.UserEmail);
            loadTotals();
        }
        catch (ex) {
            //todo: detect if user deleted manually localstorage to force reregister
            showError("Error reading configuration. " + ex.message);
            createConfig();
            saveConfig();
            createTotals();
            saveTotals();
            //downloadDataFile(result, `Config.cry`);
            if (location.protocol == "https:")
                registerFirstTime();
        }
        showTitle();

    }
}


function getSavedUserEmail() {
    userEmail = localStorage.getItem("user");
    if (!userEmail) 
        userEmail = "";

    deviceId = localStorage.getItem("device");
    if (!deviceId)
        deviceId = makeid(64);
}


function saveConfig() {
    if (validateEmail(userEmail)) {
        let result = sjcl.encrypt(userEmail, JSON.stringify(config));
        localStorage.setItem("data", result);
        localStorage.setItem("user", userEmail);
        localStorage.setItem("device", deviceId);
        setField("txUserId", userEmail);
    }
    else
        localStorage.removeItem("data");

}

function saveTotals() {
    totals.EndDate = getTimeStamp(new Date());
    localStorage.setItem("totals", JSON.stringify(totals));
    updateTotals();
}

function getSettingsSave() {
    let result = false;
    if (validateMinPassword() && validateMaxPassword()) {
        let ctl = document.getElementById("chbSendInstructions");
        let val = ctl.checked;
        configChanged = configChanged || config.SendInstructions != val;
        config.SendInstructions = ctl.checked;

        ctl = document.getElementById("chbSendLink");
        val = ctl.checked;
        configChanged = config.ShowLink != val;
        config.ShowLink = val;

        ctl = document.getElementById("chbShowMedia");
        val = ctl.checked;
        configChanged = configChanged || config.showMediaOnOpen != val;
        config.showMediaOnOpen = val;

        ctl = document.getElementById("chbHelp");
        val = ctl.checked;
        configChanged = configChanged || config.ShowHelp != val;
        config.ShowHelp = val;

        ctl = document.getElementById("chbCopy");
        val = ctl.checked;
        configChanged = configChanged || config.CopyDecrypted != val;
        config.CopyDecrypted = val;

        ctl = document.getElementById("chbZoom");
        val = ctl.checked;
        configChanged = configChanged || config.UseGreenKeyboard != val;
        config.UseGreenKeyboard = val;

        if (config.FixZoomIssue) {
            document.body.classList.remove("text-rsponsive");
        }


        if (configChanged) {
            saveConfig();
            showMessage("Configuration saved succesfully.");
            configChanged = false;
        }
        result = true;
    }
    return result;
}


function validateMinPassword(value) {
    let result = false;
    if (!value)
        value = getField("txMinPwdLen");

    pwdLen = Number(value);
    if (pwdLen >= 4) {
        configChanged = configChanged || config.MinPwdLen != pwdLen;
        config.MinPwdLen = pwdLen;
        result = true;
    }
    else
        showError("Minimum password lenght can not be less than 4 characters.");
    return result;
}


function validateMaxPassword(value) {
    let result = false;
    if (!value)
        value = getField("txGenPwdLen");

    let pwdLen = Number(value);
    if (pwdLen >= config.MinPwdLen && pwdLen <= 255) {
        configChanged = configChanged || config.GenPwdLen != pwdLen;;
        config.GenPwdLen = pwdLen;
        result = true;
    }
    else
        showError(`Max generated password length must be between ${config.MinPwdLen} and 255 characters.`);;

    return result;
}



function createIPRead() {
    var script = document.createElement("script");
    script.type = "text / javascript";
    script.src = "https://api.ipify.org?format=jsonp&callback=DisplayIP";
    document.getElementsByTagName("head")[0].appendChild(script);
}


function getIP(response) {
    document.getElementById("ipaddress").innerHTML = "Your IP Address is " + response.ip;
}

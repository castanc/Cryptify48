//const { config } = require("process");

function getUserEmail() {
    if ( !isGoogleVer )
    {
        loadTotals();
        return;
    }

    try {
        google.script.run.withFailureHandler(failureHandler)
            .withSuccessHandler(processResponse)
            .getUser();
    }
    catch (ex) {
        showError(`Cannot access Server from. <b>${location.protocol}//</b> protocol.`);
        loadTotals();
    }
}

function failureHandler(error) {
    showSpinner(false);
    showError("Error in Server " + error);
    showMessageAt("divTitle","Error in Server " + error);
}

function processResponse(data) {
    userEmail = data;
    console.log("processResponse()", data);
    //setField("txUserId", userEmail);
    showMessageAt("divTitle", `Welcome ${userEmail}`);
    initConfig();

}

function failureRegister(error) {
    console.log("failure calling server",error);
    showSpinner(false);
    console.log("registerFirstTime() failure");
    showError("Server Error:" + error);
}

function successRegister(result) {
    let data  = JSON.parse(result);
    console.log("*************************************         successRegister()",data);
    showMessageAt(`${userEmail} Registered Succesfully.`)
    config.ServerId = Number ( data.serverId);
    config.FirstUse = data.StartDate;
    config.FreeDays = data.freeDays;
    if ( config.FreeDays <= 0)
    {
        showError("License period expired");
        //todo: check totals ussages send to offer to join, if 0 send to p buy page
    }
    else 
        showMessage(`Welcome <b>${config.UserEmail}</b>. You have <b>${Math.round(config.FreeDays)}</b> free days to use this application.`);

    saveConfig();
}

function successUpdateTotals(result)
{
    if ( result == 1 )
    {
        createTotals();
        saveTotals();
    }
}


function updateTotalsServer()
{
    //fetch("https://URL/file").then((r)=>{r.text().then((d)=>{let CONTENT = d})})
    let obj= {};
    obj.ServerId = config.ServerId;
    obj.UserEmail = config.UserEmail;
    obj.LastDate = new Date();
    obj.Encryptions = totals.te;
    obj.Decryptions = totals.td;

     if (location.protocol == "https:") 
    {
        let rec = createRecordFirstTime();
        config.ServerId = 0;
        console.log("registerFirstTime()",rec);
        google.script.run.withFailureHandler(failureRegister)
        .withSuccessHandler(successUpdateTotals)
        .updateTotals(rec);
    }

}

//todo update localstorage config with server updated data
function registerFirstTime(){
    console.log("calling registerFirstTime()");
    let msg = `isGoogleVer:${isGoogleVer} ServerId: ${config.ServerId}`;
    console.log(msg);
    if (location.protocol == "https:") 
    {
        let rec = createRecordFirstTime();
        config.ServerId = 0;
        console.log("registerFirstTime()",rec);
        google.script.run.withFailureHandler(failureRegister)
        .withSuccessHandler(successRegister)
        .recordFirstTime(rec);
    }
}

async function registerFirstTime2(){
    let deviceInfo = {deviceId:config.deviceId,mobile:config.mobile,startDate:config.FirstUse} ;
    let result = await fetchServer(registerUrl,deviceInfo,"POST");
}

function successUpdate(data) {
    if (data)
    {
        createTotals();
        saveTotals();
        //showMessage("Totals updated to server.");
    }
}

function failureUpdate(error) {
    showSpinner(false);
    console.log("updateServerRecord() failure");
    showError("Server Error:" + error);
}


function failure(error) {
    showSpinner(false);
    console.log("Failure calling server.");
    showError("Server Error:" + error);
}



function updateServerRecord(){
        
    totals.deviceId = config.deviceId;
    totals.ServerId = config.ServerId;

    if ( !isGoogleVer )
        return;

    google.script.run.withFailureHandler(failureUpdate)
    .withSuccessHandler(successUpdate)
    .updateServerRecord(totals);

}

function successValidatePeriod(data) {
    if (data)
    {
        config.FreeDays = data.freeDays;
        config.ed = data.ed;
        console.log("Saving Server Validation", config);
        saveConfig();

        if ( config.freeDays <=0 )
        {
            //todo call pay page
        }
    }
}


function validatePeriod(){

    if ( !isGoogleVer )
        return;

        let obj = {};
        obj.deviceId = deviceId;
        obj.userEmail = config.UserEmail;

        google.script.run.withFailureHandler(failure)
    .withSuccessHandler(successValidatePeriod)
    .validatePeriod(obj);

}


async function fetchServer(url,obj,method)
{
      let response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
      });
      
      let result = await response.json();
      return result;

}
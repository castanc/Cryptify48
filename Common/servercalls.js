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
    showSpinner(false);
    console.log("registerFirstTime() failure");
    showError("Server Error:" + error);
}

function successRegister(data) {
    console.log("successRegister()",data);
    showMessageAt(`${userEmail} Registered Succesfully.`)
    config.ServerId = Number ( data);
    showMessage(`Server response: [${data}] `);
    if ( data != "0")
    {
        saveConfig();
        saveTotals();
    }
}


function registerFirstTime(){
    if ( isGoogleVer && (!config.ServerId || config.ServerId == 0 ))
    {
        config.ServerId = 0;
        totals.StartDate = getTimeStamp(new Date());
        totals.EndDate = totals.StartDate;
        console.log("calling server *********")
        google.script.run.withFailureHandler(failureRegister)
        .withSuccessHandler(successRegister)
        .recordFirstTime(totals);
    }
}

async function registerFirstTime2(){
    let deviceInfo = {deviceId:config.userid,mobile:config.mobile,startDate:config.startDate} ;
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



function updateServerRecord(){
        
    totals.UserId = config.UserId;
    totals.ServerId = config.ServerId;

    if ( !isGoogleVer )
        return;

    google.script.run.withFailureHandler(failureUpdate)
    .withSuccessHandler(successUpdate)
    .updateServerRecord(totals);

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
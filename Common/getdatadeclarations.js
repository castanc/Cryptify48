Service.prototype.getDataDeclarations = function (names) {
    var nameList = names.split(',');
    var data = new Array();
    var collection = new KVPCollection();
    var records = new Array();
    var record = new RecordItem();
    var js = "";
    for (var i = 0; i < nameList.length; i++) {
        js = js + "let " + nameList[i] + " = " + JSON.stringify(new NamedArray(nameList[i])) + ";";
    }
    //js = `${js}let record = ${JSON.stringify(record)};`;
    //js = `${js}let records = ${JSON.stringify(records)};`;
    return js;
};


getItems() {
    let grid = Utils.getData(this.db, "Items");
    let js = `Items.arr = ${JSON.stringify(grid)}`;
    
    return js;
}

google.script.run.withFailureHandler(failureHandler)
.withSuccessHandler(processResponse)
.report(Data);


function failureHandler(error) {
    hideDiv("spinner");
    writeInnerHtml("error", error);
}


function processResponseEdit(json) {
    response = JSON.parse(json);

    console.log("Response received from Server. processResponseEdit():", response);
    if (response.result == 200) {
        for (var i = 0; i < response.html.length; i++) {
            writeInnerHtml(response.html[i].key, response.html[i].value)
            localStorage.setItem(`${response.html[i].key}_${recType}`, response.html[i].value);
        }

        let msg = "";
        for (var i = 0; i < response.messages.lenght; i++) {
            msg = `${msg}<p class="text-info>${response.messages[i]}</p></br>`;
        }
        writeInnerHtml("result", msg);
        //todo: show only if form modified
        showDiv("submitArea");
        master = response.master;
        detail = response.detail;
        lastDay = 0;
        doReport();

    }
    else {
        let row = `<tr><td>Server Error</td><td>${response.result}</td></tr>`;
        for (var i = 0; i < response.error.length; i++) {
            row = `${row}<tr><td>${response.error[i].key}</td><td>${response.error[i].value}</td></tr>`;
        }

        let table = `<table>${row}</table>`;
        writeInnerHtml("error", table);
    }
    hideDiv("spinner");
}


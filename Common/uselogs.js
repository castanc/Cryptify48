var ur = {}     //use record
var extRecord = {};
var logs = []


function initLogs() {

    logs = [];
    let json = localStorage.getItem("logs");
    if ( json  )
        logs = JSON.parse(json);

    ur = {};
    ur.Op = ""; //E/D
    ur.Type = "" //file extension
    ur.Size = 0;    //bytes
    ur.Date = new Date();

}

function clearLogs()
{
    logs = [];
    localStorage.removeItem("logs");
    showMessage("Logs were cleared.");
}

function saveLogs(){
    localStorage.setItem("logs",JSON.stringify(logs));
}

function addTextLog(op, size) {
    let ur = { "Op": op, "Type":"text", "Size": size, "Date": new Date() };
    logs.push(ur);
    saveLogs();

}

function addFileLog(op, fileItem) {
    let ur = { "Op": op, "Type": fileItem.type, "Size": fileItem.size, "Date": new Date() };
    logs.push(ur);
    saveLogs();
}

function sum(pv, cv) {
    return pv.Size + cv.Size;
}

function shortDate(dt)
{

}

function getShortDate(dt)
{
    let sDate = `${dt}`;
	let ix = sDate.indexOf("GMT");
	if (ix > 0)
		sDate = sDate.substring(0, ix).trim();
    return sDate;

}

function logDetail()
{
    let html = `<table width="100%">`;
    let div = document.getElementById("logDetail")
    div.innerHTML = "";
    html = "";
    let countE = 0;
    let countD = 0;
    let sizeE = 0;
    let sizeD = 0;
    let totalSize = 0;

logs = logs.sort(compareDate);

    logs.forEach(entry=>{
        // html += `<tr class="separation-top"><td>
        //     ${entry.Op}</td><td>
        //     ${getShortDate(entry.Date)}</td><td>
        //     ${entry.Type}</td><td> ${getSizeText(entry.Size)}</td></tr>
        // `;

        let op = encryptIcon;
        if ( entry.Op == "D")
        {
            op = decryptIcon;
            countD++;
            sizeD+=entry.Size;
        }
        else
        {
            countE++;
            sizeE += entry.Size;
        }

        html +=  `<div class="card-reportline separation-bot">
        ${op} ${entry.Type}</br>${getShortDate(entry.Date)} 
         ${getSizeText(entry.Size)}
        </div>`;
    })

    html +=  `<div class="card-reportline separation-top">
    ${encryptIcon} ${countE}  ${getSizeText(sizeE)}</br>
    ${decryptIcon} ${countD} ${getSizeText(sizeD)}</br>
    Total: ${countE + countD} ${getSizeText(sizeE+sizeD)}
    </div>`;


    div.innerHTML = html;

    div.style="block";

}

function doReportLogs() {
    let report = {};
    report.Date = new Date();

    let totalRec = {};
    totalRec.Type = "";
    totalRec.Cant = 0;
    totalRec.Size = 0;

    let texts = logs.filter(x => x.Type == "text" && Op == "E");
    if (texts.length > 0) {
        totalRec = {};
        totalRec.Size = texts.reduce(sum);
        totalRec.Cant = texts.length;
        totalRec.Type = "text";
        report.TextsE = totalRec;
    }


    texts = logs.filter(x => x.Type == "text" && Op == "D");
    if (textsD.length > 0) {
        totalRec = {};
        totalRec.Type = "text";
        totalRec.Size = texts.reduce(sum);
        totalRec.Cant = texts.length;
        report.TextsD = totalRec;
    }

    let files = logs.filter(x => x.Type != "text" && x.Op == "E");

    let fTypes = [];

    //sort array
    //https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    let sorted = files.sort(compare);

    totalRec = {};
    totalRec.Type = "";
    totalRec.Size = 0;
    totalRec.Cant = 0;

    let totals = [];

    sorted.forEach(rec => {
        let tr = totals.filter(x = x.Type == rec.Type);
        if (tr.length > 0) {
            tr[0].Size += rec.Size;
        }
        else {
            totalRec = {};
            totalRec.Type = rec.Type;
            totalRec.Size = rec.Size;
            totals.push(totalRec);
        }
    });

    report.TotalsE = totals;


    //decrypted
    files = logs.filter(x => x.Op == "D");
    totalRec = {};
    totalRec.Size = files.reduce(sum);
    totalRec.Cant = files.length;
    totalRec.Type = "text";
    report.FilesD = totalRec;

   return report;
}

function compare(a, b) {
    if (a.Type < b.Type) {
        return -1;
    }
    if (a.Type > b.Type) {
        return 1;
    }
    return 0;
}


//date compare greater to less
function compareDate(a, b) {
    if (a.Date < b.Date) {
        return 1;
    }
    if (a.Date > b.Date) {
        return -1;
    }
    return 0;
}
var ur = {}     //use record
var logs = []
var extRecord = {};
var logs = []
var folder = "https://drive.google.com/drive/folders/1peXV1Efc9RSnx0D3efAl9JMeWOIo9zg7";
var folderName = "CryptiTool";
var fileKey = "";
var crypticoUrl = "https://docs.google.com/spreadsheets/d/1Tf4IY4dIDzGgW561Eq7RFwaYc33zmKvUVGC40gTkucs/edit#gid=0";
var totals = {};
var daysFree = 15;


function createTotals() {
  totals = {};
  totals.UserId = "xxx";
  totals.UserEmail = "castanc@gmail.com";
  totals.IP = "";
  totals.te = 0;
  totals.td = 0;
  totals.teb = 0;
  totals.tdb = 0;
  totals.StartDate = new Date();
  totals.EndDate = new Date();
}


function doPost(e) {
  Logger.log(e.postData);
  return { daysFree: daysFree };
}

function doGet(e) {

  var html = HtmlService.createHtmlOutputFromFile('index').setSandboxMode(HtmlService.SandboxMode.IFRAME).addMetaTag('viewport', 'width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0;');
  return html;

  //  return HtmlService.createTemplateFromFile('index').evaluate();
}


function getRow(ss, key, key2, sheetName = "", col = 1, col2 = 2) {
  let row = {};
  row.RowCount = 0;
  row.data = [];

  let sheet;
  if (sheetName == "")
    sheet = ss.getActiveSheet();
  else
    sheet = ss.getSheetByName(sheetName);

  var rangeData = sheet.getDataRange();
  let grid = rangeData.getValues();
  row.RowCount = grid.length;
  row.data = grid.filter(x => x[col] == key && x[col2] == key2);

  return row;
}

/*
{protocol=https:, tdb=0.0, RAM=4, wdth=786.0, deviceId=x.mjuYRNO$$d2B-=aLkV62HFWCP=JI=#dM1(ksEU46BCi1rn8TKtyY7@@qM%0PVy, EndDate=2022-03-12T20:34:44.529Z, userAgent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 OPR/83.0.4254.70, height=645.0, mobile=0.0, StartDate=2022-03-12T20:34:44.529Z, teb=0.0, td=0.0, userEmail=castanc@gmail.com, te=0.0}
*/

function recordFirstTime(register) {
  Logger.log(register);

  let id = 0;
  fileKey = register.deviceId.substr(0, 4);
  let folder = getCreateFolder(folderName);
  let ss = getCreateSpreadSheet(folder, `U_${fileKey}`, "RowId,DeviceId,UserEmail,StartDate,EndDate,Mobile,UserAgent,RAM,width,height,IP,protocol");
  let row = getRow(ss, register.deviceId, register.UserEmail);
  if (row.data.length == 0) {
    id = row.RowCount + 1;
    let sheet = ss.getActiveSheet();
    let data = [id, register.deviceId, register.userEmail, register.StartDate, register.EndDate, register.mobile, register.userAgent, register.RAM, register.width, register.height, register.IP,register.protocol];
    sheet.appendRow(data);
  }



  return id;
}


function updateServerRecord(totals) {
  let id = 0;

  Logger.log("recordFirstTime: Object");
  Logger.log(totals);
  let ss = SpreadsheetApp.openByUrl(crypticoUrl);

  if (totals.ServerId > 0) {
    let sheet = ss.getActiveSheet();
    var datarange = sheet.getRange(`F${totals.ServerId}:J${totals.ServerId}`);
    let data = [totals.EndDate, totals.te, totals.td, totals.teb, totals.tdb];

    datarange.setValues([data]);
    return true;
  }
  return false;
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
  303;
}







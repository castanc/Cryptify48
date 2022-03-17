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


function checkAddDates(){
  let dt = new Date();
  let dt2 = addDays(dt,15);
  Logger.log(dt,dt2);
}

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


function checkCreateRecord(){
  let json = `{"width":1417,"StartDate":"2022-03-15T20:31:14.249Z","EndDate":"2022-03-15T20:31:14.249Z","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 OPR/83.0.4254.70","protocol":"https:","height":645,"UserEmail":"castanc@gmail.com","mobile":0,"deviceId":"0c7f73bc-1b8e-48c4-b42f-4c6df47964d5","userEmail":"castanc@gmail.com","RAM":"4"}`;

  let obj = JSON.parse(json);
  let result = recordFirstTime(obj);
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

function getUserRows(ss, register) {
  let row = {};
  row.RowCount = 0;
  row.data = [];
  row.devices = 0;

  let sheet;
  sheet = ss.getActiveSheet();

  var rangeData = sheet.getDataRange();
  let grid = rangeData.getValues();
  row.data = grid.filter(x => x[1] == register.deviceId && x[2] == register.UserEmail);
  if ( row.data.length == 0 )
    row.data = grid.filter(x => x[5] == register.mobile && x[2] == register.UserEmail && x[7] == register.RAM);

  row.devices = grid.filter(x =>  x[2] == register.UserEmail).length;      
  row.RowCount = grid.length;

  return row;

}

function getUserDevices(ss, email) {

  let sheet = ss.getActiveSheet();

  var rangeData = sheet.getDataRange();
  let grid = rangeData.getValues();
  return grid.length;

}


function recordFirstTime(register) {
  Logger.log(register);

  let r = {};
  r.serverId = 0;
  r.freeDays = daysFree;
  r.userDevices = 0;
  r.newUser = true;
  r.StartDate = register.StartDate;
  r.ed = addDays(register.StartDate, daysFree);

  fileKey = register.UserEmail.substr(0, 4);
  let folder = getCreateFolder(folderName);
  let ss = getCreateSpreadSheet(folder, `U_${fileKey}`,
    "RowId,DeviceId,UserEmail,StartDate,EndDate,Mobile,UserAgent,RAM,width,height,IP,protocol,Language");


  let row = getUserRows(ss, register);
  Logger.log(row);
  if (row.data.length == 0) {
    r.deviceId = register.deviceId;
    let sheet = ss.getActiveSheet();
    r.serverId = row.RowCount+1;
    let data = [r.serverId, register.deviceId, register.userEmail, register.StartDate,
      register.EndDate, register.mobile, register.userAgent, register.RAM, register.width, register.height, register.IP, 
      register.protocol, register.Language];
    sheet.appendRow(data);
    r.userDevices = row.devices;
  }
  else {
    r.serverId = row.data[0][0];
    r.deviceId = row.data[0][1];
    r.newUser = false;
    r.StartDate = new Date(row.data[0][3])
    r.ed = addDays(r.StartDate, daysFree);
    r.userDevices = row.devices;
    r.freeDays = dateDiff(new Date(),r.ed);
  }
  Logger.log(r);
  //return `${r.serverId}/${r.freeDays}`;
  return JSON.stringify(r);
}


function updateTotals(register) {
  Logger.log(t);

  fileKey = register.UserEmail.substr(0, 4);
  let folder = getCreateFolder(folderName);
  let ss = getCreateSpreadSheet(folder, "RecrypticoTotals","RowId,FileId,ServerId,LastDate,Encryptions,Decryptions");

  let sheet = ss.getActiveSheet();
  var rangeData = sheet.getDataRange();
  let grid = rangeData.getValues();
  let row = gird.filter(x=> x[1]==fileKey && x[2] == register.ServerId);
  if ( row.length == 0 )
  {
    let data = [grid.length+1,fileKey, register.ServerId,register.LastDate, register.te, register.td]
      sheet.appendRow(data);
  }
  else
  {
    var datarange = sheet.getRange(`C${row[0]}:F${row[0]}`);
    let data = [register.ServerId,register.LastDate, register.te, register.td]
    datarange.setValues([data]);
  }
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







var ur = {}     //use record
var logs = []
var extRecord = {};
var logs = []
var crypticoUrl = "https://docs.google.com/spreadsheets/d/1Tf4IY4dIDzGgW561Eq7RFwaYc33zmKvUVGC40gTkucs/edit#gid=0";
var totals = {};


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


function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}


function getRow(ss, userId, sheetName = "") {
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
  row.data = grid.filter(x => x[1] == userId);

  return row;
}

function recordFirstTime(totals) {
  let id = 0;

  Logger.log("recordFirstTime: Object");
  Logger.log(totals);
  let ss = SpreadsheetApp.openByUrl(crypticoUrl);
  let row = getRow(ss, totals.UserId);
  if (row.data.length == 0) {
    id = row.RowCount + 1;
    let sheet = ss.getActiveSheet();
    let data = [id, totals.UserId, "", "", totals.StartDate, totals.EndDate, totals.te, totals.td, totals.teb, totals.tdb];
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

function getUser() {
  return Session.getActiveUser().getEmail();

}






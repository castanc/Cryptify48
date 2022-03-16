function getCreateSpreadSheet(folder, fileName, headerRow = "") {
  let file = getFileFromFolder(fileName, folder);
  let header = headerRow.split(',');
  let spreadSheet = null;
  if (file == null) {
    spreadSheet = SpreadsheetApp.create(fileName);
    if (header.length > 0) {
      var sh = spreadSheet.getActiveSheet();
      sh.appendRow(header);
    }
    var copyFile = DriveApp.getFileById(spreadSheet.getId());
    folder.addFile(copyFile);
    DriveApp.getRootFolder().removeFile(copyFile);
    file = getFileFromFolder(fileName, folder);

  }
  spreadSheet = SpreadsheetApp.openById(file.getId());
  return spreadSheet;
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  var folder = null;
  if (folders.hasNext())
    folder = folders.next();
  else
    folder = DriveApp.createFolder(folderName);
  return folder;
}


function getFileFromFolder(name, folder) {
  let files;
  files = folder.getFilesByName(name);
  if (files.hasNext()) {
    return files.next();
  }
  return null;
}

function  getFileFromFolder(name, folder) {
    let files;
    files = folder.getFilesByName(name);
    if (files.hasNext()) {
      return files.next();
    }
    return null;
  }

  function dateDiff(sd,ed)
{
	let d1 = new Date(sd);
	let d2 = new Date(ed);
    let ms = d2.getTime() - d1.getTime();
	return ms / (1000 * 3600 * 24);

    // To calculate the no. of days between two dates
    // let secs = ms / 1000;
    // let hours = ms / (1000 * 3600);
    // let days = ms / (1000 * 3600 * 24);
}

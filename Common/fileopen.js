var fileInfo = {};

async function openTextFileAPI() {
  try {
    let fileHandle = await window.showOpenFilePicker();
    if (fileHandle.length > 0) {
      const file = await fileHandle[0].getFile();
      usingFile = true;
      fileName = file.name;
      showSpinner();
      data = await file.text();
      fileMMode = "Text";
    }
  }
  catch (ex) {
    showError("Reading file:" + ex);
    console.error(error, ex);
  }
}

function decodeEncryptedFile() {
  let hint = extract(data, "Hint:", "|");
  if (hint.length > 0)
    writeInnerHTML("pwdHint", `<p> Password Hint:${hint}</p>`);

  data = `{${extract(data, "{", "}")}}`;

}

async function openTextEncryptedFileAPI2() {
  try {
    let fileHandle = await window.showOpenFilePicker();
    if (fileHandle.length > 0) {
      const file = await fileHandle[0].getFile();
      usingFile = true;
      fileName = file.name;

      const reader = new FileReader();
      showSpinner();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        data = reader.result;

        decodeEncryptedFile();

        showSpinner(false);
        fileMode = "Binary";
        showData();
      }, false);

      if (file) {
        reader.readAsText(file);
      }
    }
  }
  catch (ex) {
    showError("openTextFileAPI2() " + ex);
    console.error(error, ex);
  }
}


async function openTextFileAPI2() {
  try {
    data = "";
    let fileHandle = await window.showOpenFilePicker();
    if (fileHandle.length > 0) {
      const file = await fileHandle[0].getFile();
      usingFile = true;
      fileMode = "Text";
      fileName = file.name;
      console.log("FileName", fileName);

      selFile = {};
      selFile.lastModifiedDate = file.lastModifiedDate;
      selFile.lastModified = file.lastModified;
      selFile.size = file.size;
      selFile.type = file.type;
      selFile.name = file.name;


      const reader = new FileReader();
      showSpinner();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        data = reader.result;
        showSpinner(false);
        showData();
      }, false);

      if (file) {
        reader.readAsText(file);
      }
    }
    else showError("No file was selected.")
  }
  catch (ex) {
    showError("openTextFileAPI2() " + ex);
    console.log(error, ex);
  }
}


async function openImageFileAPI() {
  try {
    let fileHandle = await window.showOpenFilePicker();
    if (fileHandle.length > 0) {
      const file = await fileHandle[0].getFile();
      usingFile = true;
      fileName = file.name;
      selFile = {};
      selFile.lastModifiedDate = file.lastModifiedDate;
      selFile.lastModified = file.lastModified;
      selFile.size = file.size;
      selFile.type = file.type;
      selFile.name = file.name;

      const reader = new FileReader();
      showSpinner();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        data = reader.result;
        showSpinner(false);
        fileMode = "Binary";
        let dataType = extract(data, ":", ";");
        showData();
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
    else {
      showError("No file was selected");
      console.log("no file was selected");
      gotoPage(1);
    }
  }
  catch (ex) {
    showError("Exception:" + ex.message);
    gotoPage(1);
    console.error(error, ex);
  }
}

//read file from url
//fetch("https://URL/file").then((r)=>{r.text().then((d)=>{let CONTENT = d})})


//read text file
function handleFileSelect(evt) {

  fileMode = "Binary";
  readBase64 = true;
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    var reader = new FileReader();

    // Closure to capture the file information.
    showSpinner();
    reader.onload = (function (file) {
      fileName = file.name;
      selFile = {};
      selFile.lastModifiedDate = file.lastModifiedDate;
      selFile.lastModified = file.lastModified;
      selFile.size = file.size;
      selFile.type = file.type;
      selFile.name = file.name;
      selFile.readSize = data.length;
      return function (e) {
          data = e.target.result;
          showSpinner(false);
          usingFile = true;
          if ( config.showMediaOnOpen)
            showData();
          Keyboard.close();
        let fSize = getSizeText(selFile.readSize);

      };
    })(f);

    reader.onerror = function (error) {
      showSpinner(false);
      showError("Error reading file.", error);
      reader.abort();
    };

    reader.onabort = function( abort ){
      showSpinner(false);
      showError("File Reader operation aborted");
    }

    // Read in the image file as a data URL.
    if (readBase64)
      reader.readAsDataURL(f);
    else
      reader.readAsText(f);
  }
}


function handleEncryptedFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    var reader = new FileReader();

    // Closure to capture the file information.
    showSpinner();
    reader.onload = (function (theFile) {
      fileName = theFile.name;
      showMessage("FileName:" + fileName);
      return function (e) {
        //data = getSJCLString(e.target.result);
        data = e.target.result;
        decodeEncryptedFile();
        showSpinner(false);
        usingFile = true;
        showData();
      };
    })(f);

    // Read in the image file as a data URL.
    if (readBase64)
      reader.readAsDataURL(f);
    else
      reader.readAsText(f);
  }
}

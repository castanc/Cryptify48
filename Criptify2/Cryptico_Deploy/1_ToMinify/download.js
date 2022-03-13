//https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
function downloadBlob(blob, filename) {
	// Create an object URL for the blob object
	const url = URL.createObjectURL(blob);

	// Create a new anchor element
	const a = document.createElement('a');

	// Set the href and download attributes for the anchor element
	// You can optionally set other attributes like `title`, etc
	// Especially, if the anchor element will be attached to the DOM
	a.href = url;
	a.download = filename || 'download';

	// Click handler that releases the object URL after the element has been clicked
	// This is required for one-off downloads of the blob content
	const clickHandler = () => {
		setTimeout(() => {
			URL.revokeObjectURL(url);
			this.removeEventListener('click', clickHandler);
		}, 150);
	};

	// Add the click event listener on the anchor element
	// Comment out this line if you don't want a one-off download of the blob content
	a.addEventListener('click', clickHandler, false);

	// Programmatically trigger a click on the anchor element
	// Useful if you want the download to happen automatically
	// Without attaching the anchor element to the DOM
	// Comment out this line if you don't want an automatic download of the blob content
	//a.click();

	// Return the anchor element
	// Useful if you want a reference to the element
	// in order to attach it to the DOM or use it in some other way
	return a;
}


function downloadDataFile(text, fName) {
	let r1 = false;
	let blob = textToBlob(text);
	let anchor = downloadBlob(blob, fName);

	if (anchor != null) {
		r1 = true;
		anchor.click();
		showMessage("File downloaded OK.");
		return true;
	}
	return false;
}

function downloadFile() {
	let result = false;
	let ix = fileName.toLowerCase().lastIndexOf(".txt");
	let ext = "xxx";
	if (ix > 0) {
		ext = fileName.substr(ix);
		fileName = fileName.substr(0, ix);
	}
	if (".exe.ps1.bat.com.cmd.scr.apk.dll".indexOf(ext) < 0) {
		let a = document.createElement("a");
		//a.href = "data:application/octet-stream;base64,"+data64;
		a.href = data;
		a.download = fileName;
		a.click();
		showMessage("File saved.");
		result = true;
	}
	else showError(`Invalid file type: ${fileName}`);
	return result;

}

async function writeTextFile(fh, contents, fName) {
	let result = false;
	let writable;
	globalResult = false;

	if (!supported || location.protocol != "https:") {
		//navigator.clipboard.writeText(contents);
		globalResult = false;

		let blob = textToBlob(contents);
		let anchor = downloadBlob(blob, fName);

		if (anchor != null) {
			//let dLink = document.getElementById("DLINK");
			globalResult = false;
			result = false;
			anchor.click();
		}

		return result;
	}
	try {
		// Create a FileSystemWritableFileStream to write to.
		writable = await fh.createWritable();
		// Write the contents of the file to the stream.
		await writable.write(contents);
		// Close the file and write the contents to disk.
		await writable.close();
		result = true;
		globalResult = true;
	}
	catch (ex) {
		console.error("writeTextFile() exception", ex);
		showError("Cannot save file to disk by FILEAPI, data was copied to clipboard");
		navigator.clipboard.writeText(contents);
		result = false;
	}
	// finally {
	// 	if ( writable )
	// 		await writable.close();

	// }

	return result;
}


//download with promises
//https://stackoverflow.com/questions/22733685/how-to-download-files-using-javascript-asynchronously
// Download a file form a url.
function prSaveFile(url,fileName) {
    showSpinner(true,"Saving...");
    return new Promise(function(resolve, reject) {
      // Get file name from url.
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
        resolve(xhr);
      };
      xhr.onerror = reject;
      xhr.open('GET', url);
      xhr.send();
    }).then(function(xhr) {
      //var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
      a.download = filename; // Set the file name.
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      showSpinner();
      return xhr;
    });
  }



  function prSaveFile2(url,fileName) {
    showSpinner(true,"Saving...");
    return new Promise(function(resolve, reject) {
      // Get file name from url.
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
        resolve(xhr);
      };
      xhr.onerror = reject;
      xhr.open('GET', url);
      xhr.send();
    }).then(function(xhr) {
      //var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
      a.download = filename; // Set the file name.
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      showSpinner();
      return xhr;
    });
  }

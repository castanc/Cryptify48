
function showFileInfo() {
	let msg = "";
	let txtEncrypted = "";

	hideControl("divMedia");
	let isEncrypted = "";
	if (encryptedFile) {
		if (data.includes(`"Hint":"`)) {
			let txHint = extract(data, `"Hint":"`, "\n");
			setField("pwdHint", txHint);
		}
		txtEncrypted = `<b class="text-warning">This is an encrypted file.</b>`;
		isEncrypted = "Encrypted";
	}

	let fInfoRow = "";

	let fSize = getSizeText(data.length);

	if (usingFile && selFile.size > maxData) {
		txtEncrypted = `<b class="text-danger">This file is ${fSize}, can not be processed with ${navigator.deviceMemory}GB RAM..</b>`;
		showError(txtEncrypted);
	}

	let sDate = "";

	if (usingFile)
		sDate = `${selFile.lastModifiedDate}`;
	else
		sDate = `${new Date()}`;

	let ix = sDate.indexOf("GMT");
	if (ix > 0)
		sDate = sDate.substring(0, ix).trim();

	if (usingFile) {
		if (isEncrypted.length > 0)
			fInfoRow = `${folderIcon} <b>${selFile.name}</b> <i>${selFile.type}</i> ${sDate}, <b>${fSize}, <i class="red">${isEncrypted}</i>`;
		else
			fInfoRow = `${folderIcon} <b>${selFile.name}</b> <i>${selFile.type}</i> ${sDate}, <b>${fSize}`;

	}
	else {
		let sourceText = "";	//"Manual Text.";
		if (dataFromClipboard)
			sourceText = "Clipbaord Text."

		if (isEncrypted.length > 0)
			fInfoRow = `${sourceText} (${data.length} bytes), <i class="red">${isEncrypted}</i>`;
		else
			fInfoRow = ""; //`${sourceText} (${data.length}bytes.)`;
	}
	showInfoAt("divFileInfo", fInfoRow);
	showBlock("divFileInfo");
	//showBlock("divMedia");
	//hideControl("divInputText");

}

function showPDF() {
	// let pdfWindow = window.open("")
	// pdfWindow.document.write(`<iframe width='100%' height='100%' src='${data}'></iframe>`);
	iconHtml = `<i class="fas fa-file-pdf icon-size2" title="Open Binary File: Image,PDF,Excel,Word,Audio" id="clearText" style="margin-left: -30px; cursor: pointer;"
	onclick="openPDF()"></i>
	`;


	isPDF = true;
	renderPDF();
	setField("loadedText", data);

	if (usingFile && isGoogleVer) {
		showBlock("divInputPDF");
		hideControl("divDownload");
	}
	else {
		hideControl("divInputPDF");
		showDiv("divDownload");
	}
	mediaOpen = true;
	if (mobile)
		showPasswordMessage();

}


function clearMedia() {
	showMessageAt("divFileInfo", "");
	hideControl("divImage");
	hideControl("divVideo");
	hideControl("divAudio");
	hideControl("divPDF");
	hideControl("divText");
	hideControl("divMedia");
	mediaOpen = false;

}
function showVideo() {

	currentMedia = "divVideo";
	hideControl("divText");
	if (data.length > 0) {
		let html = `<video width="100%" height="auto" controls>
	<source src="${data}" type="video/mp4">
  Your browser does not support the video tag.
  </video>`;
		writeInnerHTML("divVideo", html);
		showBlock("divVideo");
		showBlock("divMedia");
		//showBlock("divView");
		mediaOpen = true;
		iconHtml = `<i class="fas fa-image icon-size2" title="Open Binary File: Image,PDF,Excel,Word,Audio" id="clearText" style="margin-left: -30px; cursor: pointer;"
	onclick="toggleMedia()"></i>`;

	}

	function setHtml() {
		return `			<audio class="form-control icon-size2" controls>
	<source src="${data}" type="audio/ogg">
	<source src="${data}" type="audio/mpeg">
	Your browser does not support the audio element.
	</audio>`;
	}

	function showAudio() {
		//todo: disable playback 
		hideControl("divText");
		currentMedia = "divAudio";
		if (data.length > 0) {
			writeInnerHTML("divAudio", setHtml());
			showBlock("divAudio");
			showBlock("divMedia");
			//showBlock("divView");

			mediaOpen = true;
		}

	}


}

function decodeUrlData() {
	let decodedData = ""
	encryptedFile = isEncryptedData();
	if ( !encryptedFile && data.includes(";base64,")) {
		let parts = data.split(",");
		if (parts.length == 2) {
			decodedData = atob(parts[1]);
			try {
				let obj = JSON.parse(decodedData);
				encryptedFile = (obj.data.length + obj.data2.length > 0);
				//encryptedFile = decodedData.includes("data:") && decodedData.includes("data2:") && decodedData.includes("data3:");
				data = decodedData;
			}
			catch (ex) {
				data = decodedData;
			}
		}
	}
}


function getFileTitle(fName) {
	fileSizeText = getSizeText(data.length);
	let ix = fName.lastIndexOf(".");
	let ext = "";
	if (ix > 0)
		ext = fName.substr(ix);

	let shortName = fileName.substr(0, ix).substr(0, 15);
	if (fName.length > 15)
		shortName += "...";

	return shortName + " " + ext.toUpperCase() + ` (${fileSizeText})`;
}

function hideMedia() {
	hideControl("divImage");
	hideControl("divVideo");
	hideControl("divAudio");
	hideControl("divPDF");
	hideControl("divText");
	hideControl("divInputPDF");
	hideControl("divInfo");
	hideControl("divSettings");
	hideControl("divMedia");
}

function showData() {
	encryptedFile = false;
	hideMedia();
	mediaOpen = false;
	canProcess = true;
	let dataType = "text/plain";
	if (selFile && usingFile) {
		selFile.readSize = data.length;
		canProcess = selFile.size <= maxData;
		dataType = selFile.type;
	}

	if (dataType == "application/pdf")
		showPDF();
	else if (dataType.includes("image"))
		showImage();
	else if (dataType.includes("video"))
		showVideo();
	else if (dataType.includes("audio"))
		showAudio();
	else showText();
	showFileInfo();
	if (encryptedFile) {
		mediaOpen = false;
		hideControl("divMedia");
		hideControl("divHide");
		gotoPage(2);
		setCurrentField("userPassword");
		//openKeyboard();
	}
	else{
		mediaOpen = true;
		showBlock("divMedia");
		showBlock("divHide");
		showBlock("divText");
	}
	toggleCanProcess(canProcess, fileSizeText);
	if (encryptionDone || decryptionDone) {
		hideControl("divNext");
		hideControl("divViewPassword");
	}
	else {
		showBlock("divNext");
		//showBlock("divViewPassword");
	}

	hideControl("divShare");
}


function showMedia(divId, hideResult = false) {
	if (divId && divId.length == 0) {
		hideControl("divText");
		hideControl("divImage");
		hideControl("divPDF");
		hideControl("divVideo");
		hideControl("divAudio");
		currentMedia = "";
	}

	if (hideResult)
		hideControl("result");

	if (currentMedia.length > 0 && currentMedia != divId)
		hideControl(currentMedia);

	currentMedia = divId;
	showBlock(divId);
	showBlock("divMedia");
	mediaOpen = true;
}

function showText() {
	//todo: check for html, js and other text formats

	currentMedia = "divText";
	hideControl("divImage");
	hideControl("divVideo");
	hideControl("divAudio");
	let fName = "Clipboard text";
	decodeUrlData();
	let ix = data.indexOf(`data:`);
	if (ix < 0)
		ix = data.indexOf(`"data":"`);
	if (ix > 0)
		setField("loadedText", data.substr(ix));
	else
		setField("loadedText", data);

	if (data.includes("Hint:")) {
		let txHint = extract(data, "Hint:", "\n");
		setField("pwdHint", txHint);
	}
	// showPasswordMessage();
	// showBlock("divText");
	// showBlock("divMedia");
	// mediaOpen = true;
	// openKeyboard();
}

function showNoVisor() {
	//todo: check for html, js and other text formats
	currentMedia = "divText";
	let fName = "Clipboard text";
	if (usingFile)
		fName = getFileTitle(fileName);
	decodeUrlData();


	//setField("loadedText", "No visor for this type of file.");
	setField("loadedText", data);
	showBlock("divText");
	showBlock("divMedia");
	//showBlock("divView");
	//showBlock("divHide");

	mediaOpen = true;
	if (encryptedFile) {
		if (usingFile)
			hideControl("divInputText");

		if (data.includes("Hint:")) {
			let txHint = extract(data, "Hint:", "\n");
			setField("pwdHint", txHint);
		}
		//gotoPage(2);
		//showWarning(`Encrypted Data loaded. Enter Password.`);
	}
}




function showImage() {
	currentMedia = "divImage";
	hideControl("divText");
	let image = document.getElementById("imgView");
	try {
		image.src = data;
	}
	catch (ex) {
		showError("showImage() ex:" + ex.message);
	}
	showBlock("divImage");
	mediaOpen = true;
}

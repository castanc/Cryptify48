
function extract(text, start, end = "") {
	let word = "";
	try {
		let index = text.indexOf(start);
		let index2 = 0;
		while (index >= 0) {
			index += start.length;
			if (end.length > 0)
				index2 = text.indexOf(end, index);
			else index2 = text.length;

			if (index2 > index) {
				word = text.substr(index, index2 - index);
			}
			index = text.indexOf(start, index2 + end.length);
		}
	}
	catch (ex) {
		//return GSLog.handleException(ex, "Utils.replace()");
		//return text;
	}
	return word;
}

function setLabel(lblId, visible) {
	if (visible)
		showBlock(lblId);
	else
		hideControl(lblId);
}


function shareData(title, text, url) {
	if (usingFile) {
		sharingFile = true;
		let fctl = document.getElementById("files");
		fctl.click();
	}
	else if (navigator.share) {
		showMessage("Sharing....");
		navigator.share({
			title: title,
			text: text,
			url: url,
		})
			.then(() => showMessage("Shared succesfully.", statusSuccess))
			.catch((error) => {

				showError("Error sharing:" + error);
			});
		canShare = false;
	}
	else {
		showError("Share not supported, use manual paste.");
		canShare = false;
	}

}


function verifyLabel(fieldId, lblId) {
	let value = getField(fieldId);
	let visible = value.length > 0;
	if (visible)
		showBlock(lblId);
	else
		hideControl(lblId);
}


function showSelected(itemId) {
	let anchor = document.getElementById(`A_${lastSelected}`);
	if (anchor != null)
		anchor.className = "";


	anchor = document.getElementById(`A_${value}`);
	if (anchor != null)
		anchor.className = "active";

	anchor = document.getElementById("A_dynSelect");
	if (anchor != null)
		anchor.click();

}


function setFocus(ctlId) {
	let x = document.getElementById(ctlId);
	if (x)
		x.focus();
}

function selectMenu(menuId) {
	newMenu = false;

	let menu2 = menus.filter(x => x.Id == menuId);
	if (menu2.length > 0)
		menu = menu2[0];
	else {
		menu = {};
		menu["Id"] = menuId;
		menu["currentIndex"] = 0;
		menu["currentText"] = "";
		menu["enumerator"] = "";
		menu["Options"] = [];
		newMenu = true;
	}

	return newMenu;
}

function buildMenuButtons(menuId, actions) {

	let html = "";
	let count = 0;
	let active = "";
	selectMenu(menuId);
	if (actions.length > 0) {
		menu.currentText = actions[0].caption;
		menu.currentIndex = 0;
	}

	actions.forEach(ac => {
		if (!ac.className)
			ac.className = "";

		if (!ac.pars || ac.pars.length == 0)
			ac.pars = `'${menuId}','${ac.id}',${count}`;
		else
			ac.pars = `'${menuId}','${ac.id}',${count},${ac.pars}`;

		if (!ac.kind)
			ac.kind = "";

		if (!ac.separator)
			ac.separator = "";


		ac["Index"] = count;
		count++;


		html = `${html}<button id="${ac.id}" type="button" class="btn ${ac.className} separation-btn" onclick="${ac.method}(${ac.pars})">${ac.caption}</button>${ac.separator}`;
	});

	let m = document.getElementById(menuId);
	m.innerHTML = html;

	menu["Options"] = actions;
	menu["currentText"] = section;
	if (newMenu) {
		menus.push(menu);
		console.log("newMenu:", menus);
	}
	showBlock(menuId);
}


function buildMenu(menuId, section, actions, icon, currentSelected = "") {

	selectMenu(menuId);
	menu.currentText = "";
	menu.currentIndex = 0;
	let html = "";
	let active = "";
	let firstOption = "";
	let count = 0;
	actions.forEach((ac) => {
		if (!ac.className)
			ac.className = "";

		if (!ac.pars || ac.pars.length == 0)
			ac.pars = `'${menuId}','${ac.id}',${count}`;
		else
			ac.pars = `'${menuId}','${ac.id}',${count},${ac.pars}`;

		if (!ac.kind)
			ac.kind = "";


		ac["Index"] = count;

		if (currentSelected.length > 0 && ac.caption == currentSelected) {
			active = "active";
			menu.currentText = ac.caption;
			menu.currentText = count;
		}
		else active = "";

		count++;

		html = html + `<a id="${ac.id}" class="${ac.className} ${active}"  href="javascript:void(0);" onclick="${ac.method}(${ac.pars})">${ac.caption}</a>`;
	});

	menu["Options"] = actions;
	if (menu.currentText == "") {
		menu.currentText = menu.Options[0].caption[0];
		menu.currentIndex = 0;
	}

	firstOption = `<a id="A_${menuId}" href="javascript:void(0);" onclick="selectNext('${menuId}')" class="responsive active">${currentSelected}</a>`;

	html = firstOption + html + ` <a id="A_${menuId}" href="javascript:void(0);" class="icon" onclick="changeMenuClass('${menuId}')">
	<i class="${icon}"></i>`;

	let m = document.getElementById(menuId);
	if (m)
		m.innerHTML = html;


	if (newMenu) {
		menus.push(menu);
	}
	showBlock(menuId);
}

function buildMenuWithButtons(menuId, section, actions, icon, currentSelected = "") {

	selectMenu(menuId);
	menu.currentText = "";
	menu.currentIndex = 0;
	let html = "";
	let active = "";
	let firstOption = "";
	let count = 0;
	actions.forEach((ac) => {
		if (!ac.className)
			ac.className = "";

		if (!ac.pars || ac.pars.length == 0)
			ac.pars = `'${menuId}','${ac.id}',${count}`;
		else
			ac.pars = `'${menuId}','${ac.id}',${count},${ac.pars}`;

		if (!ac.kind)
			ac.kind = "";


		ac["Index"] = count;

		if (currentSelected.length > 0 && ac.caption == currentSelected) {
			active = "active";
			menu.currentText = ac.caption;
			menu.currentText = count;
		}
		else active = "";

		count++;

		html = html + `<button type="button" class="btn btn-primary button-separation form-control" id="${ac.id}" onclick="${ac.method}(${ac.pars})">${ac.caption}</button>`;
	});

	menu["Options"] = actions;
	if (menu.currentText == "") {
		menu.currentText = menu.Options[0].caption[0];
		menu.currentIndex = 0;
	}

	/*
	firstOption = `<a id="A_${menuId}" href="javascript:void(0);" onclick="selectNext('${menuId}')" class="responsive active">${menu.currentSelected}</a>`;

	html = firstOption + html + ` <a id="A_${menuId}" href="javascript:void(0);" class="icon" onclick="changeMenuClass('${menuId}')">
	<i class="${icon}"></i>`;
	*/

	let m = document.getElementById(menuId);
	if (m)
		m.innerHTML = html;


	if (newMenu) {
		menus.push(menu);
	}
	showBlock(menuId);
}


function updateSelectedNav(menuId, text) {
	let x = document.getElementById(`A_${menuId}`);
	if (x) {
		let k2 = Keys.filter(x => !x.Key.includes("Parameter_") && x.Key.toUpperCase().includes(currentKey.toUpperCase()));
		if (k2.length > 0) {
			x.innerText = k2[0].Key;
			x.className = "active";
		}
	}
}

function updateSelectedNav2(menuId, text) {
	let x = document.getElementById(`A_${menuId}`);
	if (x) {
		let k2 = Keys.filter(x => !x.Key.includes("Parameter_") && x.Key.toUpperCase().includes(currentKey.toUpperCase()));
		if (k2.length > 0) {
			currentKey = k2[0].Key;
			showMessage(`Key ${currentKey} is selected`);
			x.innerText = k2[0].Key;
			x.className = "active";
		}
	}
}




function buildHeader(menuId, section, childDiv, icon, method = "changeMenuClass2") {

	let html = "";
	title = title.replace(" ", "");
	//onclick="enableSection2('${childDiv}')
	if (section.length > 0)
		html = `<a id="A_FIRST" href="javascript:void(0);" class="active">${section}</a>`;

	html = html + ` <a id="A_${menuId}" href="javascript:void(0);" class="icon" onclick="${method}('${menuId}','${childDiv}')">
	<i class="${icon}"></i>`;

	let m = document.getElementById(menuId);
	m.innerHTML = html;
	showBlock(menuId);
	menu["Options"] = options;

	console.log("menu", menu);
}


function setField(fieldId, value) {
	let ctl = document.getElementById(fieldId);
	if (ctl)
		ctl.value = value;
	else showError(`setField(${fieldId}) invalid field`);
}


function setInnerText(divId, text) {
	let ctl = document.getElementById(divId);
	if (ctl)
		ctl.innerText = text;
	else console.error(`Can't find control ${divId}`);
}

function setTextArea(fieldId, value) {
	let ctl = document.getElementById(fieldId);
	if (ctl)
		ctl.innerText = value;
	else showError(`setField(${fieldId}) invalid field`);
}


function getField(fieldId) {
	let ctl = document.getElementById(fieldId);
	if (ctl)
		return ctl.value;

	return "";
}




function setValue(formName, fieldId, value) {
	try {
		var x = document.forms[formName][fieldId];
		if (x != undefined) {
			x.value = value;
		}
		else {
			console.error(`setValue() ${formName},${fieldId}, ${value}`, frm);
			addTrace(`Error ins etValue(): ${formName} ${fieldId} ${value}`);
		}
	}
	catch (ex) {
		console.error(`setValue() EXCEPTION ${formName},${fieldId}, ${value}, ${ex}`);
		addTrace(`EXCEPTION in setValue(): ${formName} ${fieldId} ${value} ${ex.message}`);
	}
}

function removeElement(divId) {
	let div = document.getElementById(divId);
	if (div)
		div.remove();
	//else console.log(`removeElemnt() Error removing ${divId}`)
}


function resetClass(ctlId, className) {
	let x = document.getElementById(ctlId);
	if (x)
		x.className = className;
}

function setClass(elemName, oldClass, newClass) {
	if (document.getElementById(elemName).classList.contains(oldClass))
		document.getElementById(elemName).classList.remove(oldClass);

	document.getElementById(elemName).classList.add(newClass);

}

function getChecked(controlName) {

	let result = false;
	let control = document.getElementById(controlName);
	result = (control && control.checked);
	return result;
}

//https://stackoverflow.com/questions/24424214/disable-copy-or-paste-action-for-text-box/24424280
function banKeyboardActions(controlName, restrictions) {
	return;
	//cut copy paste
	let control = document.getElementById(controlName);
	if (control) {
		try {
			control.bind(restrictions, function (e) {
				e.preventDefault();
			});
		}
		catch (ex) {
			console.log("banKeyboardActions() EXCEPTION", ex);
		}
	}
}


//THIS CLOSES THE NAV BAR
function changeMenuClass(menuId) {

	let x = document.getElementById(menuId);
	if (x) {
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

}


//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
//not use chars used in file names, json, csv
function makeid(length) {
	var result = '';
	//var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]-=~`<>,./?><":;' + "'";
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%()_+-=~.';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}


function makeUserId(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}


function meetPasswordRules(value) {
	let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lowerCawe = 'abcdefghijklmnopqrstuvwxyz';
	let digits = "0123456789";
	let symbols = '!@#$%^&*()_+{}[]-=~`<>,./?><":;' + "'";
	let result = false;

	return result;
}



function makeidUpperCase(length) {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}

function makeidLowerCase(length) {
	let result = '';
	let characters = 'abcdefghijklmnopqrstuvwxyz';
	let charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}
function makeidDigits(length) {
	let result = '';
	let characters = '0123456789';
	let charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}

function makeidSymbol(length) {
	let result = '';
	let characters = '!@#$%^&*()_+{}[]-=~`<>,./?><":;' + "'";
	let charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}




function getValue(formName, fieldId) {
	let x = document.forms[formName][fieldId];
	if (x == undefined)
		return "";
	else return x.value;
}



function showDiv(divId, value) {
	let div = document.getElementById(divId);
	if (div != undefined) {
		if (value)
			div.style.display = "block";
		else
			div.style.display = "none";
	}
	//else console.log(`div ${divId} not found`);
}

function forceDark() {
	let inputs = document.querySelectorAll('input');
	inputs.forEach(inp => {
		inp.classList.add("forceDarki");
	})

	let textareas = document.querySelectorAll('textarea');
	textareas.forEach(ta => {
		ta.classList.add("forceDark");
	})
}

function disableButtons(state) {
	const buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = state;
	};

}

function disableCtl(ctlName, state = false, bg="black", tx="white") {
	let ctl = document.getElementById(ctlName);
	if ( ctl)
	{
		ctl.disabled = state;
		if ( !state)
		{
			ctl.style.backgroundColor = bg;
			ctl.style.color = tx;
		}
	}

}

function enableCtl(ctlName, state = true) {
	let ctl = document.getElementById(ctlName);
	ctl.disabled = !state;

}


function showMessageAt(divId, msg, status = "") {
	let div = document.getElementById(divId);
	if (div) {
		if (msg.length > 0)
			div.innerHTML = `<div class="alert alert-success">
		<strong>${status}</strong> ${msg}
	</div>
	`;
		else
			div.innerHTML = "";
	}

}

function showMessage(msg, title = "") {
	if (title.length == 0)
		title = statusSuccess;
	let div = document.getElementById("result");
	if (msg.length > 0)
		div.innerHTML = `<div class="alert alert-success field-size">
		<strong>${title}</strong> ${msg}
	</div>
	`;
	else
		div.innerHTML = "";
}

function showInfo(msg, title = "") {
	if (title.length == 0)
		title = `<i class="fas fa-info-circle"></i>`;
	let div = document.getElementById("result");
	if (msg.length > 0)
		div.innerHTML = `<div class="alert alert-info field-size">
		<strong>${title}</strong> ${msg}
	</div>
	`;
	else
		div.innerHTML = "";


}


function showInfoAt(divId, msg, title = "") {
	if (title.length == 0)
		title = `<i class="fas fa-info-circle"></i>`;
	let div = document.getElementById(divId);
	if (div)
	{
	if (msg.length > 0)
		div.innerHTML = `<div class="icon-size alert alert-info field-size">
		<strong>${title}</strong> ${msg}
	</div>
	`;
	else
		div.innerHTML = "";
	}
	else console.error(`Invalid div ${divId}`);


}


function showError(msg) {
	lastError = msg;
	if (msg.length > 0)
		console.error("ERROR:", msg);

	let div = document.getElementById("result");
	//div.innerHTML = `<h4 class="text-danger text-center footer-size">${msg}</h4`;
	div.innerHTML = `<div class="alert alert-danger field-size">
	<strong>${statusError}</strong> ${msg}
  </div>`;
}

function debugMessage(msg) {
	console.log("debugMessage()", showDebug, msg);
	if (showDebug) {
		let div = document.getElementById("debug");
		if (div)
			div.innerHTML = `<h3 class="text-warning  text-center ">${msg}</h3`;
	}

}


function showWarning(msg, title = "") {
	if (title.length == 0)
		title = statusWarning;
	let div = document.getElementById("result");
	//div.innerHTML = `<h4 class="text-warning text-center footer-size">${msg}</h4`;
	div.innerHTML = `<div class="alert alert-warning">
	<strong>${title}</strong>${msg}
  </div>`;
}


function showMessageIn(divName, msg) {
	let div = document.getElementById(divName);
	if (div)
		div.innerHTML = `<h3 class="row text-info">${msg}</h3>`;
	else
		showError(`Invalid div: [${divName}]`)
	if (msg.length > 0)
		showBlock(divName);
	else
		hideControl(divName);

}

async function readTextFile() {

	try {
		fileHandle = await window.showOpenFilePicker();
		const file = await fileHandle[0].getFile();
		data = await file.text();
	}
	catch (ex) {
		console.error("readTextFile() EXCEPTION", ex);
		data = "";
	}

	return data;


}



function setText(ctlId, text) {
	let control = document.getElementById(ctlId);
	if (control)
		control.innerText = text;
	else console.error("setText() error:", ctlId, text);
}



function saveBlobToDisk(fileName, dataBlob) {
	//    selectNavOption(btnId);
	showError("");

	if (supported && location.protocol == "https:" && !fileHandle) {
		fileHandle = getNewTextFileHandle();
	}

	globalResult = false;
	let anchor = downloadBlob(dataBlob, fileName);

	if (anchor != null) {
		globalResult = false;
		result = false;
		anchor.click();
	}

	if (globalResult)
		showMessage("The data was saved succesfully");
	else
		showMessage("The data was saved to your Downloads folder");
}


function textToBlob(text) {

	let myblob = new Blob([text], {
		type: 'text/plain'
	});
	return myblob;
}



async function openImageFile() {
	clear(false);
	Keyboard.close();
	hideControl("divHelp");
	showMessage("");
	hideControl("divInfo");
	hideControl("divSetttings");
	hideControl("divPaste");
	hideControl("divView");
	hideControl("divHide");
	hideTitle();
	initialIcons = false;
	disableInputs(mobile);

	
	if (settingsOpen)
		toggleSettings();

	if (sysInfoOpen)
		toggleSysInfo();

	hideControl("bigFile");
	hideControl("divInputText");
	fileMode = "Binary";
	manualText = false;
	data = "";


	// let fctl = document.getElementById("files");
	// fctl.click();
	// return;


	if (supported) {
		await openImageFileAPI().then(result => {
			//showData();
		})
	}
	else {
		readBase64 = true;
		let fctl = document.getElementById("files");
		fctl.click();
	}
}


function writeInnerHTML(divId, html) {
	let ctl = document.getElementById(divId);
	if (ctl)
		ctl.innerHTML = html;
}

function toggleMedia() {

	mediaOpen = !mediaOpen;
	let done = encryptionDone || decryptionDone;
	if (done)
		showMessage("Process complete.");

	if (mediaOpen) {
		showBlock("divMedia");
		hideControl("divView");
		showBlock("divHide");
	}
	else {
		hideControl("divMedia");
		hideControl("divHide");
		showBlock("divView");
	}

}


//pdf messages
function handleMessage(msg) {
	alert('got message ' + msg);
}
function setupHandler() {
	document.getElementById("myPdf").messageHandler = { onMessage: handleMessage };
}

function getSizeText(len) {
	let val = len;
	let legend = "bytes.";
	let msg = "";
	if (val > 1024 && val < 1024 * 1024) {
		val = Math.round(val / 1024);
		legend = "KB.";
	}
	else if (val > 1024 * 1024) {
		legend = "MB.";
		val = Math.round(val) / (1024 * 1024);
	}
	let txt = val.toString();
	let ix = txt.indexOf(".");
	if (ix >= 0 && txt.length > ix + 2)
		txt = txt.substr(0, ix + 2);
	msg = `${txt} ${legend}`;
	return msg;
}

function isEncryptedData() {
	encryptedFile = data.includes(softwareID) && data.includes("data:") && data.includes(`data2:`) && data.includes(`data3:`);
	if (!encryptedFile )
		encryptedFile = data.includes(softwareID) && data.includes(`"data":`) && data.includes(`"data2":`) && data.includes(`"data3":`);
	
	return encryptedFile;
}


function getIsDesktop() {
	isGoogleVer = window.location.href.includes("script.google.com") && location.protocol == "https:"
	return isGoogleVer;
}

function confirmDownload() {

	hideControl("divDownload");
	hideControl("divFileInfo");
	showBlock("divDownload2");
	setField("txFileName",fileName);
	setCurrentField("txFileName");
	gotoPage(4);
	openKeyboard();
	showError("Confirm Download/Save!. File will be unencrypted. Dispose properly.");
}

function doDownload() {

	let fn = getField("txFileName");
	if ( fn.length > 0 )
		fileName = fn;

	hideControl("PAGE4");
	if (data.length > 0) {
		//downloadDataFile(data, fileName);
		//todo: not downloading text files
		if (usingFile) {
			if (selFile.type.includes("pdf"))
				downloadFile();
			else (selFile.type.includes("text"))
			downloadDataFile(data, fileName);
		}
		else {
			downloadDataFile(data, fileName);
		}

		hideControl("divDownload");
		showMessage(`${saveIcon} OK. Saved to Downloads folder`);
	}
	else showError("No data to download.");
}


async function testRemote() {
	let url = "https://drive.google.com/file/d/1DtZwzILQNZwKH-e-kHJ5_pucflS-Anac/view?usp=sharing";
	//await openRemote("https://drive.google.com/file/d/1DtZwzILQNZwKH-e-kHJ5_pucflS-Anac/view?usp=sharing");
	try {
		// GET request
		const response = await fetch(url, {
			method: 'GET',
			mode: 'no-cors'
		})

		if (response.status === 200) {
			const data = await response.json();
			this.listApp = data;
			this.listApp.forEach(app => {
				if (app.status === "DISCONNECTED") {
					this.listDecApp.push(app);
				}
			});
			this.nbr = this.listDecApp.length;
		} else {
			if (response.status === 400) this.errors = ['Invalid app_permissions value. (err.400)'];
			if (response.status === 401) this.errors = ['Acces denied. (err.401)'];
		}
	} catch (error) {
		console.log(error);
		this.errors = ["Une erreur est survenue lors de la récupération des informations sur le serveur."]
	}

}



function getFileInstructions() {
	let instructions = "";
	if (usingFile)
		instructions = `
Instructions:
2. Locate file with extension Crypti.txt
1. Go to Link
2. Open file
3. Enter Password.
4. Decrypt.

Link: ${landingLink}\n`;


	return instructions;

}


function getInstructions() {
	let instructions = "";
	if (config.SendInstructions)
		if (usingFile)
			instructions = `
Instructions:
1. Go to Link
2. Open this file
3. Enter Password.
4. Decrypt.\n`;
		else
			instructions = `
Instructions:
1. Copy Message in Source
2. Go to Link
3. Paste Message
4. Enter Password
5. Decrypt.\n`;


	return instructions;

}



async function openRemote(url) {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let authors = data;

			authors.map(function (author) {

			});
		})
}


function showSpinner(value = true, msg = "Loading...") {
	if (value) {
		hideControl("main");
		showInfo(msg);
		showBlock("spinner");
	}
	else {
		showBlock("main");
		hideControl("spinner");
		showMessage("");
	}
}







function handleError(msg) {
	showError(msg);
	if (page == 2)
		nextPage();
}







async function openFile(divId) {
	gotoPage(1);
	data = "";
	setField("inputText", "");
	fileMode = "Text";
	readBase64 = false;
	if (supported) {
		await openTextFileAPI2().then(result => {
			// showData();
			// nextPage();
		})
	}
	else
		showBlock(divId);
}


async function openEncryptedFile(divId) {
	if (supported) {
		await openTextEncryptedFileAPI2().then(result => {
			showData();
		})
	}
	else
		showBlock(divId);
}


//todo: to test with different icons in the same page
function toggleIcon(statusVar, ctlId, originalStateClass = "fa-eye", toggleClass = "fa-eye-slash") {
	//fa-eye-slash}
	statusVar = !statusVar
	const ctl = document.getElementById(ctlId);

	ctl.addEventListener('click', function (e) {
		// toggle the type attribute
		if (statusVar)
			this.classList.toggle(originalStateClass);
		else
			this.classList.toggle(toggleClass);
	});
}

async function openTextFile(divId) {
	fileMode = "Text";
	if (supported) {
		await openTextFileAPI().then(result => {
			showData();
			hideControl("fileSelection");
		})
	}
	else
		showBlock(divId);
}


//this only works under https

function openBinFile(fieldId) {
	var input = document.getElementById(fieldId).files;
	var fileData = new Blob([input[0]]);

	var reader = new FileReader();
	reader.readAsArrayBuffer(fileData);
	reader.onload = function () {
		let arrayBuffer = reader.result
		let bytes = new Uint8Array(arrayBuffer);
		return bytes;
	}
	return [];
}

async function getNewTextFileHandle(ext = ".txt") {

	if (!supported)
		return null;

	const options = {
		types: [
			{
				description: 'Text Files',
				accept: {
					'text/plain': [ext],
				},
			},
		],
	};
	const handle = await window.showSaveFilePicker(options);
	return handle;
}

function doToast(divId, action) {
	let div = document.getElementById(divId);
	if (div)
		div.toast(action);
}

function copyToClipboardNew(message, showMsg = false) {
	navigator.clipboard.writeText(message)
		.then(() => {
			canCopy = true;
			// if (showMessage)
			// 	showMessage(`Text copied to clipboard. (${message.length} bytes.)`);
		})
		.catch(err => {
			canCopy = false;
			showError("Error copying to clipboard. " + err);
			// This can happen if the user denies clipboard permissions:
			console.error("Can not copy clipboard via AP", err);
		});
	return canCopy;
}

function saveTextToFile(fileName, data) {
	//var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
	let blob = new Blob([data], { type: "text/plain;charset=utf-8" });

	try {
	}
	catch (ex) {
		console.error("Exception saving to file", ex);
		console.log("copied to clipboard");
		copyToClipboardNew(data);
		showError("Can not save to a local file. Data copied to clipboard, save it manually");

	}

}

function showResultMessage(r) {
	if (r.result >= 0) {
		showMessage(r.message);
	}
	else
		showError(r.message);
}


function showErrorIn(divName, msg) {
	let div = document.getElementById(divName);
	if (div)
		div.innerHTML = `<h6 class="row text-danger">${msg}</h6`;
	else
		showError(`Invalid div: [${divName}]`)

	if (msg.length > 0)
		showBlock(divName);
	else
		hideControl(divName);

}


function showLog(text) {
	showInDiv("logs", text);
}


function getCurrentText(btn) {
	let currentText = document.querySelector(`#${btn}`).innerHTML;
	return currentText;
}

function setCurrentText(btn, text) {
	document.querySelector(`#${btn}`).innerHTML = text;
}

function copyToClipboardOld(fieldId) {
	var copyText = document.getElementById(fieldId);
	if (copyText) {
		copyText.select();
		document.execCommand("copy");
	}
}

function copyToClipboardInField(formName, fieldId, value) {
	setValue(formName, fieldId, value);
	var copyText = document.getElementById(fieldId);
	if (copyText) {
		copyText.select();
		document.execCommand("copy");
	}
	setValue(formName, fieldId, "");
}


function copyToClipboard(formName, text, id = "") {

	if (id.length > 0) {
		var copyText = document.getElementById(id);
		copyText.select();
		document.execCommand("copy");
		setValue(formName, id, "");
	}
	else {
		navigator.clipboard.writeText(text)
			.then(() => {
				canCopy = true;
			})
			.catch(err => {
				canCopy = false;
				// This can happen if the user denies clipboard permissions:
				console.error("Can not copy clipboard via AP", err);
			});
	}
	return canCopy;
}

function copyToClipboardTest(text) {
	// This can happen if the user denies clipboard permissions:

	showBlock("PS2");
	setValue("main", "DP2", text);
	var copyText = document.getElementById("DP2");
	copyText.select();
	document.execCommand("copy");
	setValue("main", "DP2", "");

	//hideControl("PS2");
}


function getFormData(formName) {
	//var form = document.getElementById(formName);
	var form = document.forms[formName];
	let inputForm = {};
	var data = new FormData(form);
	for (var [key, value] of data) {
		inputForm[key] = value;
	}
	return inputForm;
}


function readFile(input) {
	let file = input.files[0];

	data = "";

	let reader = new FileReader();

	reader.readAsText(file);

	reader.onload = function () {
		data = reader.result;
	};

	reader.onerror = function () {
		console.error(reader.error);
	};

	return text;

}

function readRemoteFile(fName) {
	fetch(`file:///${fName}`)
		.then(response => response.arrayBuffer())
		.then(ab => {
			// do stuff with `ArrayBuffer` representation of file
			console.log(ab);
		})
		.catch(err => console.error(err));
}


function hideControl(ctl) {

	//document.querySelector(`#${ctl}`).style.display = "none";
	let control = document.getElementById(ctl);
	if (control)
		control.style.display = "none";
	else {
		addTrace(`hideControl(${ctl}) invalid control`);
	}
}


function showInLine(ctl) {
	document.querySelector(`#${ctl}`).style.display = "inline";
}

function showBlock(ctl) {
	let control = document.getElementById(ctl);
	if (control)
		control.style.display = "block";
	else {
		addTrace(`showBlock(${ctl}) undefined`, "ERROR");
	}

	//document.querySelector(`#${ctl}`).style.display = "block";
}

function showTitle() {
	writeInnerHTML("divTitle", `<label>${softwareID} ${environment} Version: ${versionNumber}</label>`);
}

function hideTitle() {
	writeInnerHTML("divTitle", "");
}


function getTimeStamp(m = null) {
	if (m == null)
		m = new Date();
	return m.toISOString();

	//   var dateString =
	// 	  m.getUTCFullYear() + "/" +
	// 	  ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
	// 	  ("0" + m.getUTCDate()).slice(-2) + " " +
	// 	  ("0" + m.getUTCHours()).slice(-2) + ":" +
	// 	  ("0" + m.getUTCMinutes()).slice(-2) + ":" +
	// 	  ("0" + m.getUTCSeconds()).slice(-2);

	// 	return dateString;

}


function getTimeStampString(m) {
	var dateString =
		m.getUTCFullYear() + "/" +
		("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" +
		("0" + m.getUTCDate()).slice(-2) + " " +
		("0" + m.getUTCHours()).slice(-2) + ":" +
		("0" + m.getUTCMinutes()).slice(-2) + ":" +
		("0" + m.getUTCSeconds()).slice(-2);

	return dateString;

}


function addTrace(text, traceType = "MSG") {

	let tx = `${getTimeStamp()}\t${traceType}\t${text}`;
	traces.push(text);
	console.log(text);
	renderTrace();

}

function renderTrace(id = "trace") {

		
	let lines = "";
	traces.forEach(line=>{
		lines = `${lines}\n${line}`;
	})
	setField("txTrace",lines);
	if ( traceEnabled)
		showBlock("divTrace");

	sessionStorage.setItem("trace",lines);
	clearTrace();
	return;

	let txt = "";
	let html = `<table class="table">`;
	let rows = "";
	for (let i = 0; i < traces.length; i++) {
		txt += `${traces[i]}</br>`;
		console.log("renderTrace()", traces[i]);
		let p = traces[i].split("\t");
		rows = `${rows}
		<tr>
		<td>
		${p[0]}
		</td>
		<td>
		${p[1]}
		</td>
		<td>
		${p[2]}
		</td>
		</tr>`
	}
	html = `${html}</table>${rows}`;
	if (traceEnabled) {
		let traceDiv = document.getElementById(id);
		traceDiv.innerHTML = html;
		showBlock("trace");
	}
	else localStorage.setItem("trace", html);
}


function validateEmail(mail) {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
		return true;
	return false;
}



function decodeClipBoard(clipText) {
	encryptedText = false;
	if (clipText.length == 0) {
		showWarning("No data in clipboard.");
		return "";
	}
	console.log(`Utils.pasteClipboard() [${clipText}]`);
	let ix = clipText.toLowerCase().indexOf("http");
	if (ix >= 0)
		clipText = clipText.substr(0, ix);


	let parts = clipText.split("|");
	cb = {};
	cb.Hint = "";
	cb.Text = "";
	console.log("parts", parts);

	if (parts.length == 1)
		cb.Text = parts[0];
	else if (parts.length >= 3) {
		cb.Hint = parts[1];
		cb.Text = parts[2].trim();
		encryptedText = true;
	}
	console.log("cb", cb);
	console.log("cb.Text:", cb.Text);

	setField("pwdHint", cb.Hint);
	setField("inputText", cb.Text);
	showBlock("divIputText");
	showMessage(`Text copied from clipboard. (${cb.Text.length} bytes.)`);
	return cb.Text;
}


function function8() {
	if (xzY1.length > 0) {
		let sc = document.getElementById('xzY1');
		console.log('sc', sc);
		if (sc) {
			let vr = MD5(sc.innerHTML);
			if (vr.toUpperCase() != xzY1) {

				removeElement('mainContent');
			}
		}
	}
	removeElement('f5');
	removeElement('log');

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

function createGuid(){  
	function S4() {  
	   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
	}  
	return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
 }  
   

function addDays(dt, days) {
// 	let dt0 = new Date(dt);
//   return new Date(dt0.getTime() + days*24*60*60*1000);
	var result = new Date(dt);
	result.setDate(result.getDate() + days);
	return result;
	
 }


function pasteClipboard() {
	try {
		navigator.clipboard.readText().then(
			clipText => {
				canPaste = true;
				if (clipText.length > 0) {
					dataFromClipboard = true;
					manualText = false;
					usingFile = false;
					data = clipText.replace(landingLink, "");
					noFocus = true;
					showData();
					return data;
				}
				else {
					showWarning("Clipboard is empty.");
					return "";
				}
			}).catch((errorText) => {
				showError("Error pasting from clipboard. " + errorText);
				canPaste = false;
			}
			);
	}
	catch (ex) {
		showError("Exception reading the clipboard. " + ex.message);
		canPaste = false;
	}
	return "";
}

function clearTrace() {
	traces = [];
	hideControl("divTrace");
}

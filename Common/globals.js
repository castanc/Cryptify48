var versionNumber = "4.10.24"; 
var softwareID = "Crypt.io";
var environment = "Stage";
var fileHandle;
var data = "";
var globalResult = false;
var showDebug = false;
var mobile = false;
var fileSupported = true;
var fileSelectionDiv = "fileSelectionAPI";
var canCopy = true;
var canPaste = true;
var startFolder = "documents";
var fileName = "";
var darkMode = "dark";
var lastSelected = ""
var currentKey = "";
var currentValue = "";
var existingKey = false;
var CAPSLockOn = false;
var allOK = true;
var menus = [];
var menu = {};
var newMenu = "";
var actionPending = false;
var controlPending = "";
var version="";
var branch="";
var versionDate = "";
var kch = false;        //keys form changed
var pch = false; //
var sch = false;
var pp = "";
var ep = "";
var traceEnabled = false;
var traces = [];
var trace = "";
var currentSection = "";
var languageCode = "en";
var languageName = "English";
var userIPAddress = "";
var page = 1;
var totalPages = 3;
var cb = {};            //clipboard object
var sp = {} //send parameters
var directLink = "";
//prod vsn 1.9
//var landingLink = "https://sites.google.com/view/kryptify/home";
//qa ver 2.0
var landingLink =  "https://sites.google.com/view/kryptifystage/home";
//var landingLink =  "https://castanc.github.io/statictest/";
//prod vsn 1.9
//var textifyLink = "https://script.google.com/macros/s/AKfycbytk_HjrpZti0fcFI8CQkR_VOPqAlwZ2YJNPvFFwZIKpGxiii8p6YPeh9tFkbK8Fnb75g/exec";
//qa vsn 2
var textifyLink = "https://script.google.com/macros/s/AKfycbxMShQaIySnNjY2fvLjbDY_xUkdh-hiIYCBycztUH1zb5Ln6tmVPz5H9pkEXbckpbUrgQ/exec";
var skipLanding = true;
var addInstructions = true;
var pwdLen = 4;
var fieldTouched = false;
var localIP = "";
var pasted = false;
var encode64 = true;
var usingFile = false;
var selectTextFileOpen = false;
var selectImageFileOpen = false;
var readBase64 = false;
var fileMode = "";
var log = "";
var maxData = 1024*1024;
var selFile = {};
var mediaOpen = false;
var et = false;
var includeInstructions = true;
var includeLinks = true;
var fileDecrypted = false;
var encryptionDone = false;
var errorMessage = "";
var encryptedFile = false;
var encryptedText = false;
var decryptionDone = false;
var dataFromClipboard = false;
var resultDTO = {};
var encryptionLevel = 100;
var os = {};
var iconHtml = "";
var manualText = false;
var noFocus = false;
var config = {};
var canProcess = true;
var fileSizeText = "";
var sysInfoOpen = false;
var statusWarning  = `<i class="fas fa-exclamation-triangle"></i>`;
var statusSuccess = `<i class="fa fa-check"></i>`;
var statusError = `<i class="fa fa-bomb"></i>`;
var sysIcons = true;
var userEmail = "";
var deviceId = "";
var settingsOpen = false;
var configChanged = false;
var shareIcon = `<i class="fas fa-share"></i>`;
var saveIcon = `<i class="fa fa-save green"></i>`;
var pasteIcon = `<i class="fas fa-paste"></i>`;
var homeIcon = `<i class="fa fa-home"></i>`;
var eyeIcon = `<i class="far fa-eye"></i>`;
var decryptIcon = `<i class="fa fa-unlock"></i>`;
var encryptIcon = `<i class="fas fa-user-secret"></i>`;
var folderIcon = `<i class="fas fa-folder-open"></i>`;
var copyIcon = `<i class="fas fa-copy"></i>`;
var hideIcon = `<i class="far fa-eye-slash"></i>`;
var infoIcon = `<i class="fas fa-info-circle"></i>`;
var nextIcon = `<i class="fas fa-arrow-right"></i>`;
var pdfIcon = `<i class="fas fa-file-pdf"></i>`;
var settingsIcon = `<i class="fas fa-cog"></i>`;
var logOpen = false;
var outFileName = "";
var value1 = "";
var currentMedia = "";
var lastError = "";
var checkHours = 1;
var isPDF = false;
var d = false;
var isGoogleVer = false;
var sharingFile = false;
var registerUrl = "https://script.google.com/macros/s/AKfycbxvK6g57HTBPiWpPKwmRKsTS3y0vjLUK93c8YMlw1lsZkwkWhDCzuhaiqmMIwveAUgf/exec";
var initialIcons = true;
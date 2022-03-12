
function createMenu(step="start") {

    console.log("createMenu()");
  let menuMobile = "";

  if ( step == "user")
  {
    menuMobile = `<div id="divSaveEmail" class="text-center" style="display: none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fa fa-save" title="Download" id="iconSaveUser"  style="cursor: pointer;"
        onclick="saveEmail(this.value)"></i>
        </button>
    </div>
`;

let div = document.getElementById("iconMenu");
div.innerHTML = menuMobile;
showBlock("iconMenu");
return;
}

  menuMobile = `
    <div id="icons" class="separation-menu row card2 text-center">
    <div id="divClear">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fa fa-home" title="Hoome" id="iconClear"
         style="cursor: pointer;" onclick="doClear()"></i>
         </button>

    </div>


    <div id="divInfo">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-info-circle" title="System Info" id="clearText"
         style="cursor: pointer;" onclick="toggleSysInfo()"></i>
         </button>
    </div>

    <div id="divSettings" class="text-center">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-cog" title="System Info" id="settings"
         style="cursor: pointer;" onclick="toggleSettings()"></i>
         </button>
    </div>



    <div id="divErase" class="text-center">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fa fa-eraser" title="Erase field" id="erase" style="cursor: pointer;"
        onclick="eraseField()"></i>
        </button>
    </div>


    <div id="divPaste" class="text-center">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-paste" title="Paste Text from Clipboard" id="pasteClipboard" style="cursor: pointer;"
        onclick="selectPaste()"></i>
        </button>
    </div>



    <div id="divOpenFile" class="text-center">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-folder-open" title="Open File" id="clearText"  style="cursor: pointer;"
        onclick="openImageFile()"></i>
        </button>
    </div>


    <div id="divEncrypt" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-user-secret" title="Encrypt" id="clearText"  style="cursor: pointer;"
        onclick="doEncryptNew()"></i>
        </button>
    </div>


    <div id="divDecrypt" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
          <i class="fa fa-unlock" title="Encrypt" id="clearText"  style="cursor: pointer;"
        onclick="doDecryptNew()"></i>
        </button>
    </div>

    <div id="divShare" style="display: none;">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-share" id="shareIt"  style="cursor: pointer;" onclick="doShare()"
        title="Share Results"></i>
        </button>
    </div>



    <div id="divView" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="far fa-eye" title="View Media" id="viewMedia"  style="cursor: pointer;"
        onclick="toggleMedia()"></i>
        </button>
    </div>


    <div id="divViewPassword" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right red">
      <i class="far fa-eye" title="View Media" id="viewPassword"  style="cursor: pointer";
      ></i>
        </button>
    </div>


    <div id="divHide" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="far fa-eye-slash" title="Hide Media" id="viewMedia"  style="cursor: pointer;"
        onclick="toggleMedia()"></i>
        </button>
    </div>

    <div id="divDownload" class="text-center" style="display: none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fa fa-save red" title="Download" id="iconDownload"  style="cursor: pointer;"
        onclick="confirmDownload()"></i>
        </button>
    </div>

    <div id="divDownload2" class="text-center" style="display: none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fa fa-save green" title="Download" id="iconDownload"  style="cursor: pointer;"
        onclick="doDownload()"></i>
        </button>
    </div>


    <div id="divInputPDF" class="text-center" style="display: none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-file-pdf" title="View PDF" id="iconInputPDF"  style="cursor: pointer;"
        onclick="viewInputPDF()"></i>
        </button>
    </div>


    <div id="divCopy" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-copy red" title="Copy" id="copy"  style="cursor: pointer;"
        onclick="doCopy()"></i>
        </button>
    </div>


    <div id="divNext" class="text-center">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-arrow-right" title="Next" id="iconNext"  style="cursor: pointer;"
        onclick="nextPage()"></i>
        </button>
    </div>

  </div>
`;

    let div = document.getElementById("iconMenu");
    div.innerHTML = menuMobile;
    showBlock("iconMenu");
    return;

    // if (div) {
    //     if (mobile) {
    //         div.innerHTML = menuMobile;
    //     }
    //     else {
    //         div.innerHTML = menuDesktop;
    //     }
    // }
}

function createMenu(step="start") {

  let menuMobile = "";

  menuMobile = `
    <div id="icons" class="separation-menu row card2 text-center">
    <div id="divClear">
    <div class="btn btn-secondary separation-btn-right">
      <i class="fa fa-home" title="Hoome" id="iconClear"
         style="cursor: pointer;" onclick="doClear()"></i>
         </div>

    </div>





    <div id="divErase" class="text-center">
    <div class="btn btn-secondary separation-btn-right">
      <i class="fa fa-eraser" title="Erase field" id="erase" style="cursor: pointer;"
        onclick="eraseField()"></i>
        </div>
    </div>


    <div id="divPaste" class="text-center">
    <div class="btn btn-primary separation-btn-right">
      <i class="fas fa-paste" title="Paste Text from Clipboard" id="pasteClipboard" style="cursor: pointer;"
        onclick="selectPaste()"></i>
        </div>
    </div>



    <div id="divOpenFile" class="text-center">
    <div class="btn btn-primary separation-btn-right">
      <i class="fas fa-folder-open" title="Open File" id="openFile"  style="cursor: pointer;"
        onclick="openImageFile()"></i>
        </div>
    </div>


    <div id="divEncrypt" class="text-center" style="display:none">
    <div class="btn btn-primary separation-btn-right">
      <i class="fas fa-user-secret" title="Encrypt" id="decrypt"  style="cursor: pointer;"
        onclick="doEncryptNew()"></i>
        </div>
    </div>


    <div id="divDecrypt" class="text-center" style="display:none">
    <div class="btn btn-primary separation-btn-right">
          <i class="fa fa-unlock" title="Encrypt" id="decrypt"  style="cursor: pointer;"
        onclick="doDecryptNew()"></i>
        </div>
    </div>

    <div id="divShare" style="display: none;">
    <div class="btn btn-success separation-btn-right">
      <i class="fas fa-share" id="shareIt"  style="cursor: pointer;" onclick="doShare()"
        title="Share Results"></i>
        </div>
    </div>





    <div id="divViewPassword" class="text-center" style="display:none">
    <div class="btn btn-danger separation-btn-right">
      <i class="far fa-eye" title="View Password" id="viewPassword"  style="cursor: pointer";
      ></i>
        </div>
    </div>


    <div id="divView" class="text-center" style="display:none">
    <div class="btn btn-secondary separation-btn-right">
      <i class="far fa-eye" title="View Media" id="viewMedia"  style="cursor: pointer;"
        onclick="toggleMedia()"></i>
        </div>
    </div>


    <div id="divHide" class="text-center" style="display:none">
    <div class="btn btn-secondary separation-btn-right">
      <i class="far fa-eye-slash" title="Hide Media" id="viewMedia"  style="cursor: pointer;"
        onclick="toggleMedia()"></i>
        </div>
    </div>


    <div id="divCopy" class="text-center" style="display:none">
    <div class="btn btn-danger separation-btn-right">
      <i class="fas fa-copy" title="Copy" id="copy"  style="cursor: pointer;"
        onclick="doCopy()"></i>
        </div>
    </div>


    <div id="divDownload" class="text-center" style="display: none">
    <div class="btn btn-danger separation-btn-right">
      <i class="fa fa-save" title="Download" id="iconDownload"  style="cursor: pointer;"
        onclick="confirmDownload()"></i>
        </div>
    </div>

    <div id="divDownload2" class="text-center" style="display: none">
    <div class="btn btn-success separation-btn-right">
      <i class="fa fa-save" title="Download" id="iconDownload"  style="cursor: pointer;"
        onclick="doDownload()"></i>
        </div>
    </div>


    <div id="divInputPDF" class="text-center" style="display: none">
    <div class="btn btn-secondary separation-btn-right">
      <i class="fas fa-file-pdf" title="View PDF" id="iconInputPDF"  style="cursor: pointer;"
        onclick="viewInputPDF()"></i>
        </div>
    </div>

    <div id="divInfo">
    <div class="btn btn-secondary separation-btn-right">
      <i class="fas fa-info-circle" title="System Info" id="info"
         style="cursor: pointer;" onclick="toggleSysInfo()"></i>
         </div>
    </div>

    <div id="divSettings" class="text-center">
    <div class="btn btn-secondary separation-btn-right">
      <i class="fas fa-cog" title="System Info" id="settings"
         style="cursor: pointer;" onclick="toggleSettings()"></i>
         </div>
    </div>


    <div id="divNext" class="text-center">
    <div class="btn btn-secondary separation-btn-right">
      <i class="fas fa-arrow-right" title="Next" id="iconNext"  style="cursor: pointer;"
        onclick="nextPage()"></i>
        </div>
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
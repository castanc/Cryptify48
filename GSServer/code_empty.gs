var app = "CryptifyQA";


function doGet(e) {
    return  HtmlService.createTemplateFromFile('index').evaluate();
}


function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
    303;
}






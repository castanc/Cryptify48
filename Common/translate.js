var tob = {};    //translateObject
var translations = [];


function getLanguage(){
	let l = navigator.language;
	if ( l.length > 2)
		l= l.substr(0,2);
	return l;
}


function translate(txt,lang="en")
{
    if ( !lang || lang.length == 0)
        lang = getLanguage();
    if ( lang != "en")
    {
        tob = {};
        tob.source = "en";
        tob.target = lang;
        tob.text = txt;
        tob.translation = "";
    }
    else return txt;
}
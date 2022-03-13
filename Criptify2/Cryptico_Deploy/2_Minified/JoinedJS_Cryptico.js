var versionNumber = "4.10.12"; 
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
"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
sjcl.cipher.aes=function(a){this.s[0][0][0]||this.O();var b,c,d,e,f=this.s[0][4],g=this.s[1];b=a.length;var h=1;if(4!==b&&6!==b&&8!==b)throw new sjcl.exception.invalid("invalid aes key size");this.b=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^g[3][f[c&
255]]};
sjcl.cipher.aes.prototype={encrypt:function(a){return t(this,a,0)},decrypt:function(a){return t(this,a,1)},s:[[[],[],[],[],[]],[[],[],[],[],[]]],O:function(){var a=this.s[0],b=this.s[1],c=a[4],d=b[4],e,f,g,h=[],k=[],l,n,m,p;for(e=0;0x100>e;e++)k[(h[e]=e<<1^283*(e>>7))^e]=e;for(f=g=0;!c[f];f^=l||1,g=k[g]||1)for(m=g^g<<1^g<<2^g<<3^g<<4,m=m>>8^m&255^99,c[f]=m,d[m]=f,n=h[e=h[l=h[f]]],p=0x1010101*n^0x10001*e^0x101*l^0x1010100*f,n=0x101*h[m]^0x1010100*m,e=0;4>e;e++)a[e][f]=n=n<<24^n>>>8,b[e][m]=p=p<<24^p>>>8;for(e=
0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};
function t(a,b,c){if(4!==b.length)throw new sjcl.exception.invalid("invalid aes block size");var d=a.b[c],e=b[0]^d[0],f=b[c?3:1]^d[1],g=b[2]^d[2];b=b[c?1:3]^d[3];var h,k,l,n=d.length/4-2,m,p=4,r=[0,0,0,0];h=a.s[c];a=h[0];var q=h[1],v=h[2],w=h[3],x=h[4];for(m=0;m<n;m++)h=a[e>>>24]^q[f>>16&255]^v[g>>8&255]^w[b&255]^d[p],k=a[f>>>24]^q[g>>16&255]^v[b>>8&255]^w[e&255]^d[p+1],l=a[g>>>24]^q[b>>16&255]^v[e>>8&255]^w[f&255]^d[p+2],b=a[b>>>24]^q[e>>16&255]^v[f>>8&255]^w[g&255]^d[p+3],p+=4,e=h,f=k,g=l;for(m=
0;4>m;m++)r[c?3&-m:m]=x[e>>>24]<<24^x[f>>16&255]<<16^x[g>>8&255]<<8^x[b&255]^d[p++],h=e,e=f,f=g,g=b,b=h;return r}
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.$(a.slice(b/32),32-(b&31)).slice(1);return void 0===c?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.$(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===
b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b=b&31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return!1;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===
c},$:function(a,b,c,d){var e;e=0;for(void 0===d&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},i:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},byteswapM:function(a){var b,c;for(b=0;b<a.length;++b)c=a[b],a[b]=c>>>24|c>>>8&0xff00|(c&0xff00)<<8|c<<24;return a}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>8>>>8>>>8),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a=a+"00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
sjcl.codec.base32={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",X:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(a,b,c){var d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f="",g=0,h=sjcl.codec.base32.B,k=0,l=sjcl.bitArray.bitLength(a);c&&(h=sjcl.codec.base32.X);for(c=0;f.length*d<l;)f+=h.charAt((k^a[c]>>>g)>>>e),g<d?(k=a[c]<<d-g,g+=e,c++):(k<<=d,g-=d);for(;f.length&7&&!b;)f+="=";return f},toBits:function(a,b){a=a.replace(/\s|=/g,"").toUpperCase();var c=sjcl.codec.base32.BITS,
d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f=[],g,h=0,k=sjcl.codec.base32.B,l=0,n,m="base32";b&&(k=sjcl.codec.base32.X,m="base32hex");for(g=0;g<a.length;g++){n=k.indexOf(a.charAt(g));if(0>n){if(!b)try{return sjcl.codec.base32hex.toBits(a)}catch(p){}throw new sjcl.exception.invalid("this isn't "+m+"!");}h>e?(h-=e,f.push(l^n>>>h),l=n<<c-h):(h+=d,l^=n<<c-h)}h&56&&f.push(sjcl.bitArray.partial(h&56,l,1));return f}};
sjcl.codec.base32hex={fromBits:function(a,b){return sjcl.codec.base32.fromBits(a,b,1)},toBits:function(a){return sjcl.codec.base32.toBits(a,1)}};
sjcl.codec.base64={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.B,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=f.charAt((g^a[c]>>>e)>>>26),6>e?(g=a[c]<<6-e,e+=26,c++):(g<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,f=sjcl.codec.base64.B,g=0,h;b&&(f=f.substr(0,62)+"-_");for(d=0;d<a.length;d++){h=f.indexOf(a.charAt(d));
if(0>h)throw new sjcl.exception.invalid("this isn't base64!");26<e?(e-=26,c.push(g^h>>>e),g=h<<32-e):(e+=6,g^=h<<32-e)}e&56&&c.push(sjcl.bitArray.partial(e&56,g,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.b[0]||this.O();a?(this.F=a.F.slice(0),this.A=a.A.slice(0),this.l=a.l):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.F=this.Y.slice(0);this.A=[];this.l=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.A=sjcl.bitArray.concat(this.A,a);b=this.l;a=this.l=b+sjcl.bitArray.bitLength(a);if(0x1fffffffffffff<a)throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var d=new Uint32Array(c),e=0;for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,d.subarray(16*e,
16*(e+1))),e+=1;c.splice(0,16*e)}else for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,c.splice(0,16));return this},finalize:function(){var a,b=this.A,c=this.F,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.l/0x100000000));for(b.push(this.l|0);b.length;)u(this,b.splice(0,16));this.reset();return c},Y:[],b:[],O:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}for(var b=0,c=2,d,e;64>b;c++){e=!0;for(d=2;d*d<=c;d++)if(0===c%d){e=
!1;break}e&&(8>b&&(this.Y[b]=a(Math.pow(c,.5))),this.b[b]=a(Math.pow(c,1/3)),b++)}}};
function u(a,b){var c,d,e,f=a.F,g=a.b,h=f[0],k=f[1],l=f[2],n=f[3],m=f[4],p=f[5],r=f[6],q=f[7];for(c=0;64>c;c++)16>c?d=b[c]:(d=b[c+1&15],e=b[c+14&15],d=b[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+b[c&15]+b[c+9&15]|0),d=d+q+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(r^m&(p^r))+g[c],q=r,r=p,p=m,m=n+d|0,n=l,l=k,k=h,h=d+(k&l^n&(k^l))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;f[0]=f[0]+h|0;f[1]=f[1]+k|0;f[2]=f[2]+l|0;f[3]=f[3]+n|0;f[4]=f[4]+m|0;f[5]=f[5]+p|0;f[6]=f[6]+r|0;f[7]=
f[7]+q|0}
sjcl.mode.ccm={name:"ccm",G:[],listenProgress:function(a){sjcl.mode.ccm.G.push(a)},unListenProgress:function(a){a=sjcl.mode.ccm.G.indexOf(a);-1<a&&sjcl.mode.ccm.G.splice(a,1)},fa:function(a){var b=sjcl.mode.ccm.G.slice(),c;for(c=0;c<b.length;c+=1)b[c](a)},encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,k=h.bitLength(c)/8,l=h.bitLength(g)/8;e=e||64;d=d||[];if(7>k)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;4>f&&l>>>8*f;f++);f<15-k&&(f=15-k);c=h.clamp(c,
8*(15-f));b=sjcl.mode.ccm.V(a,b,c,d,e,f);g=sjcl.mode.ccm.C(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),k=f.clamp(b,h-e),l=f.bitSlice(b,h-e),h=(h-e)/8;if(7>g)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;4>b&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));k=sjcl.mode.ccm.C(a,k,c,l,e,b);a=sjcl.mode.ccm.V(a,k.data,c,d,e,b);if(!f.equal(k.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");
return k.data},na:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,k=h.i;d=[h.partial(8,(b.length?64:0)|d-2<<2|f-1)];d=h.concat(d,c);d[3]|=e;d=a.encrypt(d);if(b.length)for(c=h.bitLength(b)/8,65279>=c?g=[h.partial(16,c)]:0xffffffff>=c&&(g=h.concat([h.partial(16,65534)],[c])),g=h.concat(g,b),b=0;b<g.length;b+=4)d=a.encrypt(k(d,g.slice(b,b+4).concat([0,0,0])));return d},V:function(a,b,c,d,e,f){var g=sjcl.bitArray,h=g.i;e/=8;if(e%2||4>e||16<e)throw new sjcl.exception.invalid("ccm: invalid tag length");
if(0xffffffff<d.length||0xffffffff<b.length)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");c=sjcl.mode.ccm.na(a,d,c,e,g.bitLength(b)/8,f);for(d=0;d<b.length;d+=4)c=a.encrypt(h(c,b.slice(d,d+4).concat([0,0,0])));return g.clamp(c,8*e)},C:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.i;var k=b.length,l=h.bitLength(b),n=k/50,m=n;c=h.concat([h.partial(8,f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!k)return{tag:d,data:[]};for(g=0;g<k;g+=4)g>n&&(sjcl.mode.ccm.fa(g/
k),n+=m),c[3]++,e=a.encrypt(c),b[g]^=e[0],b[g+1]^=e[1],b[g+2]^=e[2],b[g+3]^=e[3];return{tag:d,data:h.clamp(b,l)}}};
sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2.S,k=sjcl.bitArray,l=k.i,n=[0,0,0,0];c=h(a.encrypt(c));var m,p=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4)m=b.slice(g,g+4),n=l(n,m),p=p.concat(l(c,a.encrypt(l(c,m)))),c=h(c);m=b.slice(g);b=k.bitLength(m);g=a.encrypt(l(c,[0,0,0,b]));m=k.clamp(l(m.concat([0,0,0]),g),b);n=l(n,l(m.concat([0,0,0]),g));n=a.encrypt(l(n,l(c,h(c))));
d.length&&(n=l(n,f?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(k.concat(m,k.clamp(n,e)))},decrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2.S,h=sjcl.bitArray,k=h.i,l=[0,0,0,0],n=g(a.encrypt(c)),m,p,r=sjcl.bitArray.bitLength(b)-e,q=[];d=d||[];for(c=0;c+4<r/32;c+=4)m=k(n,a.decrypt(k(n,b.slice(c,c+4)))),l=k(l,m),q=q.concat(m),n=g(n);p=r-32*c;m=a.encrypt(k(n,[0,0,0,p]));m=k(m,h.clamp(b.slice(c),p).concat([0,
0,0]));l=k(l,m);l=a.encrypt(k(l,k(n,g(n))));d.length&&(l=k(l,f?d:sjcl.mode.ocb2.pmac(a,d)));if(!h.equal(h.clamp(l,e),h.bitSlice(b,r)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return q.concat(h.clamp(m,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.S,e=sjcl.bitArray,f=e.i,g=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),g=f(g,a.encrypt(f(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=f(h,d(h)),c=e.concat(c,[-2147483648,0,0,0]));g=f(g,c);
return a.encrypt(f(d(f(h,d(h))),g))},S:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};
sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var f=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm.C(!0,a,f,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var f=b.slice(0),g=sjcl.bitArray,h=g.bitLength(f);e=e||128;d=d||[];e<=h?(b=g.bitSlice(f,h-e),f=g.bitSlice(f,0,h-e)):(b=f,f=[]);a=sjcl.mode.gcm.C(!1,a,f,d,c,e);if(!g.equal(a.tag,b))throw new sjcl.exception.corrupt("gcm: tag doesn't match");return a.data},ka:function(a,b){var c,d,e,f,g,h=sjcl.bitArray.i;e=[0,0,
0,0];f=b.slice(0);for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,f));g=0!==(f[3]&1);for(d=3;0<d;d--)f[d]=f[d]>>>1|(f[d-1]&1)<<31;f[0]>>>=1;g&&(f[0]^=-0x1f000000)}return e},j:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm.ka(b,a);return b},C:function(a,b,c,d,e,f){var g,h,k,l,n,m,p,r,q=sjcl.bitArray;m=c.length;p=q.bitLength(c);r=q.bitLength(d);h=q.bitLength(e);
g=b.encrypt([0,0,0,0]);96===h?(e=e.slice(0),e=q.concat(e,[1])):(e=sjcl.mode.gcm.j(g,[0,0,0,0],e),e=sjcl.mode.gcm.j(g,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm.j(g,[0,0,0,0],d);n=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm.j(g,h,c));for(l=0;l<m;l+=4)n[3]++,k=b.encrypt(n),c[l]^=k[0],c[l+1]^=k[1],c[l+2]^=k[2],c[l+3]^=k[3];c=q.clamp(c,p);a&&(d=sjcl.mode.gcm.j(g,h,c));a=[Math.floor(r/0x100000000),r&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm.j(g,d,a);k=b.encrypt(e);
d[0]^=k[0];d[1]^=k[1];d[2]^=k[2];d[3]^=k[3];return{tag:q.bitSlice(d,0,f),data:c}}};sjcl.misc.hmac=function(a,b){this.W=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.w=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.w[0].update(c[0]);this.w[1].update(c[1]);this.R=new b(this.w[0])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){if(this.aa)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this.R=new this.W(this.w[0]);this.aa=!1};sjcl.misc.hmac.prototype.update=function(a){this.aa=!0;this.R.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.R.finalize(),a=(new this.W(this.w[1])).update(a).finalize();this.reset();return a};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E4;if(0>d||0>c)throw new sjcl.exception.invalid("invalid params to pbkdf2");"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,k,l=[],n=sjcl.bitArray;for(k=1;32*l.length<(d||1);k++){e=f=a.encrypt(n.concat(b,[k]));for(g=1;g<c;g++)for(f=a.encrypt(f),h=0;h<f.length;h++)e[h]^=f[h];l=l.concat(e)}d&&(l=n.clamp(l,d));return l};
sjcl.prng=function(a){this.c=[new sjcl.hash.sha256];this.m=[0];this.P=0;this.H={};this.N=0;this.U={};this.Z=this.f=this.o=this.ha=0;this.b=[0,0,0,0,0,0,0,0];this.h=[0,0,0,0];this.L=void 0;this.M=a;this.D=!1;this.K={progress:{},seeded:{}};this.u=this.ga=0;this.I=1;this.J=2;this.ca=0x10000;this.T=[0,48,64,96,128,192,0x100,384,512,768,1024];this.da=3E4;this.ba=80};
sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;if(d===this.u)throw new sjcl.exception.notReady("generator isn't seeded");if(d&this.J){d=!(d&this.I);e=[];var f=0,g;this.Z=e[0]=(new Date).valueOf()+this.da;for(g=0;16>g;g++)e.push(0x100000000*Math.random()|0);for(g=0;g<this.c.length&&(e=e.concat(this.c[g].finalize()),f+=this.m[g],this.m[g]=0,d||!(this.P&1<<g));g++);this.P>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.m.push(0));this.f-=f;f>this.o&&(this.o=
f);this.P++;this.b=sjcl.hash.sha256.hash(this.b.concat(e));this.L=new sjcl.cipher.aes(this.b);for(d=0;4>d&&(this.h[d]=this.h[d]+1|0,!this.h[d]);d++);}for(d=0;d<a;d+=4)0===(d+1)%this.ca&&y(this),e=z(this),c.push(e[0],e[1],e[2],e[3]);y(this);return c.slice(0,a)},setDefaultParanoia:function(a,b){if(0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b)throw new sjcl.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.M=a},addEntropy:function(a,
b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this.H[c],h=this.isReady(),k=0;d=this.U[c];void 0===d&&(d=this.U[c]=this.ha++);void 0===g&&(g=this.H[c]=0);this.H[c]=(this.H[c]+1)%this.c.length;switch(typeof a){case "number":void 0===b&&(b=1);this.c[g].update([d,this.N++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else for("[object Array]"!==c&&(k=1),c=0;c<a.length&&!k;c++)"number"!==typeof a[c]&&
(k=1);if(!k){if(void 0===b)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,e=e>>>1;this.c[g].update([d,this.N++,2,b,f,a.length].concat(a))}break;case "string":void 0===b&&(b=a.length);this.c[g].update([d,this.N++,3,b,f,a.length]);this.c[g].update(a);break;default:k=1}if(k)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.m[g]+=b;this.f+=b;h===this.u&&(this.isReady()!==this.u&&A("seeded",Math.max(this.o,this.f)),A("progress",this.getProgress()))},
isReady:function(a){a=this.T[void 0!==a?a:this.M];return this.o&&this.o>=a?this.m[0]>this.ba&&(new Date).valueOf()>this.Z?this.J|this.I:this.I:this.f>=a?this.J|this.u:this.u},getProgress:function(a){a=this.T[a?a:this.M];return this.o>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.D){this.a={loadTimeCollector:B(this,this.ma),mouseCollector:B(this,this.oa),keyboardCollector:B(this,this.la),accelerometerCollector:B(this,this.ea),touchCollector:B(this,this.qa)};if(window.addEventListener)window.addEventListener("load",
this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else if(document.attachEvent)document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector);else throw new sjcl.exception.bug("can't attach event");
this.D=!0}},stopCollectors:function(){this.D&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",
this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.D=!1)},addEventListener:function(a,b){this.K[a][this.ga++]=b},removeEventListener:function(a,b){var c,d,e=this.K[a],f=[];for(d in e)e.hasOwnProperty(d)&&e[d]===b&&f.push(d);for(c=0;c<f.length;c++)d=f[c],delete e[d]},la:function(){C(this,1)},oa:function(a){var b,c;try{b=a.x||a.clientX||a.offsetX||0,c=a.y||a.clientY||a.offsetY||0}catch(d){c=b=0}0!=b&&0!=c&&this.addEntropy([b,c],2,"mouse");C(this,0)},qa:function(a){a=
a.touches[0]||a.changedTouches[0];this.addEntropy([a.pageX||a.clientX,a.pageY||a.clientY],1,"touch");C(this,0)},ma:function(){C(this,2)},ea:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&this.addEntropy(b,1,"accelerometer")}a&&this.addEntropy(a,2,"accelerometer");C(this,0)}};
function A(a,b){var c,d=sjcl.random.K[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}function C(a,b){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?a.addEntropy(window.performance.now(),b,"loadtime"):a.addEntropy((new Date).valueOf(),b,"loadtime")}function y(a){a.b=z(a).concat(z(a));a.L=new sjcl.cipher.aes(a.b)}function z(a){for(var b=0;4>b&&(a.h[b]=a.h[b]+1|0,!a.h[b]);b++);return a.L.encrypt(a.h)}
function B(a,b){return function(){b.apply(a,arguments)}}sjcl.random=new sjcl.prng(6);
a:try{var D,E,F,G;if(G="undefined"!==typeof module&&module.exports){var H;try{H=require("crypto")}catch(a){H=null}G=E=H}if(G&&E.randomBytes)D=E.randomBytes(128),D=new Uint32Array((new Uint8Array(D)).buffer),sjcl.random.addEntropy(D,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){F=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(F);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(F);
else break a;sjcl.random.addEntropy(F,1024,"crypto['getRandomValues']")}}catch(a){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(a))}
sjcl.json={defaults:{v:1,iter:1E4,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},ja:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.g({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.g(f,c);c=f.adata;"string"===typeof f.salt&&(f.salt=sjcl.codec.base64.toBits(f.salt));"string"===typeof f.iv&&(f.iv=sjcl.codec.base64.toBits(f.iv));if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||"string"===typeof a&&100>=f.iter||64!==f.ts&&96!==f.ts&&128!==f.ts||128!==f.ks&&192!==f.ks&&0x100!==f.ks||2>f.iv.length||
4<f.iv.length)throw new sjcl.exception.invalid("json encrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,f),a=g.key.slice(0,f.ks/32),f.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(g=a.kem(),f.kemtag=g.tag,a=g.key.slice(0,f.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(f.adata=c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.g(d,f);d.key=a;f.ct="ccm"===f.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&
b instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.encrypt(g,b,f.iv,c,f.ts):sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return f},encrypt:function(a,b,c,d){var e=sjcl.json,f=e.ja.apply(e,arguments);return e.encode(f)},ia:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.g(e.g(e.g({},e.defaults),b),c,!0);var f,g;f=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||"string"===
typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)throw new sjcl.exception.invalid("json decrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,b),a=g.key.slice(0,b.ks/32),b.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof f&&(f=sjcl.codec.utf8String.toBits(f));g=new sjcl.cipher[b.cipher](a);f="ccm"===
b.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b.ct instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.decrypt(g,b.ct,b.iv,b.tag,f,b.ts):sjcl.mode[b.mode].decrypt(g,b.ct,b.iv,f,b.ts);e.g(d,b);d.key=a;return 1===c.raw?f:sjcl.codec.utf8String.fromBits(f)},decrypt:function(a,b,c,d){var e=sjcl.json;return e.ia(a,e.decode(b),c,d)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c+=d+'"'+
b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
null!=d[3]?b[d[2]]=parseInt(d[3],10):null!=d[4]?b[d[2]]=d[2].match(/^(ct|adata|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]):null!=d[5]&&(b[d[2]]="true"===d[5])}return b},g:function(a,b,c){void 0===a&&(a={});if(void 0===b)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&void 0!==a[d]&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},sa:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},ra:function(a,
b){var c={},d;for(d=0;d<b.length;d++)void 0!==a[b[d]]&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.pa={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.pa,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=void 0===b.salt?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};
"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"===typeof define&&define([],function(){return sjcl});

/* MIT LICENSE
Copyright <2021> <PwC>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

//code converted to typescript
//js code taken from https://stackoverflow.com/questions/14733374/how-to-generate-an-md5-file-hash-in-javascript

var MD5Row = function(row, startCol = 1){
    var rowText = "";
    for(var j=startCol; j<row.length; j++)
        {
            rowText = `${rowText}\t${row[j]}`;
        }
      return MD5(rowText);
  }
  
  var MD5 = function(d) {
      var r = M(V(Y(X(d), 8 * d.length)));
      return r.toLowerCase()
  };
  
  function M(d) {
      for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
      return f
  }
  
  function X(d) {
      for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
      for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
      return _
  }
  
  function V(d) {
      for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
      return _
  }
  
  function Y(d, _) {
      d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
      for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
          var h = m,
              t = f,
              g = r,
              e = i;
          f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
      }
      return Array(m, f, r, i)
  }
  
  function md5_cmn(d, _, m, f, r, i) {
      return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
  }
  
  function md5_ff(d, _, m, f, r, i, n) {
      return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
  }
  
  function md5_gg(d, _, m, f, r, i, n) {
      return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
  }
  
  function md5_hh(d, _, m, f, r, i, n) {
      return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
  }
  
  function md5_ii(d, _, m, f, r, i, n) {
      return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
  }
  
  function safe_add(d, _) {
      var m = (65535 & d) + (65535 & _);
      return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
  }
  
  function bit_rol(d, _) {
      return d << _ | d >>> 32 - _
  }
  
const supported = (() => {
    // When running in an SSR environment return `false`.
    if (typeof self === 'undefined') {
      return false;
    }
    // ToDo: Remove this check once Permissions Policy integration
    // has happened, tracked in
    // https://github.com/WICG/file-system-access/issues/245.
    if ('top' in self && self !== top) {
      try {
        // This will succeed on same-origin iframes,
        // but fail on cross-origin iframes.
        top.location + '';
      } catch {
        return false;
      }
    } else if ('showOpenFilePicker' in self) {
      return 'showOpenFilePicker';
    }
    return false;
  })();

function encryptString(data, userid, password, date = null) {
    if (!date)
        date = new Date();
    eo = {};    //encryptObject
    eo.DateCreated = date;
    eo.deviceId = deviceId;
    eo.DateExpiry = new Date();
    eo.Version = versionNumber;
    eo.data1 = data;

    os = {};
    os.deviceId = deviceId;
    os.data = "";
    os.data2 = "";

    showSpinner(true, "Encrypting...");
    os.data = sjcl.encrypt(password, JSON.stringify(eo));
    showSpinner(false);
    let ix = os.data.indexOf(`"ct":"`);
    if (ix > 0) {
        //todo: ensure makeid not generating "datax" strings
        let part1 = os.data.substr(0, ix + 6);
        let part2 = os.data.substr(ix + 6);
        os.data = btoa(part1);
        os.data2 = part2;
    }
    return JSON.stringify(os);

}


function decryptString(data, password) {

    let decoded = atob(data);
    let unencr = sjcl.decrypt(password, decoded);
    return unencr;

}


function processEncrypt(password, hint, dateCreated, expirationDate, lockDate) {
    //showSpinner();
    encryptionDone = false;
    decryptionDone = false;
    resultDTO = {};
    resultDTO.result = 0;
    resultDTO.message = "";
    let fName = "";
    let messages = ["Process completed ok", "No data to process", "Empty or invalid password.", "Invalid file type. Cannot process file"];
    let lk = "";
    let instructions = "";
    let showHint = "";
    let fMode = "";
    let instructionsFile = "";

    if (!usingFile)
        instructions = getInstructions();
    else 
    {
        instructionsFile = getFileInstructions();
    }

    if (config.ShowLink && !usingFile)
        lk = `Link: ${landingLink}\n`;

    if (hint.length > 0)
        showHint = `Hint:${hint}\n`;

    if (data.length == 0)
        resultDTO.result = -1;
    else if (password.length < config.MinPwdLen)
        resultDTO.result = -2;

    let encryptionLength = data.length;


    if (resultDTO.result == 0) {
        eo = {};    //encryptObject
        eo.DateCreated = dateCreated;
        eo.DateExpiry = expirationDate;
        eo.DateLock = lockDate;
        eo.Version = versionNumber;
        eo.data1 = "";
        eo.FileType = "text";
        eo.Users = "";
        eo.SecondPassword = "";

        os = {};
        os.Link = lk;
        if ( config.SendInstructions)
        {
            os.SoftwareID = `${softwareID} ${versionNumber}`;
            os.Instructions = instructions;
        }

        if ( hint.length > 0 )
            os.Hint = hint;

        if ( usingFile )
            os.FileName = fileName;

        os.FileMode = fileMode;
        os.FileType = "text";

        os.data = "";
        os.data2 = "";
        os.data3 = "";

        if (usingFile) {
            if (selFile) 
                os.FileType = selFile.type;

            fMode = `FileMode:${fileMode}\n`;

            encryptionLength = data.length * (encryptionLevel / 100);
            eo.data1 = data.substr(0, encryptionLength);
            fName = fileName + ".txt";
        }
        else
        {
            eo.data1 = data;
            setField("loadedText",data);
        }

        os.data = JSON.stringify(eo);
        os.data = sjcl.encrypt(password, JSON.stringify(eo));
        setField("userPassword", "");
        let ix = os.data.indexOf(`"ct":"`);
        if (ix > 0) {
            //todo: ensure makeid not generating "datax" strings
            let part1 = os.data.substr(0, ix + 6);
            let part2 = os.data.substr(ix + 6);
            os.data = btoa(part1);
            os.data2 = part2;
        }

        if (encryptionLength < data.length)
            os.data3 = data.substr(encryptionLength);


        data = `SoftwareID:Cryptico ${versionNumber}
${showHint}${lk}${instructions}${fMode}
data:${os.data}data2:${os.data2}data3:${os.data3}`;

        if (usingFile) {
            outFileName = `${fileName}.crypti.txt`;
            downloadDataFile(JSON.stringify(os), outFileName);
            //writeTextFile(null,JSON.stringify(os), `${fileName}.json`)
            resultDTO.message = "File encrypted and downloaded locally.";

            copyToClipboardNew(`${instructionsFile}\n${lk}`,false);

        }
        else
            setField("loadedText",`${os.data}${os.data2}`);
        encryptionDone = true;
        return resultDTO;
    }
}


function doEncryptNew() {
    event.preventDefault();

    if ( data.length == 0 && !usingFile)
        data = getField("inputText");

    if (data.length > 0 && validatePassword()) {
        showSpinner(true,"Encrypting...");
        let dateCreated = new Date();
        let expirationDate = dateCreated;
        let lockDate = dateCreated;

        let hint = getField("pwdHint");

        if (validatePassword()) {
            let password = getPassword();
            let resultDTO = processEncrypt(password, hint, dateCreated, expirationDate, lockDate);
            showSpinner(false);
            if (resultDTO.result >= 0) {
                gotoPage(1);
                setField("userPassword", "");
                hideControl("divEncrypt");
                hideControl("divDecrypt");
                hideControl("divInputText");
                hideControl("divErase");
                //showBlock("divHide");
                hideControl("divFileInfo");
                showBlock("divShare");
                hideControl("divNext");
                hideControl("divViewPassword");
                KeyboardEvent.close();
        
                sumTotals("E",data.length);
                if (usingFile)
                {
                    hideControl("divInputPDF");
                    showMessage(`${encryptIcon} OK. Share from Downloads Folder: <b>${outFileName}</b>. </br>Instructions copied to clipboard.`, statusSuccess);
                    hideControl("divNext");
                }
                else {
                    copyToClipboardNew(data, false);
                    hideControl("PAGE1");
                    hideControl("PAGE2");
                    showMedia("divText");
                    showBlock("divPaste");
                    showBlock("divOpenFile");
                    //showBlock("divHide");
                    showMessage(`${encryptIcon} OK. Copied to clipboard. ${shareIcon} to Share.`, statusSuccess);
                }
                hideControl("divNext");
            }
            else {
                showSpinner(false);
                showError("Error encrypting data.", statusError);
            }
        }
    }
    
}









function processDecrypt(password) {
    encryptionDone = false;
    decryptionDone = false;
    resultDTO = {};
    resultDTO.result = 0;
    resultDTO.message = "";
    let fName = "";
    let messages = ["Process completed ok", "No data to process", "Empty or invalid password.", "Invalid file type. Cannot process file"];
    let isJson = fileName.toLowerCase().includes(".crypti") &&
        fileName.toLowerCase().endsWith(".txt");

    if (data.length == 0)
        resultDTO.result = -1;
    else if (password.length < config.MinPwdLen)
        resultDTO.result = -2;

    if (resultDTO.result == 0) {
        let os = {}
        os.data3 = "";
        if (isJson)
        {
            os = JSON.parse(data);
            fileName = os.FileName;
        }
        else {
            os.data = extract(data, "data:", "data2:");
            os.data2 = extract(data, "data2:", "data3:");
            //todo: enable when supporting encryption coverage
            os.data3 = "";  // extract(data, "data3:");
            if (data.includes("FileMode:Binary"))
                os.FileMode = "Binary";
            else
                os.FileMode = "Text";
        }

        //os.data2 = os.data2.substr(10, os.data.length - 10); 
        //os.data = os.data.substr(5, os.data.length - 5); 
        os.data = atob(os.data)
        os.data = os.data + os.data2;
        try {
            os.data = sjcl.decrypt(password, os.data);
            setField("userPassword","");
            eo = JSON.parse(os.data);
            data = eo.data1 + os.data3;
            selFile.type = os.FileType;
            selFile.name = fileName;
            decryptionDone = true;
            resultDTO.message = "Decryption finished succesfully.";
        }
        catch (ex) {
            let err = ex.message;
            showSpinner(false);
            showError("Invalid data or password." + ex.message);
            resultDTO.result = -1;
            data = "";
        }
    }
    return resultDTO;
}


function doDecryptNew() {
        event.preventDefault();

    let result = validatePassword();
    if ( !result )
    {
        showError(lastError);
        return;
    }
    if (data.length > 0 && result  ) {
        showSpinner(true,"Decrypting...");
        let password = getPassword();
        let resultDTO = processDecrypt(password);
        showSpinner(false);
        if (resultDTO.result >= 0 )
        {
            gotoPage(1);
            setField("userPassword","");
            hideControl("divInputText");
            hideControl("divEncrypt");
            hideControl("divDecrypt");
            showBlock("divDownload");
            hideControl("divShare");
            hideControl("divNext");
            hideControl("divErase");
            //hideControl("divView");
            hideControl("divViewPassword");
            KeyboardEvent.close();
    

            //todo update selFile with decrypted file info
            selFile.size = data.length;
            showData();
            sumTotals("D",data.length);
            if ( !usingFile )
            {
                if ( config.CopyDecrypted)
                {
                    copyToClipboardNew(data);
                    hideControl("divCopy");
                    showMessage(`${decryptIcon} OK. Copied to clipboard. ${saveIcon}to Save.`,statusSuccess);

                }
                else
                {
                    showBlock("divCopy");
                    showMessage(`${decryptIcon} OK. ${copyIcon}to Copy. ${saveIcon}to Save.`,statusSuccess);
                }
                setField("loadedText",data);
                showMedia("divText");
                hideControl("divFileInfo");
            }
            else 
            {
                //showMedia();
                showMessage(`${decryptIcon}OK. ${saveIcon}To Save.`,statusSuccess);
                //showBlock("divHide");
                showBlock("divDownload");
                //hideControl("divView");
                hideControl("divInputPDF");
                showBlock("divFileInfo");
                hideControl("divNext");
            }
            hideControl("PAGE1");
            hideControl("PAGE2");
        }
        else
        {
            //hideControl("divView");
            //hideControl("divHide");
             showError(lastError);
        }
    }
    else showError("Invalid data.");
}







var fileInfo = {};

async function openTextFileAPI() {
  try {
    let fileHandle = await window.showOpenFilePicker();
    if (fileHandle.length > 0) {
      const file = await fileHandle[0].getFile();
      usingFile = true;
      fileName = file.name;
      console.log("FileName", fileName);
      showSpinner();
      data = await file.text();
      fileMMode = "Text";
    }
    else console.log("no file was selected");
  }
  catch (ex) {
    showError("Reading file:" + ex);
    console.log(error, ex);
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
      console.log("FileName", fileName);

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
    else console.log("no file was selected");
  }
  catch (ex) {
    showError("openTextFileAPI2() " + ex);
    console.log(error, ex);
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
        console.log("openTextFileAPI2() data:", data);
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
      console.log("FileName", fileName);

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
    console.log(error, ex);
  }
}


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
        if (sharingFile) {

          if(navigator.canShare ) //&& navigator.canShare({ files: e.target })) 
          {
            try
            {
            var filesArray = [file];
            navigator.share(
              {
                text: 'Sharing file',
                files: filesArray,
                title: `${softwareID} ${versionNumber}`,
                url: landingLink 
              });
            }
            catch(ex)
            {
              showError(`Error sharing file.</br>${ex.message}`);
            }
          }
        

          sharingFile = false;
        }
        else {
          data = e.target.result;
          showSpinner(false);
          usingFile = true;
          if ( config.showMediaOnOpen)
            showData();
          if ( Keyboard.properties.isOpen )
            Keyboard.close();

        }

        let fSize = getSizeText(selFile.readSize);

      };
    })(f);

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

var totals = {};

function createConfig() {
    //userEmail = "";
    config = {};
    config.FirstUse = new Date();
    config.Version = versionNumber;
    config.LastReportDate = new Date();
    config.showMediaOnOpen = true;
    config.IP = "";
    config.mobile = false;
    config.UserEmail = userEmail;
    config.MinPwdLen = 4;
    config.GenPwdLen = 64;
    config.SendInstructions = true;
    config.ShowLink = true;
    config.ServerId = 0;
    config.UserType = "F";
    config.FreeDays = 30;
    config.ShowHelp = true;
    config.CopyDecrypted = true;
    config.UseGreenKeyboard = mobile;
}


function createRecordFirstTime() {
    let rec  = {};
    rec.width = window.innerWidth;
    rec.StartDate = getTimeStamp(new Date());
    rec.EndDate = rec.StartDate;
    rec.userAgent = navigator.userAgent;
    rec.protocol = location.protocol;
    rec.height = window.innerHeight;
    rec.UserEmail = userEmail;
    if ( mobile )
        rec.mobile = 1;
    else
        rec.mobile = 0;

    rec.deviceId = deviceId;
    rec.userEmail = config.UserEmail;
    try
    {
        rec.RAM = navigator.deviceMemory.toString();
    }
    catch(ex)
    {
        rec.RAM = "Error";
    }
    return rec;
}


function createTotals() {
    rec = {};
    totals.StartDate = getTimeStamp(new Date());
    totals.EndDate = totals.StartDate;
    totals.te = 0;
    totals.td = 0;
    totals.teb = 0;
    totals.tdb = 0;
    totals.userAgent = navigator.userAgent;
    totals.protocol = location.protocol;
    totals.width = window.innerWidth;
    totals.height = window.innerHeight;
    if ( mobile )
        totals.mobile = 1;
    else
        totals.mobile = 0;
    totals.deviceId = deviceId;
    totals.userEmail = config.UserEmail;
    try
    {
        totals.RAM = navigator.deviceMemory.toString();
    }
    catch(ex)
    {
        totals.RAM = "Error";
    }
}

function sumTotals(op, size) {
    if (op == "E") {
        totals.te++;
        totals.teb += size;
        saveTotals();
    }
    else if (op == "D") {
        totals.td++;
        totals.tdb += size;
        saveTotals();
    }
}

function updateTotals() {
    let sd = new Date(totals.StartDate);
    let ed = new Date(totals.EndDate);
    let ms = ed.getTime() - sd.getTime();

    // To calculate the no. of days between two dates
    let secs = ms / 1000;
    let hours = ms / (1000 * 3600);
    let days = ms / (1000 * 3600 * 24);
    console.log("diff:", ms);
    if (isGoogleVer && hours > checkHours && location.protocol == "https:") {
        console.log("calling updateServerRecord()");
        updateServerRecord();
    }

}

function loadTotals() {
    console.log("loadTotals() reading totals")
    data = localStorage.getItem("totals");
    if (!data) {
        //recreate totals
        console.log("recreating totals");
        createTotals();
        totals.EndDate = getTimeStamp(new Date());
        data = JSON.stringify(totals);
    }
    if (data)
        try {
            totals = JSON.parse(data);
            updateTotals();
        }
        catch (ex) {
        }
    else
        createTotals();

}

function initConfig() {
    let obj = null;
    data = localStorage.getItem("data");
    try {
        if (data)
            obj = JSON.parse(data);
    }
    catch (ex) {
        obj = null;
    }
    if (!obj) {
        console.log("initConfig() creating configuration.")
        createConfig();
        createTotals();
        saveTotals();
        saveConfig();
        downloadDataFile(data, `${config.deviceId}.cry`);
        if (location.protocol == "https:") {
            registerFirstTime();
        }
    }
    else {
        try {
            //todo: use string obfuscations, base64 of first part of json before the encrypted data
            data = sjcl.decrypt(userEmail, data);
            config = JSON.parse(data);
            config.mobile = mobile;
            saveConfig();
            console.log("reading configuration", config)

            setField("txMinPwdLen", config.MinPwdLen.toString());
            setField("txGenPwdLen", config.GenPwdLen.toString());
            let ctl = document.getElementById("chbSendInstructions");
            ctl.checked = config.SendInstructions;

            ctl = document.getElementById("chbSendLink");
            ctl.checked = config.ShowLink;

            ctl = document.getElementById("chbShowMedia");
            ctl.checked = config.showMediaOnOpen;

            ctl = document.getElementById("chbHelp");
            ctl.checked = config.ShowHelp;

            ctl = document.getElementById("chbZoom");
            ctl.checked = config.FixZoomIssue;

            setField("txDarkMode", darkMode);
            setField("txFileAPISupported", supported.toString());
            setField("txCanCopy", canCopy.toString());
            setField("txUserAgent", navigator.userAgent);
            setField("txProtocol", location.protocol);
            setField("txWidth", window.innerWidth);
            setField("txMobile", mobile);
            setField("txRAM", navigator.deviceMemory.toString());
            setField("txUserId", config.UserEmail);
            loadTotals();
        }
        catch (ex) {
            //todo: detect if user deleted manually localstorage to force reregister
            showError("Error reading configuration. " + ex.message);
            createConfig();
            saveConfig();
            createTotals();
            saveTotals();
            //downloadDataFile(result, `Config.cry`);
            if (location.protocol == "https:")
                registerFirstTime();
        }
    }
}


function getSavedUserEmail() {
    userEmail = localStorage.getItem("user");
    if (!userEmail) 
        userEmail = "";

    deviceId = localStorage.getItem("device");
    if (!deviceId)
        deviceId = makeid(64);
}


function saveConfig() {
    if (validateEmail(userEmail)) {
        let result = sjcl.encrypt(userEmail, JSON.stringify(config));
        localStorage.setItem("data", result);
        localStorage.setItem("user", userEmail);
        localStorage.setItem("device", deviceId);
        setField("txUserId", userEmail);
    }
    else
        localStorage.removeItem("data");

}

function saveTotals() {
    totals.EndDate = getTimeStamp(new Date());
    localStorage.setItem("totals", JSON.stringify(totals));
    updateTotals();
}

function getSettingsSave() {
    let result = false;
    if (validateMinPassword() && validateMaxPassword()) {
        let ctl = document.getElementById("chbSendInstructions");
        let val = ctl.checked;
        configChanged = configChanged || config.SendInstructions != val;
        config.SendInstructions = ctl.checked;

        ctl = document.getElementById("chbSendLink");
        val = ctl.checked;
        configChanged = config.ShowLink != val;
        config.ShowLink = val;

        ctl = document.getElementById("chbShowMedia");
        val = ctl.checked;
        configChanged = configChanged || config.showMediaOnOpen != val;
        config.showMediaOnOpen = val;

        ctl = document.getElementById("chbHelp");
        val = ctl.checked;
        configChanged = configChanged || config.ShowHelp != val;
        config.ShowHelp = val;

        ctl = document.getElementById("chbCopy");
        val = ctl.checked;
        configChanged = configChanged || config.CopyDecrypted != val;
        config.CopyDecrypted = val;

        ctl = document.getElementById("chbZoom");
        val = ctl.checked;
        configChanged = configChanged || config.UseGreenKeyboard != val;
        config.UseGreenKeyboard = val;

        if (config.FixZoomIssue) {
            document.body.classList.remove("text-rsponsive");
        }


        if (configChanged) {
            saveConfig();
            showMessage("Configuration saved succesfully.");
            configChanged = false;
        }
        result = true;
    }
    return result;
}


function validateMinPassword(value) {
    let result = false;
    if (!value)
        value = getField("txMinPwdLen");

    pwdLen = Number(value);
    if (pwdLen >= 4) {
        configChanged = configChanged || config.MinPwdLen != pwdLen;
        config.MinPwdLen = pwdLen;
        result = true;
    }
    else
        showError("Minimum password lenght can not be less than 4 characters.");
    return result;
}


function validateMaxPassword(value) {
    let result = false;
    if (!value)
        value = getField("txGenPwdLen");

    let pwdLen = Number(value);
    if (pwdLen >= config.MinPwdLen && pwdLen <= 255) {
        configChanged = configChanged || config.GenPwdLen != pwdLen;;
        config.GenPwdLen = pwdLen;
        result = true;
    }
    else
        showError(`Max generated password length must be between ${config.MinPwdLen} and 255 characters.`);;

    return result;
}



function createIPRead() {
    var script = document.createElement("script");
    script.type = "text / javascript";
    script.src = "https://api.ipify.org?format=jsonp&callback=DisplayIP";
    document.getElementsByTagName("head")[0].appendChild(script);
}


function getIP(response) {
    document.getElementById("ipaddress").innerHTML = "Your IP Address is " + response.ip;
}

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


function showFileInfo() {
	let msg = "";
	let txtEncrypted = "";

	hideControl("divMedia");
	let isEncrypted = "";
	if (encryptedFile) {
		if (data.includes("Hint:")) {
			let txHint = extract(data, "Hint:", "\n");
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
		let sourceText = "Manual Text.";
		if (dataFromClipboard)
			sourceText = "Clipbaord Text."

		if (isEncrypted.length > 0)
			fInfoRow = `${sourceText} (${data.length} bytes), <i class="red">${isEncrypted}</i>`;
		else
			fInfoRow = `${sourceText} (${data.length}bytes.)`;
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
	encryptedFile = false;
	if (data.includes(";base64,")) {
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
	else
		encryptedFile = isEncryptedData();
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

function showData() {
	encryptedFile = false;

	hideControl("divImage");
	hideControl("divVideo");
	hideControl("divAudio");
	hideControl("divPDF");
	hideControl("divText");
	hideControl("divInputPDF");
	hideControl("divInfo");
	//hideControl("divHide");
	hideControl("divSettings");
	//hideControl("divView");

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
	mediaOpen = true;
	showBlock("divMedia");
	showBlock("divHide");
	toggleCanProcess(canProcess, fileSizeText);
	if (encryptionDone || decryptionDone)
	{
		hideControl("divNext");
		hideControl("divViewPassword");
	}
	else
	{
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
	if ( ix < 0 )
		ix = data.indexOf(`"data":"`);
	if (ix > 0)
		setField("loadedText", data.substr(ix));
	else
		setField("loadedText", data);

	if (data.includes("Hint:")) {
		let txHint = extract(data, "Hint:", "\n");
		setField("pwdHint", txHint);
	}
	showPasswordMessage();
	showBlock("divText");
	showBlock("divMedia");
	//showBlock("divHide");
	mediaOpen = true;
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
		div.innerHTML = `<div class="alert alert-success">
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
		div.innerHTML = `<div class="alert alert-info">
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
	if (msg.length > 0)
		div.innerHTML = `<div class="icon-size alert alert-info">
		<strong>${title}</strong> ${msg}
	</div>
	`;
	else
		div.innerHTML = "";


}


function showError(msg) {
	lastError = msg;
	if (msg.length > 0)
		console.error("ERROR:", msg);

	let div = document.getElementById("result");
	//div.innerHTML = `<h4 class="text-danger text-center footer-size">${msg}</h4`;
	div.innerHTML = `<div class="alert alert-danger">
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
	event.preventDefault();
	clear();
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
	event.preventDefault();

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
	encryptedFile = data.includes("data:") && data.includes(`data2:`) && data.includes(`data3:`);
	return encryptedFile;
}


function getIsDesktop() {
	isGoogleVer = window.location.href.includes("script.google.com") && location.protocol == "https:"
	return isGoogleVer;
}

function confirmDownload() {
	event.preventDefault();

	hideControl("divDownload");
	showBlock("divDownload2");
	showError("Confirm Download/Save!. File will be unencrypted. Dispose properly.");
}

function doDownload() {
	event.preventDefault();

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
	writeInnerHTML("divTitle", `<label>Crypt.io ${environment} Version: ${versionNumber}</label>`);
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
}

//const { config } = require("process");

function getUserEmail() {
    if ( !isGoogleVer )
    {
        loadTotals();
        return;
    }

    try {
        google.script.run.withFailureHandler(failureHandler)
            .withSuccessHandler(processResponse)
            .getUser();
    }
    catch (ex) {
        showError(`Cannot access Server from. <b>${location.protocol}//</b> protocol.`);
        loadTotals();
    }
}

function failureHandler(error) {
    showSpinner(false);
    showError("Error in Server " + error);
    showMessageAt("divTitle","Error in Server " + error);
}

function processResponse(data) {
    userEmail = data;
    console.log("processResponse()", data);
    //setField("txUserId", userEmail);
    showMessageAt("divTitle", `Welcome ${userEmail}`);
    initConfig();

}

function failureRegister(error) {
    console.log("failure calling server",error);
    showSpinner(false);
    console.log("registerFirstTime() failure");
    showError("Server Error:" + error);
}

function successRegister(data) {
    console.log("successRegister()",data);
    showMessageAt(`${userEmail} Registered Succesfully.`)
    config.ServerId = Number ( data.serverId);
    config.FreeDays = data.freeDays;
    saveConfig();
}


function registerFirstTime(){
    console.log("calling registerFirstTime()");
    let msg = `isGoogleVer:${isGoogleVer} ServerId: ${config.ServerId}`;
    console.log(msg);
    if ( isGoogleVer && (!config.ServerId || config.ServerId == 0 ))
    {
        let rec = createRecordFirstTime();
        config.ServerId = 0;
        console.log("registerFirstTime()",rec);
        google.script.run.withFailureHandler(failureRegister)
        .withSuccessHandler(successRegister)
        .recordFirstTime(rec);
    }
}

async function registerFirstTime2(){
    let deviceInfo = {deviceId:config.deviceId,mobile:config.mobile,startDate:config.startDate} ;
    let result = await fetchServer(registerUrl,deviceInfo,"POST");
}

function successUpdate(data) {
    if (data)
    {
        createTotals();
        saveTotals();
        //showMessage("Totals updated to server.");
    }
}

function failureUpdate(error) {
    showSpinner(false);
    console.log("updateServerRecord() failure");
    showError("Server Error:" + error);
}



function updateServerRecord(){
        
    totals.deviceId = config.deviceId;
    totals.ServerId = config.ServerId;

    if ( !isGoogleVer )
        return;

    google.script.run.withFailureHandler(failureUpdate)
    .withSuccessHandler(successUpdate)
    .updateServerRecord(totals);

}


async function fetchServer(url,obj,method)
{
      let response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
      });
      
      let result = await response.json();
      return result;

}

function createMenu(step="start") {

    console.log("createMenu()");
  let menuMobile = "";

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
      <i class="fas fa-info-circle" title="System Info" id="info"
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
      <i class="fas fa-folder-open" title="Open File" id="openFile"  style="cursor: pointer;"
        onclick="openImageFile()"></i>
        </button>
    </div>


    <div id="divEncrypt" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-user-secret" title="Encrypt" id="decrypt"  style="cursor: pointer;"
        onclick="doEncryptNew()"></i>
        </button>
    </div>


    <div id="divDecrypt" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
          <i class="fa fa-unlock" title="Encrypt" id="decrypt"  style="cursor: pointer;"
        onclick="doDecryptNew()"></i>
        </button>
    </div>

    <div id="divShare" style="display: none;">
    <button class="btn btn-secondary separation-btn-right">
      <i class="fas fa-share" id="shareIt"  style="cursor: pointer;" onclick="doShare()"
        title="Share Results"></i>
        </button>
    </div>





    <div id="divViewPassword" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right red">
      <i class="far fa-eye" title="View Password" id="viewPassword"  style="cursor: pointer";
      ></i>
        </button>
    </div>


    <div id="divView" class="text-center" style="display:none">
    <button class="btn btn-secondary separation-btn-right">
      <i class="far fa-eye" title="View Media" id="viewMedia"  style="cursor: pointer;"
        onclick="toggleMedia()"></i>
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
const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    shiftKeys: {
        original: "1234567890,.?'[]",
        shifted: "!~#$%^&*();:/\"{}"
    },


    foreign: {
        tildeOrig: "naoNAO",
        tildeShifted: [327, 227, 245, 
            209, 195, 336],
        aCute: "aeiouynAEIOUYN",
        aCuteShifted: [225, 233, 237, 243, 250, 253, 241,
            193, 201, 205, 211, 218, 221,209]
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false,
        tilde: false,
        acute: false,
        currentKeyElement: null,
        isOpen: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "'","q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m",",", ".", "?",
            "@","[","]","space", "acute" 
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };


        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;


                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "tilde":
                    //setup toggeable button
                    keyElement.classList.add("keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("circle");

                    keyElement.addEventListener("click", () => {
                        //this._toggleCapsLock();
                        this.properties.tilde = !this.properties.tilde;
                        keyElement.classList.toggle("keyboard__key--active", this.properties.tilde);
                    });
                    break;

                case "acute":
                    //setup toggeable button
                    keyElement.classList.add("keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("circle");

                    keyElement.addEventListener("click", () => {
                        //this._toggleCapsLock();
                        this.properties.acute = !this.properties.acute;
                        keyElement.classList.toggle("keyboard__key--active", this.properties.acute);
                    });
                    break;


                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        if (currentField == "userPassword")
                        {
                            nextPage();
                            setCurrentField("pwdHint");
                        }
                        else {
                            this.properties.value += "\n";
                            this._triggerEvent("oninput");
                        }
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {

        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();

                if (this.properties.capsLock) {
                    if (this.shiftKeys.original.includes(key.textContent)) {
                        let ix = this.shiftKeys.original.indexOf(key.textContent);
                        key.textContent = this.shiftKeys.shifted.substr(ix, 1);
                    }
                }
                else {
                    if (this.shiftKeys.shifted.includes(key.textContent)) {
                        let ix = this.shiftKeys.shifted.indexOf(key.textContent);
                        key.textContent = this.shiftKeys.original.substr(ix, 1);
                    }

                }

            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
        this.properties.isOpen = true;
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
        this.properties.isOpen = false;
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
var currentField = "";

function openKeyboard(force = false) {
    if (force || mobile || config.UseGreenKeyboard) {
        if (currentField.length > 0) {
            let x = document.getElementById(currentField);
            Keyboard.open(x.value, keyed);
        }
    }
}

function keyed(k) {
    if (Keyboard.properties.isOpen && initialIcons) {
        showMessage("");
        hideControl("divInfo");
        hideControl("divSettings");
        hideControl("divOpenFile");
        hideControl("divPaste");
        hideTitle();
        initialIcons = false;
    }
    showMessage("");
    let x = document.getElementById(currentField);
    let last = k.substr(k.length - 1);

    if (Keyboard.properties.capsLock) {
        if (Keyboard.shiftKeys.original.includes(last)) {
            let ix = Keyboard.shiftKeys.original.indexOf(last);
            k = k.substr(0, k.length - 1) + Keyboard.shiftKeys.shifted.substr(ix, 1);
        }
    }
    // if (Keyboard.properties.tilde) {
    //     if (Keyboard.foreign.tildeOrig.includes(last)) {
    //         let ix = Keyboard.foreign.tildeOrig.indexOf(last);
    //         k = k.substr(0, k.length - 1) + String.fromCharCode(Keyboard.foreign.tildeShifted[ix]);
    //     }
    // }
    if (Keyboard.properties.acute) {
        if (Keyboard.foreign.aCute.includes(last)) {
            let ix = Keyboard.foreign.aCute.indexOf(last);
            k = k.substr(0, k.length - 1) + String.fromCharCode(Keyboard.foreign.aCuteShifted[ix]);
        }
    }

    Keyboard.properties.value = k;
    x.value = k;

    if (currentField == "userPassword") {
        if (k.length > 0)
            showBlock("divViewPassword");
        else
            hideControl("divViewPassword");

        if (k.length >= config.MinPwdLen)
            showBlock("divEncrypt");
        if (openEncryptedFile && k.length >= config.MinPwdLen)
            showBlock("divDecrypt");
    }

}


function getAsciis() {

    let text = "";
    let i = 1
    while (i < 1023) {
        text = `${text}\n${i}\t${String.fromCharCode(i)}`;
        i++;
    }
    setField("inputText", text);
    copyToClipboardNew(text);
    return text;
}

function setCurrentField(cField) {
    if (currentField.length > 0) {
        let x = document.getElementById(currentField);
        x.style.backgroundColor = "black";
        x.style.color = "white";
    }
    currentField = cField;
    let x = document.getElementById(cField);
    x.style.backgroundColor = "white";
    x.style.color = "black";
    Keyboard.properties.value = x.value;

    if ( (mobile || config.UseGreenKeyboard) && !Keyboard.properties.isOpen && !mediaOpen )
        openKeyboard();

    let dbgMsg = `setCurrentField(${cField}) [${Keyboard.properties.value}]`;
    console.log(dbgMsg);
}

function disableInputs(val = true) {
    disableCtl("inputText", val);
    disableCtl("userPassword", val);
    disableCtl("pwdHint", val);
    disableCtl("txUserId", val);
    disableCtl("txDarkMode", val);
    disableCtl("txFileAPISupported", val);
    disableCtl("txCanCopy", val);
    disableCtl("txProtocol", val);
    disableCtl("txWidth", val);
    disableCtl("txRAM", val);
    disableCtl("txMobile", val);
    disableCtl("txUserAgent", val);

    // txMinPwdLen
    // txGenPwdLen
    // chbShowMedia
    // chbSendInstructions
    // chbSendLink
    // chbCopy
    // chbZoom

}



function closeAllAux() {
    if (currentSection.length > 0)
        hideControl(currentSection);

    currentSection = "";

    settingsOpen = false;
    logOpen = false;
    sysInfoOpen = false;
    // hideControl("divSysInfo");
    // hideControl("divSysSettings");
}


function setSourceData(value = "") {
    data = "";
    let result = false;
    if (!value || value.length == 0) {
        value = getField("inputText");
    }
    if (value.length > 0) {
        data = value;
        result = true;
    }
    else {
        showError("Enter data to encrypt.");
        if (page == 1)
            nextPage();
    }
    return result;
}

function validateHint() {
    if (fieldTouched)
        nextPage();
}


function enableOptions() {
    hideControl("divInfo");

    let pwd = getField("userPassword");
    if (canProcess && pwd.length >= config.MinPwdLen && data.length > 0 && !(encryptionDone || decryptionDone)) {
        showBlock("divEncrypt");
        showBlock("divDecrypt");
    }
    else {
        hideControl("divEncrypt");
        hideControl("divDecrypt");
    }

    if (encryptionDone || decryptionDone) {
        hideControl("divNext");
        hideControl("PAGE1");
        hideControl("PAGE2");
        if (usingFile)
            hideControl("divShare");
        else
            showBlock("divShare");

        if (decryptionDone) {
            if (usingFile) {
                showBlock("divDownload");
                hideControl("divShare");
            }
        }
    }
    else if (!encryptionDone && !decryptionDone) {
        if (canProcess)
            showBlock("divNext");
        hideControl("divDownload");
        hideControl("divShare");
        hideControl("divCopy");
    }
    if (manualText) {
        showBlock("divPaste");
        hideControl("divMedia");
    }
    if (!canProcess)
        hideControl("divNext");

}



function gotoPage(pageId) {
    currentSection = `PAGE${page}`;
    hideControl(currentSection);
    page = pageId;
    if (page > totalPages)
        page = 1;
    currentSection = `PAGE${page}`;
    showBlock(`PAGE${page}`)

    togglePage();
}



function nextPage() {
    event.preventDefault();

    handleSysIcons();
    currentSection = `PAGE${page}`;
    hideControl(currentSection);
    page++;
    if (page > totalPages)
    {
        if ( !usingFile)
            page = 1;
        else page = 2;
    }
    currentSection = `PAGE${page}`;
    showBlock(`PAGE${page}`)
    togglePage();
}



function showSection(sectionName) {
    addTrace(`showSection(${sectionName})`)
    if (currentSection.length > 0)
        hideControl(currentSection);
    currentSection = sectionName;
    showBlock(sectionName);
}


async function doCopy() {
    event.preventDefault();

    copyToClipboardNew(data, true);

}




function pasteFromClipboard(fieldId) {
    event.preventDefault();

    pasteClipboard();
    // let text = getField("inputText");
    // if ( text.length>0)
    //     showMessage(`Text pasted from clipboard (${text.length}) bytes.`);
    // console.log("index.pasteClipboard(): CLipboard text:", text);

}


function finishInputText() {
    showMessage("");
    if (data.length == 0)
        data = getField("inputText");
    showData();

}


function selectPaste() {
    closeAllAux();
    showMessage("");
    hideControl("divInfo");
    hideControl("divSetttings");
    hideControl("divOpenFile");
    hideControl("divView");
	hideControl("divHide");

    Keyboard.close();
    initialIcons = false;
    handleSysIcons();
    reset();
    hideControl("divInputText");
    toggleInitialIcons();
    hideControl("bigFile");
    let dt = pasteClipboard();
    //gotoPage(1);
}
function selectText() {
    handleSysIcons();
    clear();
    toggleInitialIcons();
    hideControl("bigFile");

}

function setData(value) {
    manualText = true;
    //toggleClear();
}

function finishText() {
    data = getField("inputText");
    if (data.length > 0) {
        setField("loadedText", data);
        manualText = true;
        currentMedia = " divText";
    }

}

function getPassword() {
    return getField("userPassword");
}


//https://www.csestack.org/hide-show-password-eye-icon-html-javascript/
function enableViewPassword(idField, eyeField) {
    const togglePassword = document.getElementById(eyeField);
    const password = document.getElementById(idField);

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        e.preventDefault();
        //event.preventDefault();
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
}




function checkPassword() {
    let pwd = getField("userPassword");
    if (pwd.length > 0) {
        showBlock("divViewPassword");
        showBlock("divErase");
    }
    else {
        hideControl("divViewPassword");
        hideControl("divErase");
    }

    let dataReady = pwd.length >= config.MinPwdLen;
    dataReady = true;
    if (dataReady) {
        showBlock("divEncrypt");
        if (encryptedFile)
            showBlock("divDecrypt");
    }

    return dataReady;
}

function validatePassword(value) {
    console.log("validatePassword");
    if (!value)
        value = getPassword();

    let result = false;

    result = value.length >= pwdLen;
    if (!result) {
        if (page != 2)
            gotoPage(2);
        showError(`Password must be minimum ${pwdLen} in length`, statusError);
    }

    return result;
}

function finishPage() {
    if (!mobile)
        nextPage();
}

function hideInitialIcons()
{
    showMessage("");
    showBlock("divErase");
    //if ( initialIcons)
    {
        hideControl("divInfo");
        hideControl("divSetttings");
        hideControl("divPaste");
        hideControl("divOpenFile");
        hideTitle();
        initialIcons = false;
    }
}

function performEncrypt() {
    let r = doEncrypt();
    showResultMessage(r);
    if (r.result >= 0) {
        hideControl("PAGE1");
        hideControl("PAGE2");
    }


}



function handleSysIcons() {
    showMessage("");
    if (sysIcons) {
        hideControl("divInfo");
        hideControl("divSettings");
        sysIcons = false;
    }
}

function showPasswordMessage() {
    let pwd = getPassword();
    if (pwd.length < config.MinPwdLen) {
        hideControl("divMedia");
        hideControl("divInputText");
        gotoPage(2);
        showWarning("Optional <i>Password Hint</i>, <b>Password. (*Required)</b>", statusWarning);
        setFocus("userPassword");
    }
}

function warningMessage() {

    let msg = `Type or ${pasteIcon} Paste Text, or ${folderIcon} Open a File.`;
    if (!data)
        data = "";
    if (data.length == 0) {
        showWarning(msg)
    }

}

function togglePage() {
    showMessage("");
    if (page == 1) {
        warningMessage();
        setCurrentField("inputText");
        if (usingFile) 
            hideControl("divInputText");
    }
    else if (page == 2) {
        let pwd = getPassword();
        setCurrentField("userPassword");
        if (pwd.length < config.MinPwdLen) {
            showWarning("Optional <i>Password Hint</i>, <b>Password. (*Required)</b>", statusWarning);
            setFocus("userPassword");
        }
    }
    else if ( page == 3 )
        setCurrentField("pwdHint");

    //if (encryptedFile || manualText || dataFromClipboard)
    showFileInfo();

    // if (manualText || dataFromClipboard)
    //     showMedia("divText");

    if ( mediaOpen )
    {
        showBlock("divMedia");
        showBlock("divHide");
    }

    if (mobile || config.UseGreenKeyboard )
        openKeyboard();

}

function isDataReady() {
    let pwd = getField("userPassword");
    return (data.length + pwd.length >= 0);
}

function toggleInitialIcons() {
    if (!isDataReady()) {
        showBlock("divSettings");
        showBlock("divInfo");
    }
    else {
        hideControl("divSettings");
        hideControl("divInfo");
    }
    showBlock("divNext");
}

function toggleCanProcess(canProc, fSize) {
    if (!canProc) {
        setIconsStateInitial();
        gotoPage(1);
        showError(`File too big (${fSize}) for current RAM Memory.(${navigator.deviceMemory})GB`, statusWarning);
    }
}


function toggleClear() {
    console.log("toggleClear()");
    if (!isDataReady()) {
        if (page == 2)
            gotoPage(1);
    }
}

function setIconsStateInitial() {
    sysInfoOpen = false;
    settingsOpen = false;
    hideControl("divSysInfo");
    hideControl("divSysSettings");
    showBlock("divInfo");
    showBlock("divSettings");
    hideControl("divShare");
    hideControl("divCopy");
    hideControl("divEncrypt");
    hideControl("divDecrypt");
    hideControl("divDownload");



    hideControl("divMedia");
    hideControl("PAGE2");
    //hideControl("divView");
    //hideControl("divHide");
    showBlock("divPaste");
}


function reset() {
    clear();
}

function doClear() {
    clear();
}

function closeHelp() {
    hideControl("divHelp");
}

function showHelp() {
    if (config.ShowHelp) {
        let helpHtml = `Icon legends:</br>
${homeIcon} Start, Clear All, Enter manual text</br>
${infoIcon} System Info</br>
${settingsIcon} Settings</br>
${copyIcon} Copy decrypted text</br>
${pasteIcon} Paste text</br>
${folderIcon} Open local file</br>
${pdfIcon} See loaded PDF ( Desktop only )</br>
${encryptIcon} Encrypt Loaded Data</br>
${decryptIcon} Decrypt Loaded Data</br>
${eyeIcon} See Media</br>
${hideIcon} Hide Media</br>
${shareIcon} Share Encrypted text</br>
${saveIcon} Save Decrypted data</br>
${nextIcon} Next page</br>
`;

        showInfoAt("helpText", helpHtml);
        showBlock("divHelp");

    }
    else hideControl("divHelp");

}

function clear() {
    event.preventDefault();
    closeAllAux();
    hideControl("divHelp");

    if (encryptionDone || decryptionDone)
        clearMedia();

    document.getElementById("mainForm").reset();

    fieldTouched = false;
    encryptedFile = false;
    usingFile = false;
    readBase64 = false;
    data = "";
    mediaOpen = false;
    fileDecrypted = false;
    encryptionDone = false;
    encryptedText = false;
    decryptionDone = false;
    dataFromClipboard = false;
    canProcess = true;
    currentMedia = "";
    data = "";
    noFocus = false;
    sysIcons = true;
    manualText = false;
    isPDF = false;
    sharingFile = false;
    initialIcons = true;


    // setField("inputText", "");
    // setField("loadedText", "");
    // setField("userPassword", "");
    // setField("pwdHint", "");

    setIconsStateInitial();
    showBlock("divInfo");
    showBlock("divSettings")

    showBlock("divNext");
    showBlock("divInputText");
    showBlock("divPaste");
    showBlock("divOpenFile");

    hideControl("divInputPDF");
    hideControl("divFileInfo");
    hideControl("divDownload");
    hideControl("divDownload2");
    hideControl("divErase");
    hideControl("divViewPassword");
    hideControl("divHide");
    hideControl("divView");

    showBlock("result");
    showTitle();

    //hideControl("divView");
    //hideControl("divHide");
    hideControl("divViewPassword");
    gotoPage(1);
    currentField = "inputText";
    openKeyboard();
}

function setOffHelpMessage(value) {
    config.ShowHelp = value;
    saveConfig();
    hideControl("divHelp");
}

function setFieldTouched() {
    fieldTouched = true;
}


function enableInput() {
    console.log("enableInput");
    if (manualText || dataFromClipboard) {
        setField("inputText", data);
        showBlock("divInputText");
        toggleMedia();
    }
}

function viewInputPDF() {
    event.preventDefault();

    if (!mobile) {
        let pdfWindow = window.open("")
        pdfWindow.document.write(`<iframe width='100%' height='100%' src='${data}'></iframe>`);
    }
}

function openPDF() {
    if (!mobile) {
        let pdfWindow = window.open("")
        pdfWindow.document.write(`<iframe width='100%' height='100%' src='${data}'></iframe>`);
    }
    else doDownload(data, fileName);
}

function renderPDF() {
    if (!mobile) {
        let html = `<iframe width='100%' height='100%'  src='${data}'></iframe>`;
        html = `<iframe src='${data}'></iframe>`;

        let divpdf = document.getElementById("divPDF");
        writeInnerHTML("divPDF", html);
        showBlock("divPDF");

    }

}


function resetHard() {
    clear();
    skipLanding = true;
    addInstructions = true;
    hideControl("encryptActions");
    for (let i = 0; i < 20; i++) {
        copyToClipboardNew(makeid(64));
        showMessage(`Reset complete.(${i})`);
    }
    showMessage("Reset Complete.");


}


function doReadFile(evt) {
    showMessage("Reading file...");
    handleFileSelect(evt);
    showData();
}





function toggleSysInfo() {
    event.preventDefault();

    hideControl("divHelp");
    if (settingsOpen)
        toggleSettings();

    sysInfoOpen = !sysInfoOpen;
    if (sysInfoOpen) {
        currentSection = "divSysInfo";
        hideControl("PAGE1");
        hideControl("PAGE2");
        showInfo("System Info");
        console.log("userEmail", userEmail);
        showBlock("divSysInfo");
    }
    else {
        showInfo("");
        hideControl("divSysInfo");
        gotoPage(1);
    }
}


function toggleSettings() {
    event.preventDefault();
    hideControl("divHelp");
    settingsOpen = !settingsOpen;
    if (settingsOpen) {
        currentSection = "divSysSettings";
        hideControl("PAGE1");
        hideControl("PAGE2");
        showInfo("Settings");
        configChanged = false;
        showBlock("divSysSettings");

    }
    else {
        if (getSettingsSave()) {
            hideControl("divSysSettings");
            gotoPage(1);
            showInfo("Settings updated.");
        }

    }
}

function getTotalsText() {
    let html = `</br></br>
    ${encryptIcon} ${totals.te}, ${getSizeText(totals.teb)} 
    ${decryptIcon} ${totals.td}, ${getSizeText(totals.tdb)} 
    ${encryptIcon}${decryptIcon} ${totals.te + totals.td}, ${getSizeText(totals.teb + totals.tdb)}</br>
    `;

    return html;
}


function hideSysInfo() {
    gotoPage(1);
    hideControl("sysInfo");
}


function saveEmail(email) {
    event.preventDefault();
    if (!email || email.length == 0)
        email = getField("userEmail");

    if (validateEmail(email)) {
        userEmail = email;
        createConfig();
        saveConfig();
        initConfig();
        if (location.protocol == "https:")
            registerFirstTime();
        else
        {
            config.ServerId = 0;
            config.FreeDays = 1;
            saveConfig();
        }
        createMenu();
        initTogglePassword();
        hideControl("divUSER");
        showHelp();
        showBlock("PAGE1");
        openKeyboard();
        disableInputs(mobile);
        warningMessage();
        
    }
    else showError("invalid Email");
}


function function6() {
    window.onerror = function (msg, url, line) {
        showError(`${msg}</br>${url}</br>Line:${line}`);
        // alert("Message : " + msg);
        // alert("url : " + url);
        // alert("Line number : " + line);
    }

    mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    getIsDesktop();

    maxData = navigator.deviceMemory * 1024 * 1024 * 3;


    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    fileSelectionDiv = "fileSelection";

    if (!supported) {
        document.getElementById('files').addEventListener('change', handleFileSelect, false);
        fileSelectionDiv = "fileSelection";
    }

    showBlock("iconMenu");
    warningMessage();


    window.addEventListener('keyup', function (e) {
        if (e.keyCode == 27) { }
        {
        }

        if (e.getModifierState('CapsLock')) {
            showWarning("CAPS Lock is ON");
            CAPSLockOn = true;
        }
        else {
            //showMessage("");
            CAPSLockOn = false;
        }
    });

    window.addEventListener('onunload', function (e) {
        saveLogs();
    });


    showTitle();
    window.scrollTo(0, 1);
    setCurrentField("inputText");
    if (mobile)
        config.UseGreenKeyboard = true;

    //start********************************************************************************

    //  localStorage.removeItem("data");
    //  localStorage.removeItem("user");
    //  localStorage.removeItem("device");
    isGoogleVer = true;
    console.log("isGoogleVersion:", isGoogleVer);

    getSavedUserEmail();
    if (userEmail.length == 0) {
        hideControl("PAGE1");
        showBlock("divUSER");
        showMessage("Please provide an email address. ( No password required).")
        setCurrentField("userEmail");
        openKeyboard(mobile);
        if (!mobile)
            disableCtl("userEmail", false)
    }
    else {
        createMenu();
        showHelp();
        initTogglePassword();
        initConfig();
        // if (location.protocol != "https:")
        //     initConfig();
        // else
        //     getUserEmail();
        openKeyboard();
    }
    disableInputs(mobile);

}


function checkEmail(mail) {
}
function initTogglePassword() {
    const togglePassword = document.getElementById("viewPassword");
    const password = document.getElementById("userPassword");

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        //e.preventDefault();
        event.preventDefault();
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
}


function initToggleMedia() {
    let togglePassword2 = document.getElementById("divHide");

    togglePassword2.addEventListener('click', function (e) {
        // toggle the type attribute
        //e.preventDefault();
        event.preventDefault();
        // toggle the eye slash icon
        this.classList.toggle('fa-eye');
        if ( mediaOpen)
            showBlock("divMedia");
        else
            hideControl("divMedia");

        mediaOpen = !mediaOpen;
    });
}


function createMenuNavBar(genAddUpdate = false, icons = false) {
    //todo: causes infine recursion
    let canSave = true; // validateParameters();
    let options = [];
    let html = "";


    options.push({ icon: "fas fa-cog", parent: "", className: "btn-secondary", id: "btnSysInfo", kind: "main", method: "menuChanged", pars: "'KEYS_SELECTION','KEYS'", caption: "System info" });
    options.push({ icon: "fas fa-paste", parent: "", className: "btn-secondary", id: "btnPARAMETERS", kind: "main", method: "menuChanged", pars: "'PARAMETERS_SELECTION','PARAMETERS'", caption: "PARAMETERS" });
    options.push({ separator: "|", icon: "far fa-save", parent: "FINISH", className: "btn-secondary", id: "btnFINISH", kind: "main", method: "menuChanged", pars: "'SAVE_SELECTION','FINISH'", caption: "FINISH" });



    if (!existingKey && genAddUpdate) {
        if (currentKey.length > 0 &&
            currentValue.length > 0 && section == "KEYS")
            options.push({ icon: "fa-solild fa-plus", className: "btn-primary", id: "btnAdd", method: "createKey", caption: "Add" });
    }


    if (section == "KEYS") {
        if (existingKey && currentValue.length > 0) {
            if (genAddUpdate)
                options.push({ icon: "fa-solid fa-pen-to-square", className: "btn-primary", id: "btnUpdate", method: "updateKey", caption: "Update" });

            //options.push({ icon: "fa fa-file-signature", id: "btnRename", method: "renameKey", caption: "Rename" });

        }
        if (currentKey.length > 0) {
            options.push({ icon: "fa-shuffle", className: "btn-secondary", id: "btnGenerate", method: "generate", caption: "Random" });
            options.push({ icon: "fa-hand-sparkles", className: "btn-secondary", id: "btnRules", method: "validateMeetRules", caption: "Rules" });
        }
    }

    if (newFile && section == "FINISH")
        options.push({ icon: "fa-shuffle", className: "btn-secondary", id: "btnRandom", method: "generate2", caption: "Random" });

    if (section == "KEYS" && existingKey)
        options.push({ icon: "fa trash-can", className: "btn-danger", id: "btnDelete", method: "deleteKey", caption: "Delete" });

    if (kch || sch || pch)
        options.push({ icon: "far fa-square", className: "btn-secondary", id: "btnClear", method: "clearForm", caption: "Clear" });


    let dout = getValue("saveForm", "dataOut").trim();
    if (section == "FINISH" && dout.length > 0)
        options.push({ icon: "fa-regular fa-copy", className: "btn-secondary", id: "btnCopy", method: "copyToCC", pars: 'dataOut', caption: "Copy" });

    options.push({ icon: "fa-regular fa-floppy-disk", className: "btn-success", id: "btnSave", method: "saveToDisk", caption: "Save" });

    if (supported && location.protocol == "https:")
        options.push({ icon: "fa-solid fa-floppy-disk", onclick: `onclick="saveAsToDisk()"`, caption: "Save As" });

    //buildMenu("MENU1", "", options, "fa fa-bars");
    buildMenuButtons("MENU1", options);
}



function doShare() {
    event.preventDefault();

    if (data.length > 0)
        shareData("Criptyfy", data, landingLink);
    else
        showError("No data to share.");

}


function eraseField() {
    event.preventDefault();
    if (currentField.length > 0) {
        setField(currentField, "");
        Keyboard.properties.value = "";
    }
}

function doSharePwd() {
    let pwd = getField("userPassword");
    if (pwd.trim().length > 0) {
        let hint = getField("pwdHint");
        shareData(`Criptyfy:
${hint} ${pwd}`, "");
    }
    else showError("Empty password.");
}


//Main entry point

window.addEventListener('load', function6);


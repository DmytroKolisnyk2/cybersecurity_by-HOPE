parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/dmytro_kolisnyk.png":[["dmytro_kolisnyk.858b0921.png","Nfia"],"Nfia"],"./../images/igor_yakib.jpg":[["igor_yakib.192a6936.jpg","jeW2"],"jeW2"],"./../images/max_popsuy.jpg":[["max_popsuy.87674cea.jpg","gGmz"],"gGmz"]}],"Vl7d":[function(require,module,exports) {

},{"./MaterialIcons-Regular.eot":[["MaterialIcons-Regular.b2dfdb43.eot","j5gN"],"j5gN"],"./MaterialIcons-Regular.woff2":[["MaterialIcons-Regular.042e3246.woff2","TxNh"],"TxNh"],"./MaterialIcons-Regular.woff":[["MaterialIcons-Regular.cc4a9352.woff","BrWe"],"BrWe"],"./MaterialIcons-Regular.ttf":[["MaterialIcons-Regular.7f257eac.ttf","EElw"],"EElw"]}],"XV0m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openBar=exports.closeOverlayBar=exports.closeBar=void 0;const e=document.querySelector(".header__burger"),r=document.querySelector(".bar"),s=document.querySelector(".aside__overlay"),t=()=>{e.classList.add("header__burger--open"),r.classList.add("bar--open"),e.removeEventListener("click",t),e.addEventListener("click",o)};exports.openBar=t;const o=()=>{e.classList.remove("header__burger--open"),r.classList.remove("bar--open"),e.addEventListener("click",t),e.removeEventListener("click",o)};exports.closeBar=o;const c=()=>{event.target===s&&(e.classList.remove("header__burger--open"),r.classList.remove("bar--open"),e.addEventListener("click",t),e.removeEventListener("click",o))};exports.closeOverlayBar=c;
},{}],"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"yCZL":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){if("function"==typeof e&&e.amd)e(["module","exports"],n);else if("undefined"!=typeof exports)n(module,exports);else{var i={exports:{}};n(i,i.exports),t.WOW=i.exports}}(this,function(e,t){"use strict";var n,i;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function a(e,t){return t.indexOf(e)>=0}function r(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function l(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var u=window.WeakMap||window.MozWeakMap||function(){function e(){o(this,e),this.keys=[],this.values=[]}return s(e,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++){if(this.keys[t]===e)return this.values[t]}}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++){if(this.keys[n]===e)return this.values[n]=t,this}return this.keys.push(e),this.values.push(t),this}}]),e}(),c=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function e(){o(this,e),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return s(e,[{key:"observe",value:function(){}}]),e}(),n.notSupported=!0,i),h=window.getComputedStyle||function(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,function(e,t){return t.toUpperCase()});var i=e.currentStyle;return(null!=i?i[n]:void 0)||null}}},d=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new u,this.wowEvent=function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=void 0;return null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o}(this.config.boxClass)}return s(e,[{key:"init",value:function(){this.element=window.document.documentElement,a(document.readyState,["interactive","complete"])?this.start():r(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}(this.disabled()||(r(this.config.scrollContainer||window,"scroll",this.scrollHandler),r(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)&&new c(function(t){for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.addedNodes.length;o++){var s=i.addedNodes[o];e.doSync(s)}}).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,l(this.config.scrollContainer||window,"scroll",this.scrollHandler),l(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){c.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];a(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){var t,n;return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),r(e,"animationend",this.resetAnimation),r(e,"oanimationend",this.resetAnimation),r(e,"webkitAnimationEnd",this.resetAnimation),r(e,"MSAnimationEnd",this.resetAnimation),e}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate(function(){return n.customStyle(e,t,i,o,s)})}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++){this.boxes[e].style.visibility="visible"}}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++){e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}}},{key:"vendorCSS",value:function(e,t){for(var n=h(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++){var s=this.vendors[o];i=i||n.getPropertyCSSValue("-"+s+"-"+t)}return i}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=h(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,o=this.offsetTop(e),s=o+e.clientHeight;return o<=i&&s>=n}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),e}();t.default=d,e.exports=t.default});
},{}],"X9te":[function(require,module,exports) {

},{}],"o2Ht":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"function"==typeof t&&t.amd?t([],function(){return n(e)}):"object"==typeof exports?module.exports=n(e):e.Gumshoe=n(e)}(void 0!==e?e:"undefined"!=typeof window?window:this,function(t){"use strict";var e={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},o=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return e>=0?e:0},s=function(t){t&&t.sort(function(t,e){return o(t.content)<o(e.content)?-1:1})},c=function(e,n,o){var s=e.getBoundingClientRect(),c=function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)}(n);return o?parseInt(s.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=c},r=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,e){var n=t[t.length-1];if(function(t,e){return!(!r()||!c(t.content,e,!0))}(n,e))return n;for(var o=t.length-1;o>=0;o--)if(c(t[o].content,e))return t[o]},a=function(t,e){if(e.nested&&t.parentNode){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),a(n,e))}},u=function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),a(o,e),n("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:e}))}},l=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),l(n,e))}};return function(o,c){var r,a,f,d,v,m={setup:function(){r=document.querySelectorAll(o),a=[],Array.prototype.forEach.call(r,function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&a.push({nav:t,content:e})}),s(a)},detect:function(){var t=i(a,v);t?f&&t.content===f.content||(u(f,v),function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.add(e.navClass),t.content.classList.add(e.contentClass),l(o,e),n("gumshoeActivate",o,{link:t.nav,content:t.content,settings:e}))}}(t,v),f=t):f&&(u(f,v),f=null)}},p=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(m.detect)},h=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(function(){s(a),m.detect()})};return m.destroy=function(){f&&u(f,v),t.removeEventListener("scroll",p,!1),v.reflow&&t.removeEventListener("resize",h,!1),a=null,r=null,f=null,d=null,v=null},v=function(){var t={};return Array.prototype.forEach.call(arguments,function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}}),t}(e,c||{}),m.setup(),m.detect(),t.addEventListener("scroll",p,!1),v.reflow&&t.addEventListener("resize",h,!1),m}});
},{}],"m2kk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hideHeader=void 0;let e,o=window.scrollY||document.documentElement.scrollTop,t=0,d=0;const r=document.querySelector(".header__wrapper"),s=()=>{(e=window.scrollY||document.documentElement.scrollTop)>o?t=2:e<o&&(t=1),t!==d&&c(t,e),o=e};exports.hideHeader=s;const c=(e,o)=>{2===e&&o>120?(r.classList.add("hide"),d=e):1===e&&(r.classList.remove("hide"),d=e)};
},{}],"t32s":[function(require,module,exports) {
"use strict";var e=r(require("lodash.throttle"));function r(e){return e&&e.__esModule?e:{default:e}}const t=document.querySelector(".main__arrow");window.addEventListener("scroll",(0,e.default)(()=>{window.pageYOffset>680?t.classList.remove("main__arrow--hidden"):t.classList.add("main__arrow--hidden")},400));
},{"lodash.throttle":"FNyO"}],"G2qC":[function(require,module,exports) {
var define;
var t;!function(e,n){"use strict";"function"==typeof t&&t.amd?t(n):"object"==typeof exports?module.exports=n():e.baguetteBox=n()}(this,function(){"use strict";var t,e,n,o,i,a={},s={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},r={},l=[],u=0,c=!1,d={},f=!1,g=/.+\.(gif|jpe?g|png|webp)/i,p={},v=[],b=null,m=function(t){-1!==t.target.id.indexOf("baguette-img")&&S()},h=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,I()},y=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,H()},w=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,S()},k=function(t){d.count++,1<d.count&&(d.multitouch=!0),d.startX=t.changedTouches[0].pageX,d.startY=t.changedTouches[0].pageY},x=function(t){if(!f&&!d.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];40<e.pageX-d.startX?(f=!0,I()):e.pageX-d.startX<-40?(f=!0,H()):100<d.startY-e.pageY&&S()}},E=function(){d.count--,d.count<=0&&(d.multitouch=!1),f=!1},C=function(){E()},B=function(e){"block"===t.style.display&&t.contains&&!t.contains(e.target)&&(e.stopPropagation(),P())};function T(t){if(p.hasOwnProperty(t)){var e=p[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){O(t.imageElement,"click",t.eventHandler)}),l===t&&(l=[])}),delete p[t]}}function N(t){switch(t.keyCode){case 37:I();break;case 39:H();break;case 27:S();break;case 36:!function(t){t&&t.preventDefault(),Y(0)}(t);break;case 35:!function(t){t&&t.preventDefault(),Y(l.length-1)}(t)}}function L(i,r){if(l!==i){for(l=i,function(i){for(var r in i=i||{},s)a[r]=s[r],void 0!==i[r]&&(a[r]=i[r]);e.style.transition=e.style.webkitTransition="fadeIn"===a.animation?"opacity .4s ease":"slideIn"===a.animation?"":"none","auto"===a.buttons&&("ontouchstart"in window||1===l.length)&&(a.buttons=!1),n.style.display=o.style.display=a.buttons?"":"none";try{t.style.backgroundColor=a.overlayBackgroundColor}catch(u){}}(r);e.firstChild;)e.removeChild(e.firstChild);for(var u,c=[],d=[],f=v.length=0;f<i.length;f++)(u=z("div")).className="full-image",u.id="baguette-img-"+f,v.push(u),c.push("baguetteBox-figure-"+f),d.push("baguetteBox-figcaption-"+f),e.appendChild(v[f]);t.setAttribute("aria-labelledby",c.join(" ")),t.setAttribute("aria-describedby",d.join(" "))}}function A(e){a.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==t.style.display&&(M(document,"keydown",N),d={count:0,startX:null,startY:null},F(u=e,function(){X(u),D(u)}),q(),t.style.display="block",a.fullScreen&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen&&t.mozRequestFullScreen()),setTimeout(function(){t.className="visible",a.bodyClass&&document.body.classList&&document.body.classList.add(a.bodyClass),a.afterShow&&a.afterShow()},50),a.onChange&&a.onChange(u,v.length),b=document.activeElement,P(),c=!0)}function P(){a.buttons?n.focus():i.focus()}function S(){a.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==t.style.display&&(O(document,"keydown",N),t.className="",setTimeout(function(){t.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),a.bodyClass&&document.body.classList&&document.body.classList.remove(a.bodyClass),a.afterHide&&a.afterHide(),b&&b.focus(),c=!1},500))}function F(t,e){var n=v[t],o=l[t];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])e&&e();else{var i=o.imageElement,s=i.getElementsByTagName("img")[0],r="function"==typeof a.captions?a.captions.call(l,i):i.getAttribute("data-caption")||i.title,u=function(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;e=n[i[s]]||e}return e}(i),c=z("figure");if(c.id="baguetteBox-figure-"+t,c.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',a.captions&&r){var d=z("figcaption");d.id="baguetteBox-figcaption-"+t,d.innerHTML=r,c.appendChild(d)}n.appendChild(c);var f=z("img");f.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");c.removeChild(n),!a.async&&e&&e()},f.setAttribute("src",u),f.alt=s&&s.alt||"",a.titleTag&&r&&(f.title=r),c.appendChild(f),a.async&&e&&e()}}function H(){return Y(u+1)}function I(){return Y(u-1)}function Y(t,e){return!c&&0<=t&&t<e.length?(L(e,a),A(t),!0):t<0?(a.animation&&j("left"),!1):t>=v.length?(a.animation&&j("right"),!1):(F(u=t,function(){X(u),D(u)}),q(),a.onChange&&a.onChange(u,v.length),!0)}function j(t){e.className="bounce-from-"+t,setTimeout(function(){e.className=""},400)}function q(){var t=100*-u+"%";"fadeIn"===a.animation?(e.style.opacity=0,setTimeout(function(){r.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t,e.style.opacity=1},400)):r.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t}function X(t){t-u>=a.preload||F(t+1,function(){X(t+1)})}function D(t){u-t>=a.preload||F(t-1,function(){D(t-1)})}function M(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,function(t){(t=t||window.event).target=t.target||t.srcElement,n(t)})}function O(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function R(t){return document.getElementById(t)}function z(t){return document.createElement(t)}return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:function(a,s){return r.transforms=function(){var t=z("div");return void 0!==t.style.perspective||void 0!==t.style.webkitPerspective}(),r.svg=function(){var t=z("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}(),r.passiveEvents=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(c){}return t}(),function(){if(t=R("baguetteBox-overlay"))return e=R("baguetteBox-slider"),n=R("previous-button"),o=R("next-button"),void(i=R("close-button"));var a,s;(t=z("div")).setAttribute("role","dialog"),t.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(t),(e=z("div")).id="baguetteBox-slider",t.appendChild(e),(n=z("button")).setAttribute("type","button"),n.id="previous-button",n.setAttribute("aria-label","Previous"),n.innerHTML=r.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",t.appendChild(n),(o=z("button")).setAttribute("type","button"),o.id="next-button",o.setAttribute("aria-label","Next"),o.innerHTML=r.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",t.appendChild(o),(i=z("button")).setAttribute("type","button"),i.id="close-button",i.setAttribute("aria-label","Close"),i.innerHTML=r.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",t.appendChild(i),n.className=o.className=i.className="baguetteBox-button",a=r.passiveEvents?{passive:!1}:null,s=r.passiveEvents?{passive:!0}:null,M(t,"click",m),M(n,"click",h),M(o,"click",y),M(i,"click",w),M(e,"contextmenu",C),M(t,"touchstart",k,s),M(t,"touchmove",x,a),M(t,"touchend",E),M(document,"focus",B,!0)}(),T(a),function(t,e){var n=document.querySelectorAll(t),o={galleries:[],nodeList:n};return p[t]=o,[].forEach.call(n,function(t){e&&e.filter&&(g=e.filter);var n=[];if(n="A"===t.tagName?[t]:t.getElementsByTagName("a"),0!==(n=[].filter.call(n,function(t){if(-1===t.className.indexOf(e&&e.ignoreClass))return g.test(t.href)})).length){var i=[];[].forEach.call(n,function(t,n){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,L(i,e),A(n)},a={eventHandler:o,imageElement:t};M(t,"click",o),i.push(a)}),o.galleries.push(i)}}),o.galleries}(a,s)},show:Y,showNext:H,showPrevious:I,hide:S,destroy:function(){!function(){var a=r.passiveEvents?{passive:!1}:null,s=r.passiveEvents?{passive:!0}:null;O(t,"click",m),O(n,"click",h),O(o,"click",y),O(i,"click",w),O(e,"contextmenu",C),O(t,"touchstart",k,s),O(t,"touchmove",x,a),O(t,"touchend",E),O(document,"focus",B,!0)}(),function(){for(var t in p)p.hasOwnProperty(t)&&T(t)}(),O(document,"keydown",N),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),p={},l=[],u=0}}});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("material-design-icons/iconfont/material-icons.css");var e=require("./js/openBar"),r=i(require("lodash.throttle")),t=i(require("wow.js/dist/wow"));require("wow.js/css/libs/animate.css");var o=i(require("gumshoejs")),s=require("./js/hideHeader");require("./js/checkArrow");var n=i(require("baguettebox.js"));function i(e){return e&&e.__esModule?e:{default:e}}require("baguettebox.js/dist/baguetteBox.min.css"),n.default.run(".section__photo-wrapper--js-gallery",{noScrollbars:!0}),document.querySelector(".header__burger").addEventListener("click",e.openBar),document.querySelector(".aside__overlay").addEventListener("click",e.closeOverlayBar);const c=document.querySelector(".main__video"),a=()=>{c.play(),setTimeout(()=>{c.pause()},300)};window.addEventListener("scroll",(0,r.default)(a,150)),(new t.default).init();const l=new o.default("#menu .list__link");console.log(document.querySelectorAll("#menu .list__link")),window.addEventListener("scroll",(0,r.default)(s.hideHeader,100));const u={root:null,rootMargin:"0px",threshold:window.screen.width<=768?.1:.65};console.log(u.threshold);const d=document.querySelector(".cyberSecurity__footer"),m=(e,r)=>{e.forEach(e=>{const t=e.target;e.isIntersecting&&(document.querySelectorAll(".title1").forEach(e=>e.classList.add("title--animation")),r.unobserve(t))})},_=new IntersectionObserver(m,u);_.observe(d);const q=(e,r)=>{e.forEach(e=>{const r=e.target;e.isIntersecting&&(r===document.querySelector(".final")?(r.classList.add("appearBorder--specialWidth"),setTimeout(()=>{r.classList.add("appearBorder--specialHeight")},1400)):r.classList.add("appearBorder"))})},h=[...document.querySelector(".main").children];h.push(document.querySelector(".introduction__border"),document.querySelector(".main__section--before"),document.querySelector(".main__section--after"),document.querySelector(".block__line"));const w=new IntersectionObserver(q,u);h.forEach(e=>{w.observe(e)});
},{"./sass/main.scss":"clu1","material-design-icons/iconfont/material-icons.css":"Vl7d","./js/openBar":"XV0m","lodash.throttle":"FNyO","wow.js/dist/wow":"yCZL","wow.js/css/libs/animate.css":"X9te","gumshoejs":"o2Ht","./js/hideHeader":"m2kk","./js/checkArrow":"t32s","baguettebox.js":"G2qC","baguettebox.js/dist/baguetteBox.min.css":"X9te"}]},{},["Focm"], null)
//# sourceMappingURL=src.e474cd8f.js.map
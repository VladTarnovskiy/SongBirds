(()=>{"use strict";var e,t,r={706:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(81),o=r.n(n),a=r(645),i=r.n(a),s=r(667),c=r.n(s),d=new URL(r(582),r.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Arima+Madurai:300);"]);var u=c()(d);l.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}*{transition:transform .2s ease-out}.body-background{z-index:1;position:relative;overflow-x:hidden;display:flex;flex-direction:column;align-items:center;justify-content:start;min-height:35rem;height:100%;background-image:linear-gradient(to bottom, rgba(255, 168, 76, 0.6) 0%, rgba(255, 123, 13, 0.6) 100%),url("https://images.unsplash.com/photo-1446824505046-e43605ffb17f");background-blend-mode:soft-light;background-size:cover;background-position:center center;padding-right:2rem;padding-left:2rem}.bird{background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);background-size:auto 100%;width:88px;height:125px;will-change:background-position;animation-name:fly-cycle;animation-timing-function:steps(10);animation-iteration-count:infinite}.bird--one{animation-duration:1s;animation-delay:-0.5s}.bird--two{animation-duration:.9s;animation-delay:-0.75s}.bird--three{animation-duration:1.25s;animation-delay:-0.25s}.bird--four{animation-duration:1.1s;animation-delay:-0.5s}.bird-container{position:absolute;top:20%;left:-10%;transform:scale(0) translateX(-10vw);will-change:transform;animation-name:fly-right-one;animation-timing-function:linear;animation-iteration-count:infinite}.bird-container--one{animation-duration:15s;animation-delay:0}.bird-container--two{animation-duration:16s;animation-delay:1s}.bird-container--three{animation-duration:14.6s;animation-delay:9.5s}.bird-container--four{animation-duration:16s;animation-delay:10.25s}@keyframes fly-cycle{100%{background-position:-900px 0}}@keyframes fly-right-one{0%{transform:scale(0.3) translateX(-10vw)}10%{transform:translateY(2vh) translateX(10vw) scale(0.4)}20%{transform:translateY(0vh) translateX(30vw) scale(0.5)}30%{transform:translateY(4vh) translateX(50vw) scale(0.6)}40%{transform:translateY(2vh) translateX(70vw) scale(0.6)}50%{transform:translateY(0vh) translateX(90vw) scale(0.6)}60%{transform:translateY(0vh) translateX(110vw) scale(0.6)}100%{transform:translateY(0vh) translateX(110vw) scale(0.6)}}@keyframes fly-right-two{0%{transform:translateY(-2vh) translateX(-10vw) scale(0.5)}10%{transform:translateY(0vh) translateX(10vw) scale(0.4)}20%{transform:translateY(-4vh) translateX(30vw) scale(0.6)}30%{transform:translateY(1vh) translateX(50vw) scale(0.45)}40%{transform:translateY(-2.5vh) translateX(70vw) scale(0.5)}50%{transform:translateY(0vh) translateX(90vw) scale(0.45)}51%{transform:translateY(0vh) translateX(110vw) scale(0.45)}100%{transform:translateY(0vh) translateX(110vw) scale(0.45)}}*,*::before,*::after{box-sizing:border-box}.header{padding:10px;height:75px;position:absolute;top:0;left:0;z-index:20;width:100%;background:linear-gradient(rgba(255, 168, 76, 0.6) 0%, rgba(255, 123, 13, 0.6) 100%)}@media(max-width: 500px){.header{height:140px}}.header .header__title{display:flex;justify-content:space-between;align-items:center}@media(max-width: 500px){.header .header__title{flex-direction:column;justify-content:center}}.header .header__title .header__logo{width:200px;height:55px;background-image:url('+u+');background-size:cover;background-position:center}.header .header__title .header__logo:hover{transform:scale(1.03)}.header .header__title .game-link{font-family:"Arima Madurai",cursive}.header .header__title .game-link:hover{transform:scale(1.02);cursor:pointer}.header .header__title .game-link a{text-decoration:none;color:#222;font-size:32px}.body-background.body-background_greeting{height:100vh}.app-title{font-family:"Arima Madurai",cursive;color:#000;font-size:4rem;letter-spacing:-3px;text-shadow:0px 1px 1px rgba(255,255,255,.6);position:relative;z-index:3;margin-top:150px;margin-bottom:0}.app-description{font-family:"Arima Madurai",cursive;font-size:2.5rem;margin-top:10px;text-align:center}.start-btn{width:150px;height:50px;border:2px solid #222;border-radius:5px;background:none}.start-btn:hover{transform:scale(1.02);cursor:pointer}.start-btn a{text-decoration:none;color:#222;font-size:32px}.app-title{text-align:center}.footer{position:absolute;bottom:0;left:0;z-index:20;width:100%;background:linear-gradient(rgba(255, 168, 76, 0.6) 0%, rgba(255, 123, 13, 0.6) 100%);z-index:20}.footer-list{display:flex;justify-content:space-around;list-style-type:none;padding-left:4px;padding-right:4px;padding-left:0px;height:45px}.rs-logo,.git-logo{width:110px;height:40px}@media(max-width: 500px){.rs-logo,.git-logo{width:90px;height:30px}}.rs-logo:hover,.git-logo:hover{transform:scale(1.1)}.prod-year{padding-top:5px;font-size:25px;font-family:"Arima Madurai",cursive}@media(max-width: 500px){.prod-year{font-style:20px;padding-right:20px}}',""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},927:(e,t,r)=>{var n=r(379),o=r.n(n),a=r(795),i=r.n(a),s=r(569),c=r.n(s),d=r(565),l=r.n(d),u=r(216),p=r.n(u),f=r(589),h=r.n(f),m=r(706),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p();var g=o()(m.default,v);if(!m.default.locals||e.hot.invalidate){var b=!m.default.locals,y=b?m:m.default.locals;e.hot.accept(706,(t=>{m=r(706),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(y,b?m:m.default.locals,b)?(y=b?m:m.default.locals,g(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()})),m.default&&m.default.locals&&m.default.locals},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=n.base?c[0]+n.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),d=0;d<a.length;d++){var l=r(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},541:(e,t,r)=>{var n=r(91),o=r.n(n),a=new URL(r(206),r.b),i=new URL(r(37),r.b),s=new URL(r(451),r.b);o()(a),o()(i),o()(s),r(927)},206:(e,t,r)=>{e.exports=r.p+"4d7f137ad787de7168b0.png"},37:(e,t,r)=>{e.exports=r.p+"d1bb13ce1a593d82e4c0.svg"},451:(e,t,r)=>{e.exports=r.p+"24b53f4b24b1890ec5dc.png"},582:(e,t,r)=>{e.exports=r.p+"e862c7ab3894f1c9cc06.svg"}},n={};function o(e){var t=n[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var a=n[e]={id:e,exports:{}};try{var i={id:e,module:a,factory:r[e],require:o};o.i.forEach((function(e){e(i)})),a=i.module,i.factory.call(a.exports,a,a.exports,i.require)}catch(e){throw a.error=e,e}return a.exports}o.m=r,o.c=n,o.i=[],o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"greeting."+o.h()+".hot-update.json",o.h=()=>"bcb59e5974d02073b15d",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="vladtarnovskiy-jsfe2022q3:",o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,r,n={},a=o.c,i=[],s=[],c="idle",d=0,l=[];function u(e){c=e;for(var t=[],r=0;r<s.length;r++)t[r]=s[r].call(null,e);return Promise.all(t)}function p(){0==--d&&u("ready").then((function(){if(0===d){var e=l;l=[];for(var t=0;t<e.length;t++)e[t]()}}))}function f(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then((function(r){return r?u("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,a){return o.hmrC[a](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?m(e):u("ready").then((function(){return n}))},0===d?t():new Promise((function(e){l.push((function(){e(t())}))}));var t}))})):u(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):m(e)}function m(e){e=e||{},v();var n=t.map((function(t){return t(e)}));t=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var i,s=u("apply"),c=function(e){i||(i=e)},d=[];return n.forEach((function(e){if(e.apply){var t=e.apply(c);if(t)for(var r=0;r<t.length;r++)d.push(t[r])}})),Promise.all([a,s]).then((function(){return i?u("fail").then((function(){throw i})):r?m(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return d}))}))}function v(){if(r)return t||(t=[]),Object.keys(o.hmrI).forEach((function(e){r.forEach((function(r){o.hmrI[e](r,t)}))})),r=void 0,!0}o.hmrD=n,o.i.push((function(l){var m,v,g,b,y=l.module,x=function(t,r){var n=a[r];if(!n)return t;var o=function(o){if(n.hot.active){if(a[o]){var s=a[o].parents;-1===s.indexOf(r)&&s.push(r)}else i=[r],e=o;-1===n.children.indexOf(o)&&n.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+r),i=[];return t(o)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&"e"!==l&&Object.defineProperty(o,l,s(l));return o.e=function(e){return function(e){switch(c){case"ready":u("prepare");case"prepare":return d++,e.then(p,p),e;default:return e}}(t.e(e))},o}(l.require,l.id);y.hot=(m=l.id,v=y,b={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=v.parents.slice(),e=g?void 0:m,o(m)},active:!0,accept:function(e,t,r){if(void 0===e)b._selfAccepted=!0;else if("function"==typeof e)b._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)b._acceptedDependencies[e[n]]=t||function(){},b._acceptedErrorHandlers[e[n]]=r;else b._acceptedDependencies[e]=t||function(){},b._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)b._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)b._declinedDependencies[e[t]]=!0;else b._declinedDependencies[e]=!0},dispose:function(e){b._disposeHandlers.push(e)},addDisposeHandler:function(e){b._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=b._disposeHandlers.indexOf(e);t>=0&&b._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":t=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,t)})),u("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:f,apply:h,status:function(e){if(!e)return c;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:n[m]},e=void 0,b),y.parents=i,y.children=[],i=[],l.require=x})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e,t,r,n,a,i=o.hmrS_jsonp=o.hmrS_jsonp||{846:0},s={};function c(t,r){return e=r,new Promise(((e,r)=>{s[t]=e;var n=o.p+o.hu(t),a=new Error;o.l(n,(e=>{if(s[t]){s[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading hot update chunk "+t+" failed.\n("+n+": "+o+")",a.name="ChunkLoadError",a.type=n,a.request=o,r(a)}}))}))}function d(e){function s(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var a=n.pop(),i=a.id,s=a.chain,d=o.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var l=0;l<d.parents.length;l++){var u=d.parents[l],p=o.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(p.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),c(r[u],[i])):(delete r[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}o.f&&delete o.f.jsonpHmr,t=void 0;var d={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(o.o(r,f)){var h,m=r[f],v=!1,g=!1,b=!1,y="";switch((h=m?s(f):{type:"disposed",moduleId:f}).chain&&(y="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+y));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+y));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+y));break;case"accepted":e.onAccepted&&e.onAccepted(h),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),b=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(f in u[f]=m,c(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,f)&&(d[f]||(d[f]=[]),c(d[f],h.outdatedDependencies[f]));b&&(c(l,[h.moduleId]),u[f]=p)}r=void 0;for(var x,w=[],_=0;_<l.length;_++){var k=l[_],E=o.c[k];E&&(E.hot._selfAccepted||E.hot._main)&&u[k]!==p&&!E.hot._selfInvalidated&&w.push({module:k,require:E.hot._requireSelf,errorHandler:E.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var t,r=l.slice();r.length>0;){var a=r.pop(),s=o.c[a];if(s){var c={},u=s.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,c);for(o.hmrD[a]=c,s.hot.active=!1,delete o.c[a],delete d[a],_=0;_<s.children.length;_++){var p=o.c[s.children[_]];p&&(e=p.parents.indexOf(a))>=0&&p.parents.splice(e,1)}}}for(var f in d)if(o.o(d,f)&&(s=o.c[f]))for(x=d[f],_=0;_<x.length;_++)t=x[_],(e=s.children.indexOf(t))>=0&&s.children.splice(e,1)},apply:function(t){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var n=0;n<a.length;n++)a[n](o);for(var i in d)if(o.o(d,i)){var s=o.c[i];if(s){x=d[i];for(var c=[],p=[],f=[],h=0;h<x.length;h++){var m=x[h],v=s.hot._acceptedDependencies[m],g=s.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),p.push(g),f.push(m)}}for(var b=0;b<c.length;b++)try{c[b].call(null,x)}catch(r){if("function"==typeof p[b])try{p[b](r,{moduleId:i,dependencyId:f[b]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[b],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[b],error:r}),e.ignoreErrored||t(r)}}}for(var y=0;y<w.length;y++){var _=w[y],k=_.module;try{_.require(k)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:k,module:o.c[k]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:r}),e.ignoreErrored||t(r)}}return l}}}self.webpackHotUpdatevladtarnovskiy_jsfe2022q3=(t,n,i)=>{for(var c in n)o.o(n,c)&&(r[c]=n[c],e&&e.push(c));i&&a.push(i),s[t]&&(s[t](),s[t]=void 0)},o.hmrI.jsonp=function(e,t){r||(r={},a=[],n=[],t.push(d)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(e,s,l,u,p,f){p.push(d),t={},n=s,r=l.reduce((function(e,t){return e[t]=!1,e}),{}),a=[],e.forEach((function(e){o.o(i,e)&&void 0!==i[e]?(u.push(c(e,f)),t[e]=!0):t[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,r){t&&o.o(t,e)&&!t[e]&&(r.push(c(e)),t[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o.nc=void 0,o(541)})();
!function(){var e={351:function(){Array.from(document.querySelectorAll(".excerpt")).forEach((e=>{e.innerText.length>130&&(e.innerText=e.innerText.slice(0,130)+"...")}))},573:function(){const e=document.querySelector("#form-phone"),t=document.querySelector("#form-submit");let n=!1;const r=()=>{n?(t.disabled=!1,t.classList.remove("is-disabled")):(t.disabled=!0,t.classList.add("is-disabled"))};e&&(e.addEventListener("input",(t=>{t.target.value.match(/^(?:\+\s*46\s*)?0?[1-9]\d{7,9}$/)?(n=!0,e.classList.remove("input-error-state")):(n=!1,e.classList.add("input-error-state")),r()})),r())},771:function(e,t,n){"use strict";var r=n(81),o=n.n(r),c=n(645),i=n.n(c)()(o());i.push([e.id,".button:has(input[type=checkbox]:checked){background-color:#000;color:#fff}.contact-form-navigation-block .swiper-prev{display:none}.swiper-slide .contact-form-block:last-of-type{margin-bottom:none}",""]),t.Z=i},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:function(e){"use strict";e.exports=function(e){return e[1]}},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},i=[],a=0;a<e.length;a++){var s=e[a],l=r.base?s[0]+r.base:s[0],u=c[l]||0,d="".concat(l," ").concat(u);c[l]=u+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var s=r(e,o),l=0;l<c.length;l++){var u=n(c[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),c=n(569),i=n.n(c),a=n(565),s=n.n(a),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(771),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,n(351),n(573);let y=document.querySelectorAll('.collection-list input[type="checkbox"]'),m=document.getElementById("all-categories");function h(){let e=Array.from(y).some((e=>e.checked));m.classList.toggle("is-alternate",e)}y.forEach((function(e){e.addEventListener("change",h)}));var b=new Swiper(".myswiper",{allowTouchMove:!1});let g=document.querySelector(".swiper-next"),w=document.querySelector(".swiper-prev"),x=1;function k(){x--,b.slidePrev();var e=document.querySelector(".swiper-wrapper").getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:e,behavior:"smooth"}),1===x?document.querySelector(".contact-form-navigation-block .swiper-prev").style.display="none":document.querySelector(".contact-form-navigation-block").style.display="block"}function S(e){const t=e.target,n=t.id.split("_")[1],r=t.id.split("_")[0].replace("checkbox",""),o=document.getElementById(`checkbox${r}_group`);let c=o.value?o.value.split(",").map((e=>e.trim())):[];t.checked?c.includes(n)||c.push(n):c=c.filter((e=>e!==n)),o.value=c.join(", ")}g.addEventListener("click",(function(){!function(e){var t=document.querySelector(".swiper-slide-active").querySelectorAll(".contact-form-input-row");let n=!1;for(let e=0;e<t.length;e++){let o=t[e].querySelectorAll("select"),c=t[e].querySelectorAll('input[type="text"]'),i=t[e].querySelector(".contact-form_error-text");var r=t[e].querySelectorAll('input[type="checkbox"]');let a=!1;o.length>0&&o.forEach((function(e){if(!e.value)return i.style.display="block",void(n=!0);i.style.display="none",n=!1})),c.length>0&&c.forEach((function(e){if(!e.value)return i.style.display="block",void(n=!0);i.style.display="none",n=!1})),r.length>0&&r.forEach((function(e){e.checked&&(a=!0,i.style.display="none")})),r.length>0&&(a||(i.style.display="block",n=!0))}if(!n){x++,b.slideNext();let e=120;var o=document.querySelector(".swiper-wrapper").getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:o,behavior:"smooth"}),2===x?(document.querySelector(".contact-form-navigation-block .swiper-prev").style.display="flex",document.querySelector(".contact-form-navigation-block .swiper-prev").addEventListener("click",(function(){k()}))):document.querySelector(".contact-form-navigation-block").style.display="none"}}()})),w.addEventListener("click",(function(){k()})),document.querySelectorAll('input[type="checkbox"][id^="checkbox"]').forEach((e=>{e.addEventListener("click",S)}))}()}();
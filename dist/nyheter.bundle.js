!function(){"use strict";var e,t,n,r,o,c,a,i,u,s,f,l,d,p,v={999:function(e,t,n){var r=n(81),o=n.n(r),c=n(645),a=n.n(c)()(o());a.push([e.id,".button:has(input[type=checkbox]:checked){background-color:#000;color:#fff}",""]),t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(a[u]=!0)}for(var s=0;s<e.length;s++){var f=[].concat(e[s]);r&&a[f[0]]||(void 0!==c&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=c),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var u=e[i],s=r.base?u[0]+r.base:u[0],f=c[s]||0,l="".concat(s," ").concat(f);c[s]=f+1;var d=n(l),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var v=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var u=r(e,o),s=0;s<c.length;s++){var f=n(c[s]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}c=u}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return v[e](n,n.exports,h),n.exports}h.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(t,{a:t}),t},h.d=function(e,t){for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h.nc=void 0,e=h(379),t=h.n(e),n=h(795),r=h.n(n),o=h(569),c=h.n(o),a=h(565),i=h.n(a),u=h(216),s=h.n(u),f=h(589),l=h.n(f),d=h(999),(p={}).styleTagTransform=l(),p.setAttributes=i(),p.insert=c().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=s(),t()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals,document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelectorAll('.collection-list input[type="checkbox"]'),t=document.getElementById("all-categories");function n(){let n=Array.from(e).some((e=>e.checked));t.classList.toggle("is-alternate",n)}e.forEach((function(e){e.addEventListener("change",n)}))}))}();
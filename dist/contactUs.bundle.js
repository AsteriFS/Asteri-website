!function(){var t={573:function(){const t=document.querySelector("#form-phone"),e=document.querySelector("#form-submit");let r=!1;const n=()=>{r?(e.disabled=!1,e.classList.remove("is-disabled")):(e.disabled=!0,e.classList.add("is-disabled"))};t.addEventListener("input",(e=>{e.target.value.match(/^(?:\+\s*46\s*)?0?[1-9]\d{7,9}$/)?(r=!0,t.classList.remove("input-error-state")):(r=!1,t.classList.add("input-error-state")),n()})),n()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";r(573)}()}();
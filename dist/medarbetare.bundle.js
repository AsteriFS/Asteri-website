(()=>{var e={573:()=>{const e=document.querySelector("#form-phone"),t=document.querySelector("#form-submit");let r=!1;const s=()=>{r?(t.disabled=!1,t.classList.remove("is-disabled")):(t.disabled=!0,t.classList.add("is-disabled"))};e&&(e.addEventListener("input",(t=>{t.target.value.match(/^(?:\+\s*46\s*)?0?[1-9]\d{7,9}$/)?(r=!0,e.classList.remove("input-error-state")):(r=!1,e.classList.add("input-error-state")),s()})),s())}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(573),$(".team_block-info").each((function(){var e=!0;$(this).find(".team_block-info-contact").each((function(){if(!$(this).hasClass("w-condition-invisible"))return e=!1,!1})),e&&$(this).find(".team_block-devider").hide()}))})()})();
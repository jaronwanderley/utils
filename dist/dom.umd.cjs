!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Dom={})}(this,(function(e){"use strict";const t=e=>{const{tagName:i,id:o,parentNode:s}=e,n="BODY";if(i===n)return n;if(o)return`#${o}`;let r=1;for(let t=e;t.previousElementSibling;t=t.previousElementSibling)r++;return`${t(s)}>${i}:nth-child(${r})`.toLowerCase()};e.createEl=e=>document.createElement(e),e.getSelector=t,e.platform=()=>{const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return{isMobile:e,isDesktop:!e,isDark:t,isLight:!t}},e.removeClass=(e,t)=>t.split(" ").map((t=>e.classList.remove(t))),e.setClass=(e,t)=>t.split(" ").map((t=>e.classList.add(t))),e.setStyle=(e,t)=>Object.entries(t).map((([t,i])=>e.style[t]=i)),e.typeOf=e=>"object"==typeof e&&null!=e?e.constructor.name:{}.toString?.call(e)?.match(/\s(\w+)/)?.[1],Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

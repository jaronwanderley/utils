(function(o,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(o=typeof globalThis<"u"?globalThis:o||self,i(o.Cookies={}))})(this,function(o){"use strict";const i=t=>{const e=new Date;return e.setDate(e.getDate()+t),e},d=t=>document.cookie.split(";").map(e=>e.trim().split("=")).find(([e])=>e===t)?.[1],s=(t,e,n)=>{document.cookie=`${t}=${e};${n&&` expires=${i(n).toUTCString()};`}`},u=t=>{document.cookie=`${t}=; expires=${i(-9).toUTCString()};`};o.deleteCookie=u,o.getCookie=d,o.setCookie=s,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

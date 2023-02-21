(function(n,m){typeof exports=="object"&&typeof module<"u"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(n=typeof globalThis<"u"?globalThis:n||self,m(n.Utils={}))})(this,function(n){"use strict";const m=(t=0,e=0,o=1)=>Array(Math.floor((e-t)/o+1)).fill(0).map((a,s)=>o*s+t),y=t=>new Date(t.getTime()),g=(t,e=0)=>{const o=y(t);return o.setDate(t.getDate()+e),o},h=t=>{const e=new Date;return e.setDate(e.getDate()+t),e},S=t=>g(t,-t.getDay()),k=t=>g(t,-t.getDate()+1),D=(t,e=1)=>Array(e).fill(0).map((o,a)=>g(y(t),a)),C=t=>new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),j=t=>D(S(t),7),_=t=>D(k(t),C(t)),F=t=>document.cookie.split(";").map(e=>e.trim().split("=")).find(([e])=>e===t)?.[1],L=(t,e,o)=>{document.cookie=`${t}=${e};${o&&` expires=${h(o).toUTCString()};`}`},A=t=>{document.cookie=`${t}=; expires=${h(-9).toUTCString()};`},p=t=>typeof t=="object"&&t!=null?t.constructor.name:{}.toString?.call(t)?.match(/\s(\w+)/)?.[1],B=t=>document.createElement(t),E=(t,e)=>e.split(" ").map(o=>t.classList.add(o)),N=(t,e)=>e.split(" ").map(o=>t.classList.remove(o)),z=(t,e)=>Object.entries(e).map(([o,a])=>t.style[o]=a),M=t=>{const{tagName:e,id:o,parentNode:a}=t,s="BODY";if(e===s)return s;if(o)return`#${o}`;let c=1;for(let r=t;r.previousElementSibling;r=r.previousElementSibling)c++;return`${M(a)}>${e}:nth-child(${c})`.toLowerCase()},I=()=>{const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return{isMobile:t,isDesktop:!t,isDark:e,isLight:!e}},O=t=>t.normalize("NFD").replace(/[\u0300-\u036F]/g,""),w=t=>t.replace(/[A-Z]/g,e=>`_${e}`).replace(/[^\p{L}]/gu,"_").split("_").filter(e=>e),b=t=>w(O(t)).map(e=>e.toLowerCase()).join("_"),T=(t,e=!1)=>(e?"_":"")+b(t).replace(/[^a-zA-Z0-9]+(.)/g,(o,a)=>a.toUpperCase()),U=t=>T(t),W=t=>T(t,!0),v=t=>b(t),q=t=>b(t).replaceAll("_","-"),J=t=>w(t).map(e=>e[0]?.toUpperCase()+e.slice(1)).join(" "),K=(t,e)=>{const o=e.x-t.x,a=e.y-t.y;return Math.sqrt(o*o+a*a)},Y=async t=>{try{return await(await fetch(t)).text()}catch{return""}},Z=async t=>{try{return await(await fetch(t)).json()}catch{return""}},R=(t,e,o)=>Math.min(Math.max(t,e),o),G=(t,e=window)=>t.split(/[\.\[\]]+/).filter(o=>o!=="").reduce((o,a)=>o?o[parseInt(a)?parseInt(a):a]:null,e||self),H=(t,e=window,o)=>{const a=t.split(/[\]\[.]/).filter(s=>!!s);return a.reduce((s,c,r,i)=>r+1===a.length?s[c]=o:s[c]=s[c]?s[c]:isNaN(parseFloat(i[r+1]))?{}:[],e)},Q=(t={})=>{const e=(a,s)=>a?`${a}.${s}`:s,o=(a={},s="")=>Object.entries(a).reduce((c,[r,i])=>{const d=e(s,r);return p(i)==="Object"?c.concat(o(i,d)):c.concat(d)},[]);return o(t)},V=()=>{const t="myStore",e="readwrite",o="on",a=`${o}success`,s="error",c=o+s,r="result",i=indexedDB.open(location.origin),d=(l,u,...X)=>new Promise(($,P)=>{i[a]=()=>{const f=i[r].transaction(t,u).objectStore(t)[l](...X);f[a]=()=>l==="get"?$(f[r]):$(),f[c]=()=>P(f[s])},i[c]=()=>P(i[s])});return(()=>new Promise((l,u)=>{i.onupgradeneeded=()=>{i[r].createObjectStore(t),l()},i[c]=()=>u(i[s])}))(),{get:l=>d("get","readonly",l),set:(l,u)=>d("put",e,u,l),remove:l=>d("delete",e,l)}};n.addDaysTo=g,n.clamp=R,n.clonedDate=y,n.createEl=B,n.daysFrom=D,n.deleteCookie=A,n.firstDayOfMonth=k,n.firstDayOfWeek=S,n.fromToday=h,n.get=G,n.getCookie=F,n.getDistance=K,n.getListOfPaths=Q,n.getMonth=_,n.getSelector=M,n.getWeek=j,n.loadJson=Z,n.loadText=Y,n.monthDays=C,n.normalizeText=O,n.platform=I,n.range=m,n.removeClass=N,n.set=H,n.setClass=E,n.setCookie=L,n.setStyle=z,n.tinyIDB=V,n.toCamel=U,n.toKebab=q,n.toPascal=W,n.toProperName=J,n.toSnake=v,n.toSplit=w,n.typeOf=p,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

var Object=function(a){"use strict";const f=e=>typeof e=="object"&&e!=null?e.constructor.name:{}.toString?.call(e)?.match(/\s(\w+)/)?.[1],u=(e,o=window)=>e.split(/[\.\[\]]+/).filter(s=>s!=="").reduce((s,t)=>s?s[parseInt(t)?parseInt(t):t]:null,o||self),d=(e,o=window,s)=>{const t=e.split(/[\]\[.]/).filter(n=>!!n);return t.reduce((n,c,l,i)=>l+1===t.length?n[c]=s:n[c]=n[c]?n[c]:isNaN(parseFloat(i[l+1]))?{}:[],o)},g=(e={})=>{const o=(t,n)=>t?`${t}.${n}`:n,s=(t={},n="")=>Object.entries(t).reduce((c,[l,i])=>{const r=o(n,l);return f(i)==="Object"?c.concat(s(i,r)):c.concat(r)},[]);return s(e)};return a.get=u,a.getListOfPaths=g,a.set=d,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),a}({});

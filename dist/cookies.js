const i = (t) => {
  const o = new Date();
  return o.setDate(o.getDate() + t), o;
}, n = (t) => document.cookie.split(";").map((o) => o.trim().split("=")).find(([o]) => o === t)?.[1], c = (t, o, e) => {
  document.cookie = `${t}=${o};${e && ` expires=${i(e).toUTCString()};`}`;
}, s = (t) => {
  document.cookie = `${t}=; expires=${i(-9).toUTCString()};`;
};
export {
  s as deleteCookie,
  n as getCookie,
  c as setCookie
};

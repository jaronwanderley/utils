const A = (t = 0, e = 0, o = 1) => {
  const { floor: n, abs: s } = Math;
  return o === 0 ? [] : (o = (e < t ? -1 : 1) * s(o), Array(n((e - t) / o) + 1).fill(0).map((r, a) => o * a + t));
}, y = (t) => new Date(t.getTime()), m = (t, e = 0) => {
  const o = y(t);
  return o.setDate(t.getDate() + e), o;
}, h = (t) => {
  const e = new Date();
  return e.setDate(e.getDate() + t), e;
}, $ = (t) => m(t, -t.getDay()), k = (t) => m(t, -t.getDate() + 1), D = (t, e = 1) => Array(e).fill(0).map((o, n) => m(y(t), n)), C = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(), F = (t) => D($(t), 7), L = (t) => D(k(t), C(t)), B = (t) => document.cookie.split(";").map((e) => e.trim().split("=")).find(([e]) => e === t)?.[1], E = (t, e, o) => {
  document.cookie = `${t}=${e};${o && ` expires=${h(o).toUTCString()};`}`;
}, N = (t) => {
  document.cookie = `${t}=; expires=${h(-9).toUTCString()};`;
}, M = (t) => typeof t == "object" && t != null ? t.constructor.name : {}.toString?.call(t)?.match(/\s(\w+)/)?.[1], z = (t) => document.createElement(t), I = (t, e) => e.split(" ").map((o) => t.classList.add(o)), U = (t, e) => e.split(" ").map((o) => t.classList.remove(o)), q = (t, e) => Object.entries(e).map(([o, n]) => t.style[o] = n), O = (t) => {
  if (!t)
    return;
  const {
    tagName: e,
    id: o,
    parentNode: n
  } = t, s = "BODY";
  if (e === s)
    return s;
  if (o)
    return `#${o}`;
  let r = 1;
  for (let a = t; a.previousElementSibling; a = a.previousElementSibling)
    r++;
  return `${O(n)}>${e}:nth-child(${r})`.toLowerCase();
}, W = () => {
  const t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    isMobile: t,
    isDesktop: !t,
    isDark: e,
    isLight: !e
  };
}, x = (t) => t.normalize("NFD").replace(/[\u0300-\u036F]/g, ""), w = (t) => t.replace(/[A-Z]/g, (e) => `_${e}`).replace(/[^\p{L}]/gu, "_").split("_").filter((e) => e), g = (t) => w(x(t)).map((e) => e.toLowerCase()).join("_"), b = (t, e = !1) => ((e ? "_" : "") + g(t)).replace(/[^a-zA-Z0-9]+(.)/g, (o, n) => n.toUpperCase()), Y = (t) => b(t), Z = (t) => b(t, !0), J = (t) => g(t), K = (t) => g(t).replaceAll("_", "-"), R = (t) => w(t).map((e) => e[0]?.toUpperCase() + e.slice(1)).join(" "), v = (t, e) => {
  const o = e.x - t.x, n = e.y - t.y;
  return Math.sqrt(o * o + n * n);
}, G = async (t) => {
  try {
    return await (await fetch(t)).text();
  } catch {
    return "";
  }
}, H = async (t) => {
  try {
    return await (await fetch(t)).json();
  } catch {
    return "";
  }
}, Q = (t, e, o) => Math.min(Math.max(t, e), o), V = (t = "", e = window) => t.split(/[\.\[\]]+/).filter((o) => o !== "").reduce((o, n) => o ? o[parseInt(n) ? parseInt(n) : n] : null, e), X = (t, e = window, o) => {
  const n = t.split(/[\]\[.]/).filter((s) => !!s);
  return n.reduce((s, r, a, c) => a + 1 === n.length ? s[r] = o : s[r] = s[r] ? s[r] : isNaN(parseFloat(c[a + 1])) ? {} : [], e);
}, tt = (t = {}) => {
  const e = (n, s) => n ? `${n}.${s}` : s, o = (n = {}, s = "") => Object.entries(n).reduce((r, [a, c]) => {
    const l = e(s, a);
    return M(c) === "Object" ? r.concat(o(c, l)) : r.concat(l);
  }, []);
  return o(t);
}, et = () => {
  const t = "myStore", e = "readwrite", o = "on", n = `${o}success`, s = "error", r = o + s, a = "result", c = indexedDB.open(location.origin), l = (i, u, ...S) => new Promise((p, f) => {
    c[n] = () => {
      const d = c[a].transaction(t, u).objectStore(t)[i](...S);
      d[n] = () => i === "get" ? p(d[a]) : p(), d[r] = () => f(d[s]);
    }, c[r] = () => f(c[s]);
  });
  return (() => new Promise((i, u) => {
    c.onupgradeneeded = () => {
      c[a].createObjectStore(t), i();
    }, c[r] = () => u(c[s]);
  }))(), {
    get: (i) => l("get", "readonly", i),
    set: (i, u) => l("put", e, u, i),
    remove: (i) => l("delete", e, i)
  };
};
export {
  m as addDaysTo,
  Q as clamp,
  y as clonedDate,
  z as createEl,
  D as daysFrom,
  N as deleteCookie,
  k as firstDayOfMonth,
  $ as firstDayOfWeek,
  h as fromToday,
  V as get,
  B as getCookie,
  v as getDistance,
  tt as getListOfPaths,
  L as getMonth,
  O as getSelector,
  F as getWeek,
  H as loadJson,
  G as loadText,
  C as monthDays,
  x as normalizeText,
  W as platform,
  A as range,
  U as removeClass,
  X as set,
  I as setClass,
  E as setCookie,
  q as setStyle,
  et as tinyIDB,
  Y as toCamel,
  K as toKebab,
  Z as toPascal,
  R as toProperName,
  J as toSnake,
  w as toSplit,
  M as typeOf
};

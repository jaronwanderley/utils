const A = (t = 0, e = 0, o = 1) => Array(Math.floor((e - t) / o + 1)).fill(0).map((n, s) => o * s + t), y = (t) => new Date(t.getTime()), p = (t, e = 0) => {
  const o = y(t);
  return o.setDate(t.getDate() + e), o;
}, h = (t) => {
  const e = new Date();
  return e.setDate(e.getDate() + t), e;
}, $ = (t) => p(t, -t.getDay()), k = (t) => p(t, -t.getDate() + 1), D = (t, e = 1) => Array(e).fill(0).map((o, n) => p(y(t), n)), C = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(), F = (t) => D($(t), 7), L = (t) => D(k(t), C(t)), B = (t) => document.cookie.split(";").map((e) => e.trim().split("=")).find(([e]) => e === t)?.[1], E = (t, e, o) => {
  document.cookie = `${t}=${e};${o && ` expires=${h(o).toUTCString()};`}`;
}, N = (t) => {
  document.cookie = `${t}=; expires=${h(-9).toUTCString()};`;
}, M = (t) => typeof t == "object" && t != null ? t.constructor.name : {}.toString?.call(t)?.match(/\s(\w+)/)?.[1], z = (t) => document.createElement(t), I = (t, e) => e.split(" ").map((o) => t.classList.add(o)), U = (t, e) => e.split(" ").map((o) => t.classList.remove(o)), q = (t, e) => Object.entries(e).map(([o, n]) => t.style[o] = n), O = (t) => {
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
  for (let c = t; c.previousElementSibling; c = c.previousElementSibling)
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
}, x = (t) => t.normalize("NFD").replace(/[\u0300-\u036F]/g, ""), w = (t) => t.replace(/[A-Z]/g, (e) => `_${e}`).replace(/[^\p{L}]/gu, "_").split("_").filter((e) => e), u = (t) => w(x(t)).map((e) => e.toLowerCase()).join("_"), b = (t, e = !1) => (e ? "_" : "") + u(t).replace(/[^a-zA-Z0-9]+(.)/g, (o, n) => n.toUpperCase()), Y = (t) => b(t), Z = (t) => b(t, !0), J = (t) => u(t), K = (t) => u(t).replaceAll("_", "-"), R = (t) => w(t).map((e) => e[0]?.toUpperCase() + e.slice(1)).join(" "), v = (t, e) => {
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
}, Q = (t, e, o) => Math.min(Math.max(t, e), o), V = (t, e = window) => t.split(/[\.\[\]]+/).filter((o) => o !== "").reduce((o, n) => o ? o[parseInt(n) ? parseInt(n) : n] : null, e || self), X = (t, e = window, o) => {
  const n = t.split(/[\]\[.]/).filter((s) => !!s);
  return n.reduce((s, r, c, a) => c + 1 === n.length ? s[r] = o : s[r] = s[r] ? s[r] : isNaN(parseFloat(a[c + 1])) ? {} : [], e);
}, tt = (t = {}) => {
  const e = (n, s) => n ? `${n}.${s}` : s, o = (n = {}, s = "") => Object.entries(n).reduce((r, [c, a]) => {
    const l = e(s, c);
    return M(a) === "Object" ? r.concat(o(a, l)) : r.concat(l);
  }, []);
  return o(t);
}, et = () => {
  const t = "myStore", e = "readwrite", o = "on", n = `${o}success`, s = "error", r = o + s, c = "result", a = indexedDB.open(location.origin), l = (i, d, ...S) => new Promise((g, f) => {
    a[n] = () => {
      const m = a[c].transaction(t, d).objectStore(t)[i](...S);
      m[n] = () => i === "get" ? g(m[c]) : g(), m[r] = () => f(m[s]);
    }, a[r] = () => f(a[s]);
  });
  return (() => new Promise((i, d) => {
    a.onupgradeneeded = () => {
      a[c].createObjectStore(t), i();
    }, a[r] = () => d(a[s]);
  }))(), {
    get: (i) => l("get", "readonly", i),
    set: (i, d) => l("put", e, d, i),
    remove: (i) => l("delete", e, i)
  };
};
export {
  p as addDaysTo,
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

const i = (s) => typeof s == "object" && s != null ? s.constructor.name : {}.toString?.call(s)?.match(/\s(\w+)/)?.[1], f = (s = "", a = window) => s.split(/[\.\[\]]+/).filter((c) => c !== "").reduce((c, t) => c ? c[parseInt(t) ? parseInt(t) : t] : null, a), d = (s, a = window, c) => {
  const t = s.split(/[\]\[.]/).filter((n) => !!n);
  return t.reduce((n, o, e, r) => e + 1 === t.length ? n[o] = c : n[o] = n[o] ? n[o] : isNaN(parseFloat(r[e + 1])) ? {} : [], a);
}, p = (s = {}) => {
  const a = (t, n) => t ? `${t}.${n}` : n, c = (t = {}, n = "") => Object.entries(t).reduce((o, [e, r]) => {
    const l = a(n, e);
    return i(r) === "Object" ? o.concat(c(r, l)) : o.concat(l);
  }, []);
  return c(s);
};
export {
  f as get,
  p as getListOfPaths,
  d as set
};

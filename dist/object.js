const i = (s) => typeof s == "object" && s != null ? s.constructor.name : {}.toString?.call(s)?.match(/\s(\w+)/)?.[1], f = (s, e = window) => s.split(/[\.\[\]]+/).filter((c) => c !== "").reduce((c, t) => c ? c[parseInt(t) ? parseInt(t) : t] : null, e || self), d = (s, e = window, c) => {
  const t = s.split(/[\]\[.]/).filter((n) => !!n);
  return t.reduce((n, o, a, r) => a + 1 === t.length ? n[o] = c : n[o] = n[o] ? n[o] : isNaN(parseFloat(r[a + 1])) ? {} : [], e);
}, p = (s = {}) => {
  const e = (t, n) => t ? `${t}.${n}` : n, c = (t = {}, n = "") => Object.entries(t).reduce((o, [a, r]) => {
    const l = e(n, a);
    return i(r) === "Object" ? o.concat(c(r, l)) : o.concat(l);
  }, []);
  return c(s);
};
export {
  f as get,
  p as getListOfPaths,
  d as set
};

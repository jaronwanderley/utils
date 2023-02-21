const B = () => {
  const r = "myStore", d = "readwrite", u = "on", l = `${u}success`, n = "error", c = u + n, a = "result", e = indexedDB.open(location.origin), i = (t, o, ...b) => new Promise((g, S) => {
    e[l] = () => {
      const s = e[a].transaction(r, o).objectStore(r)[t](...b);
      s[l] = () => t === "get" ? g(s[a]) : g(), s[c] = () => S(s[n]);
    }, e[c] = () => S(e[n]);
  });
  return (() => new Promise((t, o) => {
    e.onupgradeneeded = () => {
      e[a].createObjectStore(r), t();
    }, e[c] = () => o(e[n]);
  }))(), {
    get: (t) => i("get", "readonly", t),
    set: (t, o) => i("put", d, o, t),
    remove: (t) => i("delete", d, t)
  };
};
export {
  B as tinyIDB
};

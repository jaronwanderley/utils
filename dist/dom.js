const c = (t) => typeof t == "object" && t != null ? t.constructor.name : {}.toString?.call(t)?.match(/\s(\w+)/)?.[1], l = (t) => document.createElement(t), d = (t, e) => e.split(" ").map((s) => t.classList.add(s)), p = (t, e) => e.split(" ").map((s) => t.classList.remove(s)), m = (t, e) => Object.entries(e).map(([s, o]) => t.style[s] = o), a = (t) => {
  const {
    tagName: e,
    id: s,
    parentNode: o
  } = t, r = "BODY";
  if (e === r)
    return r;
  if (s)
    return `#${s}`;
  let n = 1;
  for (let i = t; i.previousElementSibling; i = i.previousElementSibling)
    n++;
  return `${a(o)}>${e}:nth-child(${n})`.toLowerCase();
}, h = () => {
  const t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    isMobile: t,
    isDesktop: !t,
    isDark: e,
    isLight: !e
  };
};
export {
  l as createEl,
  a as getSelector,
  h as platform,
  p as removeClass,
  d as setClass,
  m as setStyle,
  c as typeOf
};

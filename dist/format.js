const l = (e) => e.normalize("NFD").replace(/[\u0300-\u036F]/g, ""), a = (e) => e.replace(/[A-Z]/g, (o) => `_${o}`).replace(/[^\p{L}]/gu, "_").split("_").filter((o) => o), t = (e) => a(l(e)).map((o) => o.toLowerCase()).join("_"), s = (e, o = !1) => (o ? "_" : "") + t(e).replace(/[^a-zA-Z0-9]+(.)/g, (p, c) => c.toUpperCase()), r = (e) => s(e), n = (e) => s(e, !0), i = (e) => t(e), m = (e) => t(e).replaceAll("_", "-"), _ = (e) => a(e).map((o) => o[0]?.toUpperCase() + o.slice(1)).join(" ");
export {
  l as normalizeText,
  r as toCamel,
  m as toKebab,
  n as toPascal,
  _ as toProperName,
  i as toSnake,
  a as toSplit
};

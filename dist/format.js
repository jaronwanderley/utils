const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
const toSplit = (text) => text.replace(/[A-Z]/g, (char) => `_${char}`).replace(/[^\p{L}]/gu, "_").split("_").filter((e) => e);
const baseFormat = (text) => toSplit(normalizeText(text)).map((word) => word.toLowerCase()).join("_");
const joinFormat = (text, useStart = false) => (useStart ? "_" : "") + baseFormat(text).replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
const toCamel = (text) => joinFormat(text);
const toPascal = (text) => joinFormat(text, true);
const toSnake = (text) => baseFormat(text);
const toKebab = (text) => baseFormat(text).replaceAll("_", "-");
const toProperName = (text) => toSplit(text).map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");
export {
  normalizeText,
  toCamel,
  toKebab,
  toPascal,
  toProperName,
  toSnake,
  toSplit
};

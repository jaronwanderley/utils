const range = (start = 0, end = 0, step = 1) => Array(Math.floor((end - start) / step + 1)).fill(0).map((_, index) => step * index + start);
const typeOf = (element) => typeof element == "object" && element != null ? element.constructor.name : {}.toString?.call(element)?.match(/\s(\w+)/)?.[1];
const createEl = (type) => document.createElement(type);
const setClass = (element, className) => className.split(" ").map((name) => element.classList.add(name));
const removeClass = (element, className) => className.split(" ").map((name) => element.classList.remove(name));
const setStyle = (element, object) => Object.entries(object).map(([key, value]) => element.style[key] = value);
const getSelector = (element) => {
  const {
    tagName,
    id,
    parentNode
  } = element;
  const bodyTag = "BODY";
  if (tagName === bodyTag)
    return bodyTag;
  if (id)
    return `#${id}`;
  let childIndex = 1;
  for (let el = element; el.previousElementSibling; el = el.previousElementSibling)
    childIndex++;
  return `${getSelector(parentNode)}>${tagName}:nth-child(${childIndex})`.toLowerCase();
};
const platform = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    isMobile,
    isDesktop: !isMobile,
    isDark,
    isLight: !isDark
  };
};
const getDistance = (p1, p2) => {
  const x = p2.x - p1.x;
  const y = p2.y - p1.y;
  return Math.sqrt(x * x + y * y);
};
const loadText = async (path) => {
  try {
    const result = await fetch(path);
    return await result.text();
  } catch (error) {
    return "";
  }
};
const loadJson = async (path) => {
  try {
    const result = await fetch(path);
    return await result.json();
  } catch (error) {
    return "";
  }
};
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const get = (path, obj = window) => path.split(/[\.\[\]]+/).filter((e) => e !== "").reduce((prev, curr) => prev ? prev[parseInt(curr) ? parseInt(curr) : curr] : null, obj || self);
const set = (path, object = window, value) => {
  const parts = path.split(/[\]\[.]/).filter((string) => !!string);
  return parts.reduce((previous, current, index, array) => {
    if (index + 1 === parts.length)
      return previous[current] = value;
    return previous[current] = previous[current] ? previous[current] : !isNaN(parseFloat(array[index + 1])) ? [] : {};
  }, object);
};
const getListOfPaths = (obj = {}) => {
  const addDelimiter = (a, b) => a ? `${a}.${b}` : b;
  const paths = (obj2 = {}, head = "") => {
    return Object.entries(obj2).reduce((result, [key, value]) => {
      const fullPath = addDelimiter(head, key);
      return typeOf(value) === "Object" ? result.concat(paths(value, fullPath)) : result.concat(fullPath);
    }, []);
  };
  return paths(obj);
};
export {
  clamp,
  createEl,
  get,
  getDistance,
  getListOfPaths,
  getSelector,
  loadJson,
  loadText,
  platform,
  range,
  removeClass,
  set,
  setClass,
  setStyle,
  typeOf
};

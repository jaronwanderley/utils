const range = (start = 0, end = 0, step = 1) => Array(Math.floor((end - start) / step + 1)).fill(0).map((_, index) => step * index + start);
const clonedDate = (date) => new Date(date.getTime());
const addDaysTo = (date, days = 0) => {
  const newDate = clonedDate(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};
const fromToday = (days) => {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return today;
};
const firstDayOfWeek = (date) => addDaysTo(date, -date.getDay());
const firstDayOfMonth = (date) => addDaysTo(date, -date.getDate() + 1);
const daysFrom = (date, days = 1) => Array(days).fill(0).map((_, i) => addDaysTo(clonedDate(date), i));
const monthDays = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const getWeek = (date) => daysFrom(firstDayOfWeek(date), 7);
const getMonth = (date) => daysFrom(firstDayOfMonth(date), monthDays(date));
const getCookie = (name) => document.cookie.split(";").map((pair) => pair.trim().split("=")).find(([key]) => key === name)?.[1];
const setCookie = (name, value, expireDays) => {
  document.cookie = `${name}=${value};${expireDays && ` expires=${fromToday(expireDays).toUTCString()};`}`;
};
const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=${fromToday(-9).toUTCString()};`;
};
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
const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
const toSplit = (text) => text.replace(/[A-Z]/g, (char) => `_${char}`).replace(/[^\p{L}]/gu, "_").split("_").filter((e) => e);
const baseFormat = (text) => toSplit(normalizeText(text)).map((word) => word.toLowerCase()).join("_");
const joinFormat = (text, useStart = false) => (useStart ? "_" : "") + baseFormat(text).replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
const toCamel = (text) => joinFormat(text);
const toPascal = (text) => joinFormat(text, true);
const toSnake = (text) => baseFormat(text);
const toKebab = (text) => baseFormat(text).replaceAll("_", "-");
const toProperName = (text) => toSplit(text).map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");
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
const tinyIDB = () => {
  const myStore = "myStore";
  const readwrite = "readwrite";
  const on = "on";
  const onSuccess = `${on}success`;
  const error = "error";
  const onError = on + error;
  const result = "result";
  const loadingDB = indexedDB.open(location.origin);
  const use = (method, type, ...rest) => new Promise((resolve, reject) => {
    loadingDB[onSuccess] = () => {
      const database = loadingDB[result];
      const transaction = database.transaction(myStore, type);
      const store = transaction.objectStore(myStore);
      const useRequest = store[method](...rest);
      useRequest[onSuccess] = () => method === "get" ? resolve(useRequest[result]) : resolve();
      useRequest[onError] = () => reject(useRequest[error]);
    };
    loadingDB[onError] = () => reject(loadingDB[error]);
  });
  const initialize = () => new Promise((resolve, reject) => {
    loadingDB.onupgradeneeded = () => {
      loadingDB[result].createObjectStore(myStore);
      resolve();
    };
    loadingDB[onError] = () => reject(loadingDB[error]);
  });
  initialize();
  return {
    get: (key) => use("get", "readonly", key),
    set: (key, value) => use("put", readwrite, value, key),
    remove: (key) => use("delete", readwrite, key)
  };
};
export {
  addDaysTo,
  clamp,
  clonedDate,
  createEl,
  daysFrom,
  deleteCookie,
  firstDayOfMonth,
  firstDayOfWeek,
  fromToday,
  get,
  getCookie,
  getDistance,
  getListOfPaths,
  getMonth,
  getSelector,
  getWeek,
  loadJson,
  loadText,
  monthDays,
  normalizeText,
  platform,
  range,
  removeClass,
  set,
  setClass,
  setCookie,
  setStyle,
  tinyIDB,
  toCamel,
  toKebab,
  toPascal,
  toProperName,
  toSnake,
  toSplit,
  typeOf
};

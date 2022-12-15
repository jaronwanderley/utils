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
export {
  createEl,
  getSelector,
  platform,
  removeClass,
  setClass,
  setStyle,
  typeOf
};

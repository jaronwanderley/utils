const typeOf = (element) => typeof element == "object" && element != null ? element.constructor.name : {}.toString?.call(element)?.match(/\s(\w+)/)?.[1];
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
  get,
  getListOfPaths,
  set
};

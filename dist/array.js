const range = (start = 0, end = 0, step = 1) => Array(Math.floor((end - start) / step + 1)).fill(0).map((_, index) => step * index + start);
export {
  range
};

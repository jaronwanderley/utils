const n = (o = 0, a = 0, r = 1) => Array(Math.floor((a - o) / r + 1)).fill(0).map((f, l) => r * l + o);
export {
  n as range
};

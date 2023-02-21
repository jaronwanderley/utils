const i = (o = 0, n = 0, r = 1) => {
  const { floor: a, abs: f } = Math;
  return r === 0 ? [] : (r = (n < o ? -1 : 1) * f(r), Array(a((n - o) / r) + 1).fill(0).map((c, l) => r * l + o));
};
export {
  i as range
};

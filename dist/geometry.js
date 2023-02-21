const e = (t, n) => {
  const s = n.x - t.x, c = n.y - t.y;
  return Math.sqrt(s * s + c * c);
};
export {
  e as getDistance
};

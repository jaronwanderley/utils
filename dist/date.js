const a = (t) => new Date(t.getTime()), o = (t, e = 0) => {
  const n = a(t);
  return n.setDate(t.getDate() + e), n;
}, y = (t) => {
  const e = new Date();
  return e.setDate(e.getDate() + t), e;
}, c = (t) => o(t, -t.getDay()), r = (t) => o(t, -t.getDate() + 1), s = (t, e = 1) => Array(e).fill(0).map((n, D) => o(a(t), D)), g = (t) => new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(), f = (t) => s(c(t), 7), l = (t) => s(r(t), g(t));
export {
  o as addDaysTo,
  a as clonedDate,
  s as daysFrom,
  r as firstDayOfMonth,
  c as firstDayOfWeek,
  y as fromToday,
  l as getMonth,
  f as getWeek,
  g as monthDays
};

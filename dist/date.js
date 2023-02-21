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
export {
  addDaysTo,
  clonedDate,
  daysFrom,
  firstDayOfMonth,
  firstDayOfWeek,
  fromToday,
  getMonth,
  getWeek,
  monthDays
};

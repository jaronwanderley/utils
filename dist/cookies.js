const fromToday = (days) => {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return today;
};
const getCookie = (name) => document.cookie.split(";").map((pair) => pair.trim().split("=")).find(([key]) => key === name)?.[1];
const setCookie = (name, value, expireDays) => {
  document.cookie = `${name}=${value};${expireDays && ` expires=${fromToday(expireDays).toUTCString()};`}`;
};
const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=${fromToday(-9).toUTCString()};`;
};
export {
  deleteCookie,
  getCookie,
  setCookie
};

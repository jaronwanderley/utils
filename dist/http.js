const e = async (t) => {
  try {
    return await (await fetch(t)).text();
  } catch {
    return "";
  }
}, a = async (t) => {
  try {
    return await (await fetch(t)).json();
  } catch {
    return "";
  }
};
export {
  a as loadJson,
  e as loadText
};

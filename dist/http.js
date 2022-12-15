const loadText = async (path) => {
  try {
    const result = await fetch(path);
    return await result.text();
  } catch (error) {
    return "";
  }
};
const loadJson = async (path) => {
  try {
    const result = await fetch(path);
    return await result.json();
  } catch (error) {
    return "";
  }
};
export {
  loadJson,
  loadText
};

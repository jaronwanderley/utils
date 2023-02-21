const tinyIDB = () => {
  const myStore = "myStore";
  const readwrite = "readwrite";
  const on = "on";
  const onSuccess = `${on}success`;
  const error = "error";
  const onError = on + error;
  const result = "result";
  const loadingDB = indexedDB.open(location.origin);
  const use = (method, type, ...rest) => new Promise((resolve, reject) => {
    loadingDB[onSuccess] = () => {
      const database = loadingDB[result];
      const transaction = database.transaction(myStore, type);
      const store = transaction.objectStore(myStore);
      const useRequest = store[method](...rest);
      useRequest[onSuccess] = () => method === "get" ? resolve(useRequest[result]) : resolve();
      useRequest[onError] = () => reject(useRequest[error]);
    };
    loadingDB[onError] = () => reject(loadingDB[error]);
  });
  const initialize = () => new Promise((resolve, reject) => {
    loadingDB.onupgradeneeded = () => {
      loadingDB[result].createObjectStore(myStore);
      resolve();
    };
    loadingDB[onError] = () => reject(loadingDB[error]);
  });
  initialize();
  return {
    get: (key) => use("get", "readonly", key),
    set: (key, value) => use("put", readwrite, value, key),
    remove: (key) => use("delete", readwrite, key)
  };
};
export {
  tinyIDB
};

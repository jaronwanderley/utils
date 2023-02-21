export const tinyIDB = () => {
  const myStore = 'myStore'
  const readwrite = 'readwrite'
  const on = 'on'
  const onSuccess = `${on}success`
  const error = 'error'
  const onError = on + error
  const result = 'result'
  const loadingDB = indexedDB.open(location.origin) as any
  const use = (method: string, type: string, ...rest: any[]) => new Promise<void>((resolve, reject) => {
    loadingDB[onSuccess] = () => {
      const database = loadingDB[result]
      const transaction = database.transaction(myStore, type)
      const store = transaction.objectStore(myStore)
      const useRequest = store[method](...rest)
      useRequest[onSuccess] = () => (method === 'get')
        ? resolve(useRequest[result])
        : resolve()
      useRequest[onError] = () => reject(useRequest[error])
    }
    loadingDB[onError] = () => reject(loadingDB[error])
  })
  const initialize = () => new Promise<void>((resolve, reject) => {
    loadingDB.onupgradeneeded = () => {
      loadingDB[result].createObjectStore(myStore)
      resolve()
    }
    loadingDB[onError] = () => reject(loadingDB[error])
  })
  initialize()

  return {
    get: (key: string) => use('get', 'readonly', key),
    set: (key: string, value: any) => use('put', readwrite, value, key),
    remove: (key: string) => use('delete', readwrite, key),
  }
}

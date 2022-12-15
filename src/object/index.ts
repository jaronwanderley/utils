import { typeOf } from '../dom'

export const get = (path: string, obj: Window | Object = window) => path
  .split(/[\.\[\]]+/).filter(e => e !== '')
  .reduce((prev: any, curr) => prev ? prev[parseInt(curr) ? parseInt(curr) : curr] : null, obj || self)

export const set = (path: string, object: Window | Object = window, value: any) => {
  const parts = path.split(/[\]\[.]/).filter(string => !!string)
  return parts.reduce((previous: any, current, index, array) => {
    if (index + 1 === parts.length)
      return previous[current] = value
    return previous[current] = previous[current] ? previous[current] : !isNaN(parseFloat(array[index + 1])) ? [] : {}
  }, object)
}

export const getListOfPaths = (obj: object = {}) => {
  const addDelimiter = (a: string, b: string) => a ? `${a}.${b}` : b
  const paths = (obj: Object = {}, head = ''): any => {
    return Object.entries(obj)
      .reduce((result: any[], [key, value]) => {
        const fullPath = addDelimiter(head, key)
        return typeOf(value) === 'Object'
          ? result.concat(paths(value, fullPath))
          : result.concat(fullPath)
      }, [])
  }
  return paths(obj)
}

import { fromToday } from '../date'
export const getCookie = (name: string) => document.cookie
  .split(';')
  .map(pair => pair.trim().split('='))
  .find(([key]) => key === name)
  ?.[1]
export const setCookie = (name: string, value: string, expireDays: number) => {
  document.cookie = `${name}=${value};${expireDays && ` expires=${fromToday(expireDays).toUTCString()};`}`
}
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=${fromToday(-9).toUTCString()};`
}

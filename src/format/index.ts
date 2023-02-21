export const normalizeText = (text: string) => text
  .normalize('NFD')
  .replace(/[\u0300-\u036F]/g, '')

export const toSplit = (text: string) => text
  .replace(/[A-Z]/g, char => `_${char}`)
  .replace(/[^\p{L}]/gu, '_')
  .split('_')
  .filter(e => e)

const baseFormat = (text: string) => toSplit(normalizeText(text))
  .map(word => word.toLowerCase())
  .join('_')
const joinFormat = (text: string, useStart = false) => ((useStart ? '_' : '') + baseFormat(text))
  .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())

export const toCamel = (text: string) => joinFormat(text)
export const toPascal = (text: string) => joinFormat(text, true)
export const toSnake = (text: string) => baseFormat(text)
export const toKebab = (text: string) => baseFormat(text).replaceAll('_', '-')

export const toProperName = (text: string) => toSplit(text)
  .map(word => word[0]?.toUpperCase() + word.slice(1))
  .join(' ')

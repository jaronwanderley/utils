import { describe, expect, it } from 'vitest'
import {
  normalizeText,
  toCamel,
  toKebab,
  toPascal,
  toProperName,
  toSnake,
  toSplit,
} from './index'

describe('normalizeText', () => {
  it('Removes accents', () => {
    expect(normalizeText('São Paulo')).toBe('Sao Paulo')
    expect(normalizeText('João')).toBe('Joao')
  })
})

describe('toSplit', () => {
  it('Divide text into words separated by _', () => {
    expect(toSplit('helloWorld')).toEqual(['hello', 'World'])
    expect(toSplit('My text is separated by spaces')).toEqual([
      'My',
      'text',
      'is',
      'separated',
      'by',
      'spaces',
    ])
  })

  it('replaces characters not allowed with _', () => {
    expect(toSplit('hello-world, and @others!')).toEqual([
      'hello',
      'world',
      'and',
      'others',
    ])
  })
})

describe('toCamel', () => {
  it('transforms text into camelcase', () => {
    expect(toCamel('hello_world')).toBe('helloWorld')
    expect(toCamel('new-prop-name')).toBe('newPropName')
  })
})

describe('toPascal', () => {
  it('transforms text into Pascalcase', () => {
    expect(toPascal('hello_world')).toBe('HelloWorld')
    expect(toPascal('new-prop-name')).toBe('NewPropName')
  })
})

describe('toSnake', () => {
  it('transforms text into snake_case', () => {
    expect(toSnake('helloWorld')).toBe('hello_world')
    expect(toSnake('CSSPropName')).toBe('c_s_s_prop_name')
  })
})

describe('toKebab', () => {
  it('transforms text into Kebab-Case', () => {
    expect(toKebab('helloWorld')).toBe('hello-world')
    expect(toKebab('CSSPropName')).toBe('c-s-s-prop-name')
  })
})

describe('toProperName', () => {
  it('transforms text into proper name', () => {
    expect(toProperName('john doe')).toBe('John Doe')
    expect(toProperName('john-doe')).toBe('John Doe')
    expect(toProperName('john_doe')).toBe('John Doe')
    expect(toProperName('johnDoe')).toBe('John Doe')
    expect(toProperName('oneTwoThree')).toBe('One Two Three')
  })
})


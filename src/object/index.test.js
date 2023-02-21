import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'
import { get, getListOfPaths, set } from './index'

const dom = new JSDOM()
global.window = dom.window

describe('get', () => {
  it('retuns window if not passed any object', () => {
    expect(get()).toBe(window)
    expect(get('')).toBe(window)
  })

  it('retuns a Null value if path or object is undefined', () => {
    expect(get('ivalid.path')).toBeNull()
  })

  it('returns correct value for nested object', () => {
    const obj = {
      a: {
        b: {
          c: 'value',
        },
      },
    }
    expect(get('a.b.c', obj)).toBe('value')
  })

  it('returns correct value for array', () => {
    const obj = {
      a: [
        { b: 'value1' },
        {
          b: 'value2',
          c: {
            d: {
              e: [{ a: true }, { a: false }, { a: false }],
            },
          },
        },
      ],
    }
    expect(get('a[0].b', obj)).toBe('value1')
    expect(get('a[1].c.d.e[2].a', obj)).toBe(false)
  })

  it('returns null if path is not found', () => {
    const obj = {}
    expect(get('a.b.c', obj)).toBe(null)
  })
})

describe('set', () => {
  it('sets value for new path', () => {
    const obj = {}
    set('a.b.c', obj, 'value')
    expect(obj).toEqual({ a: { b: { c: 'value' } } })
  })

  it('updates value for existing path', () => {
    const obj = { a: { b: { c: 'old value' } } }
    set('a.b.c', obj, 'new value')
    expect(obj).toEqual({ a: { b: { c: 'new value' } } })
  })

  it('creates array if path contains index', () => {
    const obj = {}
    set('a[0].b', obj, 'value')
    expect(obj).toEqual({ a: [{ b: 'value' }] })
  })
})

describe('getListOfPaths', () => {
  it('returns empty array for empty object', () => {
    expect(getListOfPaths({})).toEqual([])
  })

  it('returns correct array for nested object', () => {
    const obj = {
      a: {
        b: {
          c: 'value',
        },
        d: 'value',
      },
      e: 'value',
    }
    expect(getListOfPaths(obj)).toEqual(['a.b.c', 'a.d', 'e'])
  })
})


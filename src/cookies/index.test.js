import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'
import { deleteCookie, getCookie, setCookie } from './index'

const dom = new JSDOM()
global.document = dom.window.document

Object.defineProperty(global.document, 'cookie', {
  writable: true,
  value: 'foo=omnomnom',
})

describe('Tests for cookie functions', () => {
  it('Set and get a cookie', () => {
    setCookie('foo', 'bar', 1)
    expect(getCookie('foo')).toBe('bar')
  })

  it('Delete a cookie', () => {
    setCookie('foo', 'bar', 1)
    deleteCookie('foo')
    expect(getCookie('foo')).toBe('')
  })
})

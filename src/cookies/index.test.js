import { describe, expect, it } from 'vitest'
import { JSDOM } from 'jsdom'
import { deleteCookie, getCookie, setCookie } from './index'

const dom = new JSDOM()
global.document = dom.window.document

Object.defineProperty(global.document, 'cookie', {
  writable: true,
  value: 'foo=omnomnom',
})

describe('Testes para funções de cookies', () => {
  it('Setar e obter um cookie', () => {
    setCookie('foo', 'bar', 1)
    expect(getCookie('foo')).toBe('bar')
  })

  it('Deletar um cookie', () => {
    setCookie('foo', 'bar', 1)
    deleteCookie('foo')
    expect(getCookie('foo')).toBe('')
  })
})

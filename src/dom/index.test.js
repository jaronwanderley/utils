import { describe, expect, it, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import {
  createEl,
  getSelector,
  platform,
  removeClass,
  setClass,
  setStyle,
  typeOf,
} from './index'

const dom = new JSDOM()
global.window = dom.window
global.window.matchMedia = () => ({})
global.navigator = dom.window.navigator
global.document = dom.window.document
// Helper function to create a DOM element for testing
const createMockElement = (tag = 'div', id = '', className = '') => {
  const el = document.createElement(tag)
  if (id)
    el.id = id
  if (className)
    el.className = className
  return el
}

describe('typeOf', () => {
  it('returns the type of a string', () => {
    expect(typeOf('hello')).toBe('String')
  })

  it('returns the type of a number', () => {
    expect(typeOf(123)).toBe('Number')
  })

  it('returns the type of a boolean', () => {
    expect(typeOf(true)).toBe('Boolean')
  })

  it('returns the type of an array', () => {
    expect(typeOf([])).toBe('Array')
  })

  it('returns the type of an object', () => {
    expect(typeOf({})).toBe('Object')
  })

  it('returns the type of null', () => {
    expect(typeOf(null)).toBe('Null')
  })

  it('returns the type of undefined', () => {
    expect(typeOf(undefined)).toBe('Undefined')
  })

  it('should return the type of a primitive value', () => {
    expect(typeOf(42)).toBe('Number')
    expect(typeOf('hello')).toBe('String')
    expect(typeOf(true)).toBe('Boolean')
    expect(typeOf(undefined)).toBe('Undefined')
    expect(typeOf(null)).toBe('Null')
    expect(typeOf(Symbol('foo'))).toBe('Symbol')
  })

  it('should return the constructor name of an object', () => {
    expect(typeOf([])).toBe('Array')
    expect(typeOf({})).toBe('Object')
    expect(typeOf(new Date())).toBe('Date')
    expect(typeOf(/regex/)).toBe('RegExp')
    expect(typeOf(new Map())).toBe('Map')
    expect(typeOf(new Set())).toBe('Set')
  })
})

describe('createEl', () => {
  it('creates a div element', () => {
    const element = createEl('div')
    expect(element.tagName).toBe('DIV')
  })

  it('creates a p element', () => {
    const element = createEl('p')
    expect(element.tagName).toBe('P')
  })

  it('creates an input element', () => {
    const element = createEl('input')
    expect(element.tagName).toBe('INPUT')
  })

  it('creates a span element', () => {
    const el = createEl('span')
    expect(el.tagName).toBe('SPAN')
  })

  it('should create a new element with the given tag name', () => {
    const div = createEl('div')
    expect(div.tagName).toBe('DIV')
    const span = createEl('span')
    expect(span.tagName).toBe('SPAN')
  })
})

describe('setClass', () => {
  it('adds a class to an element', () => {
    const el = createMockElement('div')
    setClass(el, 'my-class')
    expect(el.classList.contains('my-class')).toBe(true)
  })

  it('adds multiple classes to an element', () => {
    const el = createMockElement('div')
    setClass(el, 'my-class other-class')
    expect(el.classList.contains('my-class')).toBe(true)
    expect(el.classList.contains('other-class')).toBe(true)
  })

  it('sets a single class', () => {
    const element = createEl('div')
    setClass(element, 'test-class')
    expect(element.classList.contains('test-class')).toBe(true)
  })

  it('sets multiple classes', () => {
    const element = createEl('div')
    setClass(element, 'class-one class-two class-three')
    expect(element.classList.contains('class-one')).toBe(true)
    expect(element.classList.contains('class-two')).toBe(true)
    expect(element.classList.contains('class-three')).toBe(true)
  })

  it('should add the given class name(s) to an element', () => {
    const div = createEl('div')
    setClass(div, 'foo bar')
    expect(div.classList.contains('foo')).toBe(true)
    expect(div.classList.contains('bar')).toBe(true)
  })
})

describe('removeClass', () => {
  it('removes a class from an element', () => {
    const el = createMockElement('div')
    el.classList.add('my-class')
    removeClass(el, 'my-class')
    expect(el.classList.contains('my-class')).toBe(false)
  })

  it('removes multiple classes from an element', () => {
    const el = createMockElement('div')
    el.classList.add('my-class', 'other-class')
    removeClass(el, 'my-class other-class')
    expect(el.classList.contains('my-class')).toBe(false)
    expect(el.classList.contains('other-class')).toBe(false)
  })

  it('removes a single class', () => {
    const element = createEl('div')
    element.classList.add('test-class')
    removeClass(element, 'test-class')
    expect(element.classList.contains('test-class')).toBe(false)
  })

  it('removes multiple classes', () => {
    const element = createEl('div')
    element.classList.add('class-one', 'class-two', 'class-three')
    removeClass(element, 'class-two class-three')
    expect(element.classList.contains('class-one')).toBe(true)
    expect(element.classList.contains('class-two')).toBe(false)
    expect(element.classList.contains('class-three')).toBe(false)
  })

  it('should remove the given class name(s) from an element', () => {
    const div = createEl('div')
    setClass(div, 'foo bar')
    expect(div.classList.contains('foo')).toBe(true)
    expect(div.classList.contains('bar')).toBe(true)
    removeClass(div, 'foo')
    expect(div.classList.contains('foo')).toBe(false)
    expect(div.classList.contains('bar')).toBe(true)
  })
})

describe('setStyle', () => {
  it('sets style property of an element', () => {
    const el = createMockElement('div')
    setStyle(el, { backgroundColor: 'red' })
    expect(el.style.backgroundColor).toBe('red')
  })

  it('sets multiple style properties of an element', () => {
    const el = createMockElement('div')
    setStyle(el, { backgroundColor: 'red', color: 'white' })
    expect(el.style.backgroundColor).toBe('red')
    expect(el.style.color).toBe('white')
  })

  it('sets a single style', () => {
    const element = createEl('div')
    setStyle(element, { backgroundColor: 'red' })
    expect(element.style.backgroundColor).toBe('red')
  })

  it('sets multiple styles', () => {
    const element = createEl('div')
    setStyle(element, {
      backgroundColor: 'red',
      color: 'white',
      fontSize: '16px',
    })
    expect(element.style.backgroundColor).toBe('red')
    expect(element.style.color).toBe('white')
    expect(element.style.fontSize).toBe('16px')
  })

  it('should set the given style properties on an element', () => {
    const div = createEl('div')
    setStyle(div, {
      backgroundColor: 'red',
      color: 'white',
      fontSize: '16px',
    })
    expect(div.style.backgroundColor).toBe('red')
    expect(div.style.color).toBe('white')
    expect(div.style.fontSize).toBe('16px')
  })
})

describe('getSelector', () => {
  const div1 = createEl('div')
  const div2 = createEl('div')
  const div3 = createEl('div')
  const paragraph = createEl('p')
  div3.id = 'base'
  const span1 = createEl('span')
  const span2 = createEl('span')
  div1.appendChild(span1)
  div2.appendChild(div1)
  div3.appendChild(span2)
  div3.appendChild(paragraph)
  document.body.appendChild(div2)
  document.body.appendChild(div3)

  it('if not passed any element should return undefined', () => {
    expect(getSelector()).toBeUndefined()
  })

  it('should return a unique selector for div1', () => {
    expect(getSelector(div1)).toBe('body>div:nth-child(1)>div:nth-child(1)')
    expect(document.querySelector(getSelector(div1))).toBe(div1)
  })

  it('should return a unique selector for div2', () => {
    expect(getSelector(div2)).toBe('body>div:nth-child(1)')
    expect(document.querySelector(getSelector(div2))).toBe(div2)
  })

  it('should return a unique selector for div3', () => {
    expect(getSelector(div3)).toBe('#base')
    expect(document.querySelector(getSelector(div3))).toBe(div3)
  })

  it('should return a unique selector for span1', () => {
    expect(getSelector(span1)).toBe('body>div:nth-child(1)>div:nth-child(1)>span:nth-child(1)')
    expect(document.querySelector(getSelector(span1))).toBe(span1)
  })

  it('should return a unique selector for span2', () => {
    expect(getSelector(span2)).toBe('#base>span:nth-child(1)')
    expect(document.querySelector(getSelector(span2))).toBe(span2)
  })

  it('should return a unique selector for paragraph', () => {
    expect(getSelector(paragraph)).toBe('#base>p:nth-child(2)')
    expect(document.querySelector(getSelector(paragraph))).toBe(paragraph)
  })

  it('should return simple body to document.body', () => {
    expect(getSelector(document.body)).toBe('BODY')
    expect(document.querySelector(getSelector(document.body))).toBe(document.body)
  })
})

describe('platform', () => {
  describe('isMobile', () => {
    it('should return true on mobile user agents', () => {
      // Simulate a mobile user agent
      vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1')

      const result = platform().isMobile

      expect(result).toBe(true)
    })

    it('should return false on desktop user agents', () => {
      // Simulate a desktop user agent
      vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36')

      const result = platform().isMobile

      expect(result).toBe(false)
    })
  })

  describe('isDesktop', () => {
    it('should return true on desktop user agents', () => {
      // Simulate a desktop user agent
      vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36')

      const result = platform().isDesktop

      expect(result).toBe(true)
    })

    it('should return false on mobile user agents', () => {
      // Simulate a mobile user agent
      vi.spyOn(navigator, 'userAgent', 'get')
        .mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1')

      const result = platform().isDesktop

      expect(result).toBe(false)
    })
  })

  describe('isDark', () => {
    it('should return true when prefers-color-scheme is dark', () => {
      // Simulate a dark mode
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: true,
      })

      const result = platform().isDark

      expect(result).toBe(true)
    })

    it('should return false when prefers-color-scheme is light', () => {
      // Simulate a light mode
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: false,
      })

      const result = platform().isDark

      expect(result).toBe(false)
    })
  })

  describe('isLight', () => {
    it('should return true when prefers-color-scheme is light', () => {
      // Simulate a light mode
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: false,
      })

      const result = platform().isLight

      expect(result).toBe(true)
    })

    it('should return false when prefers-color-scheme is dark', () => {
      // Simulate a dark mode
      vi.spyOn(window, 'matchMedia').mockReturnValue({
        matches: true,
      })

      const result = platform().isLight

      expect(result).toBe(false)
    })
  })
})

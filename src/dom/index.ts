export const typeOf = (element: any) => typeof element == 'object' && element != null
  ? element.constructor.name
  : {}.toString?.call(element)?.match(/\s(\w+)/)?.[1]

export const createEl = (type: string) => document.createElement(type)

export const setClass = (element: HTMLElement, className: string) => className
  .split(' ')
  .map(name => element.classList.add(name))

export const removeClass = (element: HTMLElement, className: string) => className
  .split(' ')
  .map(name => element.classList.remove(name))

export const setStyle = (element: HTMLElement, object: Object) => Object
  .entries(object)
  .map(([key, value]: [any, any]) => element.style[key] = value)

export const getSelector = (element: HTMLElement): string | undefined => {
  if (!element)
    return
  const {
    tagName,
    id,
    parentNode,
  } = element

  const bodyTag = 'BODY'
  if (tagName === bodyTag)
    return bodyTag
  if (id)
    return `#${id}`

  let childIndex = 1
  for (let el = element; el.previousElementSibling; el = el.previousElementSibling as HTMLElement)
    childIndex++

  return `${getSelector(parentNode as HTMLElement)}>${tagName}:nth-child(${childIndex})`.toLowerCase()
}

export const platform = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return {
    isMobile,
    isDesktop: !isMobile,
    isDark,
    isLight: !isDark,
  }
}


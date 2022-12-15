export const loadText = async (path: string) => {
  try {
    const result = await fetch(path)
    return await result.text()
  }
  catch (error) {
    return ''
  }
}

export const loadJson = async (path: string) => {
  try {
    const result = await fetch(path)
    return await result.json()
  }
  catch (error) {
    return ''
  }
}

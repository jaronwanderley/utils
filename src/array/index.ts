export const range = (start = 0, end = 0, step = 1) => {
  const { floor, abs } = Math
  if (step === 0)
    return []
  step = (end < start ? -1 : 1) * abs(step)
  return Array(floor((end - start) / step) + 1)
    .fill(0)
    .map((_, index) => step * index + start)
}

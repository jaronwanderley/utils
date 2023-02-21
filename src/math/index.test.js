import { describe, expect, it } from 'vitest'
import { clamp } from './index'

describe('clamp', () => {
  it('should return the value when within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
    expect(clamp(-5, -10, 0)).toBe(-5)
    expect(clamp(0, -10, 10)).toBe(0)
  })

  it('should return the minimum value when below the range', () => {
    expect(clamp(-10, 0, 10)).toBe(0)
    expect(clamp(-15, -10, 0)).toBe(-10)
    expect(clamp(-20, -10, 10)).toBe(-10)
  })

  it('should return the maximum value when above the range', () => {
    expect(clamp(20, 0, 10)).toBe(10)
    expect(clamp(15, -10, 0)).toBe(0)
    expect(clamp(30, -10, 10)).toBe(10)
  })
})

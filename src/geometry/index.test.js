import { describe, expect, it } from 'vitest'
import { getDistance } from './index'

describe('getDistance', () => {
  it('returns the distance between two points with positive coordinates', () => {
    const p1 = { x: 0, y: 0 }
    const p2 = { x: 3, y: 4 }
    expect(getDistance(p1, p2)).toBe(5)
  })

  it('returns the distance between two points with negative coordinates', () => {
    const p1 = { x: -2, y: -3 }
    const p2 = { x: -5, y: -7 }
    expect(getDistance(p1, p2)).toBeCloseTo(5)
  })

  it('returns 0 for two equal points', () => {
    const p1 = { x: 1, y: 2 }
    const p2 = { x: 1, y: 2 }
    expect(getDistance(p1, p2)).toBe(0)
  })

  it('returns NaN if any of the points is invalid', () => {
    const p1 = { x: 1, y: 2 }
    const p2 = { x: 1 }
    expect(getDistance(p1, p2)).toBeNaN()
  })
})

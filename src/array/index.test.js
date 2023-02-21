import { describe, expect, it } from 'vitest'
import { range } from './index.ts'

describe('range', () => {
  it('Returns a array of zero if no arguments', () => {
    expect(range()).toEqual([0])
    expect(range(0)).toEqual([0])
  })

  it('Returns a array from zero to number if has 1 argument', () => {
    expect(range(0)).toEqual([0])
    expect(range(1)).toEqual([1, 0])
    expect(range(5)).toEqual([5, 4, 3, 2, 1, 0])
    expect(range(-2)).toEqual([-2, -1, 0])
  })

  it('Returns an array of integers in the specified range', () => {
    expect(range(0, 4)).toEqual([0, 1, 2, 3, 4])
    expect(range(2, 8, 2)).toEqual([2, 4, 6, 8])
    expect(range(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3])
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2, 1])
    expect(range(5, 1)).toEqual([5, 4, 3, 2, 1])
    expect(range(10, 5)).toEqual([10, 9, 8, 7, 6, 5])
  })

  it('Returns a empty array if the step is zero', () => {
    expect(range(1, 5, 0)).toEqual([])
    expect(range(50, 10, 0)).toEqual([])
  })
})

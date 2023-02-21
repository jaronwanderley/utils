import { describe, expect, it } from 'vitest'
import {
  addDaysTo,
  clonedDate,
  daysFrom,
  firstDayOfMonth,
  firstDayOfWeek,
  fromToday,
  getMonth,
  getWeek,
  monthDays,
} from './index'

const mapDates = arr => arr.map(date => date.toLocaleDateString()).join(',')
const rangeDates = (day, month, year, count) => Array(count).fill().map((_, index) => new Date(year, month - 1, day + index))

describe('clonedDate', () => {
  it('must clone a date correctly', () => {
    const originalDate = new Date(2023, 1, 11)
    const cloned = clonedDate(originalDate)
    expect(cloned).toEqual(originalDate)
    expect(cloned).not.toBe(originalDate)
  })
})

describe('addDaysTo', () => {
  it('You must add days to a date correctly', () => {
    const originalDate = new Date(2023, 1, 11)
    const expectedDate = new Date(2023, 1, 13)
    expect(addDaysTo(originalDate, 2)).toEqual(expectedDate)
  })
})

describe('fromToday', () => {
  it('must obtain the correct date from a number of days', () => {
    const today = new Date()
    const expectedDate = new Date(today.getTime() + (24 * 60 * 60 * 1000))
    expect(fromToday(1).toString()).toEqual(expectedDate.toString())
  })
})

describe('firstDayOfWeek', () => {
  it('You should get the first day of the week correctly', () => {
    const date = new Date(2023, 1, 11) // Saturday
    const expectedDate = new Date(2023, 1, 5) // Sunday
    expect(firstDayOfWeek(date)).toEqual(expectedDate)
  })
})

describe('firstDayOfMonth', () => {
  it('You must get the first day of the month correctly', () => {
    const date = new Date(2023, 1, 11) // 11/02/2023
    const expectedDate = new Date(2023, 1, 1) // 01/02/2023
    expect(firstDayOfMonth(date)).toEqual(expectedDate)
  })
})

describe('daysFrom', () => {
  it('You must get a list of days correctly', () => {
    const date = new Date(2023, 1, 11)
    const expectedDays = [new Date(2023, 1, 11), new Date(2023, 1, 12), new Date(2023, 1, 13)]
    expect(daysFrom(date, 3)).toEqual(expectedDays)
  })
})

describe('monthDays', () => {
  it('must obtain the number of days of the month correctly', () => {
    const date = new Date(2023, 1, 11) // february
    expect(monthDays(date)).toBe(28)
  })
})

describe('getWeek', () => {
  it('You should get a list of days of the week correctly', () => {
    const date = new Date(2023, 1, 9) // 09/02/2023
    const expectedDays = rangeDates(5, 2, 2023, 7)
    expect(mapDates(getWeek(date))).toBe(mapDates(expectedDays))
  })
})

describe('getMonth', () => {
  it('You should get a list of days of the month correctly', () => {
    const date = new Date(2023, 1, 9) // 09/02/2023
    const expectedDays = rangeDates(1, 2, 2023, 28)
    expect(mapDates(getMonth(date))).toBe(mapDates(expectedDays))
  })
})

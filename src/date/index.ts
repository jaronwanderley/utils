export const clonedDate = (date: Date) => new Date(date.getTime())

export const addDaysTo = (date: Date, days = 0) => {
  const newDate = clonedDate(date)
  newDate.setDate(date.getDate() + days)
  return newDate
}

export const fromToday = (days: number) => {
  const today = new Date()
  today.setDate(today.getDate() + days)
  return today
}

export const firstDayOfWeek = (date: Date) => addDaysTo(date, -date.getDay())

export const firstDayOfMonth = (date: Date) => addDaysTo(date, -date.getDate() + 1)

export const daysFrom = (date: Date, days = 1) => Array(days).fill(0).map((_, i) => addDaysTo(clonedDate(date), i))

export const monthDays = (date: Date) => (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())

export const getWeek = (date: Date) => daysFrom(firstDayOfWeek(date), 7)

export const getMonth = (date: Date) => daysFrom(firstDayOfMonth(date), monthDays(date))

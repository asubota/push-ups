import { TrackItem } from './types.ts'

const KEY = 'push-ups-v1'

export const saveData = (data: TrackItem[]): void => {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export const loadData = (): TrackItem[] => {
  const storedData = localStorage.getItem(KEY)
  return storedData ? (JSON.parse(storedData) as TrackItem[]) : []
}

const today = new Date()
const startOfToday = +new Date(today.getFullYear(), today.getMonth(), today.getDate())

export const getTodayValues = (items: TrackItem[]) => {
  return items.filter((item) => item.timestamp > startOfToday)
}

export const getSum = (items: TrackItem[]): number => {
  return items.reduce((acc, { value }) => acc + value, 0)
}

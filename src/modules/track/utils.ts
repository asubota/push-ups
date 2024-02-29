export interface TrackItem {
  value: number
  timestamp: number
}

const KEY = 'push-ups-v1'

export const saveData = (data: TrackItem[]): void => {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export const loadData = (): TrackItem[] => {
  const storedData = localStorage.getItem(KEY)
  return storedData ? JSON.parse(storedData) : []
}

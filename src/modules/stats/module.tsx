import { FC, useState } from 'react'
import { TrackItem } from '../../types.ts'
import { getSum, getTodayValues, loadData } from '../../utils.ts'
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material'

interface BasicCardProps {
  title: string
  value: number | string
  extraInfo?: string
  max?: boolean
}

const findLowestAndHighest = (items: TrackItem[]) => {
  const sortedData = items.slice().sort((a, b) => a.value - b.value)

  const min = sortedData[0]
  const max = sortedData[sortedData.length - 1]

  return { min, max }
}

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp)

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'short' })
  const year = date.getFullYear()

  return `${hours}:${minutes} ${day} ${month}, ${year}`
}

const getTotalByDay = (items: TrackItem[]): Record<string, number> => {
  const byDay: Record<string, TrackItem[]> = {}

  items.forEach((record) => {
    const date = new Date(record.timestamp)
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    const dayKey = `${day} ${month}, ${year}`

    if (!byDay[dayKey]) {
      byDay[dayKey] = []
    }

    byDay[dayKey].push(record)
  })

  const data: Record<string, number> = {}

  Object.keys(byDay).forEach((key) => {
    data[key] = getSum(byDay[key])
  })

  return data
}

const BasicCard: FC<BasicCardProps> = ({ title, value, extraInfo, max }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            ...(max && { color: 'secondary.main' }),
          }}
        >
          {value}

          {extraInfo && (
            <Typography sx={{ ml: 1.5 }} color="text.secondary" component="span">
              {extraInfo}
            </Typography>
          )}
        </Typography>
      </CardContent>
    </Card>
  )
}

export const StatsModule: FC = () => {
  const [history] = useState<TrackItem[]>(() => loadData())
  const total = getSum(history)
  const { min, max } = findLowestAndHighest(history)
  const today = getSum(getTodayValues(history))
  const byDay = getTotalByDay(history)
  const days = Object.keys(byDay)
  const dailyAverage = (total / days.length).toFixed(2)
  const dayMax = Object.values(byDay)
    .sort((a, b) => a - b)
    .reverse()[0]

  return (
    <>
      <Stack spacing={1}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
          <BasicCard title="Total" value={total} />
          <BasicCard title="Today" value={today} />
        </Box>

        <BasicCard title="Daily average" value={dailyAverage} />
        <BasicCard title="Min" value={min.value} extraInfo={formatDate(min.timestamp)} />
        <BasicCard title="Max" value={max.value} extraInfo={formatDate(max.timestamp)} />
      </Stack>

      <Divider sx={{ mt: 3, mb: 3 }} />

      <Stack spacing={1}>
        {Object.keys(byDay).map((key) => {
          return <BasicCard key={key} title={key} value={byDay[key]} max={dayMax === byDay[key]} />
        })}
      </Stack>
    </>
  )
}

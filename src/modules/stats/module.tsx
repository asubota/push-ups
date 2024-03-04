import { FC, useState } from 'react'
import { TrackItem } from '../../types.ts'
import { getSum, getTodayValues, loadData } from '../../utils.ts'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'

interface BasicCardProps {
  title: string
  value: number | string
  extraInfo?: string
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

const BasicCard: FC<BasicCardProps> = ({ title, value, extraInfo }) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
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
  const dailyAverage = (total / history.length).toFixed(2)
  const { min, max } = findLowestAndHighest(history)
  const today = getSum(getTodayValues(history))

  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <BasicCard title="Total" value={total} />
        <BasicCard title="Today" value={today} />
      </Box>

      <BasicCard title="Min" value={min.value} extraInfo={formatDate(min.timestamp)} />
      <BasicCard title="Max" value={max.value} extraInfo={formatDate(max.timestamp)} />

      <BasicCard title="Daily average" value={dailyAverage} />
    </Stack>
  )
}

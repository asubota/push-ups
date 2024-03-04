import { FC, useState } from 'react'
import { Box, Button, Slider, Typography } from '@mui/material'
import { getSum, getTodayValues, loadData, saveData } from './utils.ts'
import { TrackItem } from './types.ts'

export const TrackModule: FC = () => {
  const [history, setHistory] = useState<TrackItem[]>(loadData())
  const [value, setValue] = useState(0)
  const total = getSum(history)
  const today = getSum(getTodayValues(history))

  const handleChange = (_, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue)
    }
  }
  const handleTrack = () => {
    if (value > 0) {
      const updatedHistory = [...history, { value, timestamp: Date.now() }]

      setHistory(updatedHistory)
      saveData(updatedHistory)

      setValue(0)
    }
  }

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: '#fffcf3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Typography variant="h6" component="div" textAlign="left" alignSelf="flex-start" color="gray">
        {total}
      </Typography>

      <Typography variant="h4" component="div" textAlign="center">
        Today: {today}
      </Typography>

      <Slider value={value} onChange={handleChange} max={60} color="secondary" sx={{ mt: 4, mb: 4 }} />

      <Button
        variant="contained"
        color="primary"
        onClick={handleTrack}
        disabled={!value}
        sx={{
          borderRadius: '50%',
          width: '120px',
          height: '120px',
          fontSize: '32px',
        }}
      >
        {value}
      </Button>
    </Box>
  )
}

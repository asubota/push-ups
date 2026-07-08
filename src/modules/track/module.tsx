import { FC, useState } from 'react'
import { Box, Button, Divider, IconButton, Slider, Stack, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { TrackItem } from '../../types.ts'
import { getSum, getTodayValues, loadData, saveData } from '../../utils.ts'

export const TrackModule: FC = () => {
  const [history, setHistory] = useState<TrackItem[]>(loadData())
  const [value, setValue] = useState(0)
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
        Today
        <Divider sx={{ borderColor: 'secondary.main' }} />
        {today}
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

      <Stack direction="row" sx={{ gap: 4 }}>
        <IconButton color="secondary" sx={{ fontSize: '60px' }} onClick={() => setValue((v) => v - 1)}>
          <RemoveCircleIcon fontSize="inherit" />
        </IconButton>
        <IconButton color="secondary" sx={{ fontSize: '60px' }} onClick={() => setValue((v) => v + 1)}>
          <AddCircleIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  )
}

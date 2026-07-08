import { FC, useState } from 'react'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { TrackItem } from '../../types.ts'
import { getSum, getTodayValues, loadData, saveData } from '../../utils.ts'
import { RepGauge } from '../../components/rep-gauge.tsx'
import { PlusIcon, MinusIcon } from '../../components/icons.tsx'

const MAX_REPS = 60

export const TrackModule: FC = () => {
  const [history, setHistory] = useState<TrackItem[]>(loadData())
  const [value, setValue] = useState(0)
  const today = getSum(getTodayValues(history))

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
      <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.15em' }}>
        Today
      </Typography>
      <Typography variant="h4" sx={{ fontSize: '4rem', lineHeight: 1 }}>
        {today}
      </Typography>

      <Box sx={{ width: '100%', mt: 5, mb: 5 }}>
        <RepGauge value={value} max={MAX_REPS} onChange={setValue} />
      </Box>

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
          fontFamily: '"Big Shoulders Display", sans-serif',
          fontWeight: 800,
        }}
      >
        {value}
      </Button>

      <Stack direction="row" sx={{ gap: 4, mt: 3 }}>
        <IconButton color="secondary" sx={{ fontSize: '44px' }} onClick={() => setValue((v) => v - 1)}>
          <MinusIcon fontSize="inherit" />
        </IconButton>
        <IconButton color="secondary" sx={{ fontSize: '44px' }} onClick={() => setValue((v) => v + 1)}>
          <PlusIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  )
}

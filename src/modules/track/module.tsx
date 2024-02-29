import { FC, useState } from 'react'
import { Box, Button, Slider, Typography } from '@mui/material'

export const TrackModule: FC = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  const handleChange = (_, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue)
    }
  }

  const handleTrack = () => {
    setCount(count + value)
    setValue(0)
  }

  return (
    <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
      <Typography variant="h4" component="div" textAlign="center">
        Total: {count}
      </Typography>

      <Typography variant="h5" component="div" textAlign="center">
        {value}
      </Typography>

      <Slider value={value} onChange={handleChange} max={25} color="secondary" sx={{ mt: 3, mb: 3 }} />

      <Button variant="contained" color="primary" onClick={handleTrack}>
        Track
      </Button>
    </Box>
  )
}

import { FC, KeyboardEvent, PointerEvent, useCallback, useRef } from 'react'
import { Box } from '@mui/material'

interface RepGaugeProps {
  value: number
  max: number
  onChange: (value: number) => void
}

const TICKS = 30

export const RepGauge: FC<RepGaugeProps> = ({ value, max, onChange }) => {
  const trackRef = useRef<HTMLDivElement>(null)

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = trackRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
      onChange(Math.round(ratio * max))
    },
    [max, onChange],
  )

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    setFromClientX(event.clientX)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return
    setFromClientX(event.clientX)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault()
      onChange(Math.min(max, value + 1))
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault()
      onChange(Math.max(0, value - 1))
    }
  }

  const fillPercent = (Math.min(max, Math.max(0, value)) / max) * 100

  return (
    <Box
      ref={trackRef}
      role="slider"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label="Reps"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
      sx={{
        position: 'relative',
        width: '100%',
        height: 56,
        cursor: 'pointer',
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: 4,
          transform: 'translateY(-50%)',
          borderRadius: 2,
          backgroundColor: 'rgba(242, 241, 236, 0.12)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          height: 4,
          width: `${fillPercent}%`,
          transform: 'translateY(-50%)',
          borderRadius: 2,
          background: 'linear-gradient(90deg, #7cb342, #ff5a1f)',
        }}
      />

      <Box sx={{ position: 'absolute', inset: 0 }}>
        {Array.from({ length: TICKS + 1 }).map((_, index) => {
          const tickValue = (index * max) / TICKS
          const major = index % 5 === 0
          const passed = tickValue <= value

          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                left: `${(index / TICKS) * 100}%`,
                bottom: 6,
                width: '2px',
                height: major ? 16 : 8,
                backgroundColor: passed ? 'primary.main' : 'rgba(242, 241, 236, 0.25)',
                transform: 'translateX(-1px)',
              }}
            />
          )
        })}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: `${fillPercent}%`,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          border: '3px solid',
          borderColor: 'background.default',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 2px rgba(255, 90, 31, 0.35)',
        }}
      />
    </Box>
  )
}

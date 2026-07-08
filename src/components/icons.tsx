import { FC } from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const MenuIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <line x1="4" y1="7" x2="20" y2="7" {...stroke} />
    <line x1="4" y1="12" x2="20" y2="12" {...stroke} />
    <line x1="4" y1="17" x2="20" y2="17" {...stroke} />
  </SvgIcon>
)

export const ChevronLeftIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <polyline points="15 5 8 12 15 19" {...stroke} />
  </SvgIcon>
)

export const TrackIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <line x1="6" y1="12" x2="18" y2="12" {...stroke} />
    <line x1="4" y1="8.5" x2="4" y2="15.5" {...stroke} />
    <line x1="2.5" y1="10" x2="2.5" y2="14" {...stroke} />
    <line x1="20" y1="8.5" x2="20" y2="15.5" {...stroke} />
    <line x1="21.5" y1="10" x2="21.5" y2="14" {...stroke} />
  </SvgIcon>
)

export const StatsIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <line x1="6" y1="18" x2="6" y2="13" {...stroke} />
    <line x1="12" y1="18" x2="12" y2="7" {...stroke} />
    <line x1="18" y1="18" x2="18" y2="10" {...stroke} />
  </SvgIcon>
)

export const PlusIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="9" {...stroke} />
    <line x1="12" y1="8.5" x2="12" y2="15.5" {...stroke} />
    <line x1="8.5" y1="12" x2="15.5" y2="12" {...stroke} />
  </SvgIcon>
)

export const MinusIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="9" {...stroke} />
    <line x1="8.5" y1="12" x2="15.5" y2="12" {...stroke} />
  </SvgIcon>
)

export const HistoryIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <line x1="5" y1="8" x2="5" y2="16" {...stroke} />
    <line x1="12" y1="5" x2="12" y2="19" {...stroke} />
    <line x1="19" y1="8" x2="19" y2="16" {...stroke} />
  </SvgIcon>
)

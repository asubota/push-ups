import { FC } from 'react'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

export const CalendarModule: FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{ '.MuiPickersArrowSwitcher-root': { display: 'none' } }}
        views={['day']}
        referenceDate={dayjs('2024-04-01')}
      />
      <DateCalendar
        sx={{ '.MuiPickersArrowSwitcher-root': { display: 'none' } }}
        views={['day']}
        referenceDate={dayjs('2024-03-01')}
      />
      <DateCalendar
        sx={{ '.MuiPickersArrowSwitcher-root': { display: 'none' } }}
        views={['day']}
        referenceDate={dayjs('2024-02-01')}
      />
    </LocalizationProvider>
  )
}

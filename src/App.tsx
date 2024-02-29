import { CssBaseline, ThemeProvider } from '@mui/material'
import { TrackModule } from './modules/track/module.tsx'
import { theme } from './theme.ts'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TrackModule />
    </ThemeProvider>
  )
}

export default App

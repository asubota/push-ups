import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Shell } from './components/shell'
import { TrackModule } from './modules/track/module'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Shell>
        <TrackModule />
      </Shell>
    </ThemeProvider>
  )
}

export default App

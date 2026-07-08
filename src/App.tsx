import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Shell } from './components/shell'
import { TrackModule } from './modules/track/module'
import { useState } from 'react'
import { Section } from './types.ts'
import { StatsModule } from './modules/stats/module.tsx'

function App() {
  const [section, setSection] = useState<Section>('track')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Shell onChange={setSection}>
        {section === 'track' && <TrackModule />}
        {section === 'stats' && <StatsModule />}
      </Shell>
    </ThemeProvider>
  )
}

export default App

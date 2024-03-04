import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Shell } from './components/shell'
import { TrackModule } from './modules/track/module'
import { useState } from 'react'
import { Section } from './types.ts'
import { HistoryModule } from './modules/history/module.tsx'
import { StatsModule } from './modules/stats/module.tsx'

function App() {
  const [section, setSection] = useState<Section>('track')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Shell onChange={setSection}>
        {section === 'track' && <TrackModule />}
        {section === 'stats' && <StatsModule />}
        {section === 'history' && <HistoryModule />}
      </Shell>
    </ThemeProvider>
  )
}

export default App

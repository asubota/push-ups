import { createTheme } from '@mui/material'

const graphite = '#17191d'
const panel = '#21242b'
const plateOrange = '#ff5a1f'
const matGreen = '#7cb342'
const chalk = '#f2f1ec'
const steel = '#868c97'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: plateOrange,
      contrastText: graphite,
    },
    secondary: {
      main: matGreen,
      contrastText: graphite,
    },
    background: {
      default: graphite,
      paper: panel,
    },
    text: {
      primary: chalk,
      secondary: steel,
    },
    divider: 'rgba(242, 241, 236, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h4: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: panel,
          backgroundImage: 'none',
          boxShadow: 'none',
          borderBottom: `1px solid rgba(242, 241, 236, 0.08)`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: panel,
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        },
        contained: {
          'boxShadow': 'none',
          '&:active': {
            transform: 'translateY(2px) scale(0.97)',
            boxShadow: 'none',
          },
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: panel,
          backgroundImage: 'none',
          border: '1px solid rgba(242, 241, 236, 0.06)',
        },
      },
    },
  },
})

import { createTheme, Theme } from '@mui/material'

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFF',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#0d2430',
      contrastText: '#FFF'
    },
    error: {
      main: '#ef7a52'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b4def3',
      disabled: '#b4def3'
    },
    background: {
      default: '#081e25',
      paper: '#474b4d'
    }
  },
  typography: {
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif'
  }
})

export default darkTheme

import { createTheme, Theme } from '@mui/material'

const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFF',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#2596be',
      contrastText: '#FFF'
    },
    error: {
      main: '#ef7a52'
    },
    text: {
      primary: '#081e25',
      secondary: '#081e25',
      disabled: '#081e25'
    },
    background: {
      default: '#FCFCFC',
      paper: '#3dbbe9'
    }
  },
  typography: {
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif'
  }
})

export default lightTheme

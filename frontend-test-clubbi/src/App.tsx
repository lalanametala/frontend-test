import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Films from './pages/films'
import Home from './pages/home'
import NotFound from './pages/notFound'
import { RootState } from './store/store'
import darkTheme from './styles/darkTheme'
import lightTheme from './styles/lightTheme'
import Characters from './pages/characters'
import Locations from './pages/locations'

function App (): JSX.Element {
  const theme = useSelector((state: RootState) => state.theme.data)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/films" element={<Films />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

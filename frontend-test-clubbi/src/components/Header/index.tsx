import {
  Drawer, SvgIcon, AppBar, Box, Button, Container, IconButton, MenuItem, Toolbar, useTheme
} from '@mui/material'
import React, { useState } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { setTheme } from '../../store/theme'
import navLinks from './utils'
import { RootState } from '../../store/store'
import StudioLogo from '../StudioGhibliLogo'
import { resetAllFilters } from '../../store/filters'

function Header (): JSX.Element {
  const [anchorElNav, setAnchorElNav] = useState(false)
  const theme = useSelector((state: RootState) => state.theme.data)
  const { palette } = useTheme()

  const dispatch = useDispatch()

  const handleOpenNavMenu = (): void => {
    setAnchorElNav(true)
  }

  const handleCloseNavMenu = (): void => {
    dispatch(resetAllFilters())
    setAnchorElNav(false)
  }

  return (
    <AppBar sx={{ backgroundColor: palette.secondary.main }}>
      <Container>
        <Toolbar disableGutters>
          <StudioLogo logoMargin="0px" logoHeight="80px" logoPadding="10px" dispXS="none" dispSM="none" dispMD="block" pgTheme="dark" />
          <Box
            sx={{
              alignItems: 'center',
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                marginRight: '8px',
                color: 'white',
                outline: 'none'
              }}
            >
              <AiOutlineMenu />
            </IconButton>
            <Drawer
              variant="temporary"
              open={anchorElNav}
              onClose={handleCloseNavMenu}
              ModalProps={{
                keepMounted: true
              }}
              sx={{
                '& .MuiDrawer-paper': { width: '50%' },
                color: 'white'
              }}
            >
              {navLinks.map(({ name, route }) => (
                <MenuItem
                  key={route}
                  onClick={handleCloseNavMenu}
                  sx={{ color: 'white' }}
                >
                  <Button
                    key={route}
                    component={Link}
                    onClick={handleCloseNavMenu}
                    to={route}
                    sx={{ justifyContent: 'flex-start', color: 'white' }}
                  >
                    {name}
                  </Button>
                </MenuItem>
              ))}
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <StudioLogo logoMargin="0px" logoHeight="40px" logoPadding="0px" dispXS="block" dispSM="block" dispMD="none" pgTheme="dark" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'white' }}>
            {navLinks.map(({ name, route }) => (
              <Button
                key={route}
                component={Link}
                onClick={handleCloseNavMenu}
                to={route}
                sx={{
                  my: 2,
                  display: 'block',
                  padding: '0 20px',
                  fontSize: '18px'
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              size="large"
              onClick={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
              sx={{ margin: '0 6px', p: 0 }}
            >
              <SvgIcon>
                {theme === 'dark'
                  ? <BsSun color="white" />
                  : <BsMoonStars color="white" />}
              </SvgIcon>
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <IconButton
              size="large"
              onClick={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}
              sx={{ margin: '0 6px', p: 0 }}
            >
              {theme === 'dark'
                ? <BsSun color="white" />
                : <BsMoonStars color="white" />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

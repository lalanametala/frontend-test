import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StudioLogo from '../../components/StudioGhibliLogo'
import { fetchCharactersData } from '../../store/characters'
import { fetchFilmsData } from '../../store/films'
import { fetchLocationsData } from '../../store/locations'
import { AppDispatch, RootState } from '../../store/store'
import About from './sections/AboutStudioGhibli'

export default function Home (): JSX.Element {
  const theme = useSelector((state: RootState) => state.theme.data)
  const useAppDispatch: () => AppDispatch = useDispatch
  const dispatch = useAppDispatch()
  const films = useSelector((state: RootState) => state.films.data)
  const characters = useSelector((state: RootState) => state.characters.data)
  const locations = useSelector((state: RootState) => state.locations.data)

  useEffect(() => {
    if (!films.length) dispatch(fetchFilmsData())
    if (!characters.length) dispatch(fetchCharactersData())
    if (!locations.length) dispatch(fetchLocationsData())
  }, [])

  return (
    <Grid
      container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingX: { xs: '70px', sm: '70px', md: '90px' },
        width: '100vw',
        marginY: { xs: '10px', sm: '50px', md: '120px' },
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: {xs: '70px', md: '100px'}
      }}
      columns={{ xs: 4, sm: 4, md: 12 }}
    >
      <Grid item>
        <StudioLogo logoMargin="0" logoHeight="200px" logoPadding="0px" dispXS="none" dispSM="none" dispMD="block" pgTheme={theme} />
      </Grid>
      <About />
    </Grid>
  )
}

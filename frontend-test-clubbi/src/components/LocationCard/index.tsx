import React, { useEffect } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import useElevation from '../../hooks'
import { ILocation } from '../../interfaces/ILocation'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { IFilm } from '../../interfaces/IFilm'
import { ICharacter } from '../../interfaces/ICharacter'
import { fetchFilmsData } from '../../store/films'
import { fetchCharactersData } from '../../store/characters'

export default function DisplayCard (location: ILocation): JSX.Element {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()
  const storedFilms = useSelector((state: RootState) => state.films.data)
  const storedCharacters = useSelector((state: RootState) => state.characters.data)
  const useAppDispatch: () => AppDispatch = useDispatch
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!storedFilms.length) dispatch(fetchFilmsData())
    if (!storedCharacters.length) dispatch(fetchCharactersData())
  }, [])

  return (
    <Card 
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ width: { xs: '300px', sm: '400px', md: '400px'},
        height: { xs: '300px', sm: '400px', md: '280px'}
      }}
    >
      <CardHeader
        title={location.name}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Climate: ${location.climate}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Terrain: ${location.terrain}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Surface water: ${location.surface_water}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Films:${location.films.map((film) => {
            const filmInfo = storedFilms.find(({url}) => film === url) as IFilm
            return ` ${filmInfo.title}`
          })}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>
          {`Residents:${location.residents.map((character) => {
            if (character === 'TODO') return ' TODO'
            const characterInfo = storedCharacters.find(({url}) => character === url) as ICharacter
            
            return ` ${characterInfo.name}`
          })}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

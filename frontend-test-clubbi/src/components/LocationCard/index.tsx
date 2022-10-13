import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import useElevation from '../../hooks'
import { ILocation } from '../../interfaces/ILocation'
import { RootState } from '../../store/store'
import { IFilm } from '../../interfaces/IFilm'
import { ICharacter } from '../../interfaces/ICharacter'

export default function DisplayCard (location: ILocation): JSX.Element {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()
  const storedFilms = useSelector((state: RootState) => state.films.data)
  const storedCharacters = useSelector((state: RootState) => state.characters.data)
  const { name, climate, terrain, surface_water: surfaceWater, films, residents } = location

  return (
    <Card
      elevation={elevation}
      data-testid="location-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        width: { xs: '300px', sm: '400px', md: '400px' },
        height: { xs: '300px', sm: '400px', md: '280px' }
      }}
    >
      <CardHeader
        title={name}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Climate: ${climate}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Terrain: ${terrain}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Surface water: ${surfaceWater}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Films:${films.map((film) => {
            if (!film || !storedFilms.length) return ''
            const filmInfo = storedFilms.find(({ url }) => film === url) as IFilm
            return ` ${filmInfo.title}`
          }).toString()}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>
          {`Residents:${residents.map((character) => {
            if (!character || !storedCharacters.length) return ''
            if (character === 'TODO') return ' TODO'
            const characterInfo = storedCharacters
              .find(({ url }) => character === url) as ICharacter

            return ` ${characterInfo.name}`
          }).toString()}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

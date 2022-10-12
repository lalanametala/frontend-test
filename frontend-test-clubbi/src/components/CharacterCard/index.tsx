import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import useElevation from '../../hooks'
import { ICharacter } from '../../interfaces/ICharacter'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { IFilm } from '../../interfaces/IFilm'

export default function DisplayCard (character: ICharacter): JSX.Element {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()
  const storedFilms = useSelector((state: RootState) => state.films.data)

  return (
    <Card 
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ width: { xs: '300px', sm: '400px', md: '450px' } }}
    >
      <CardHeader
        title={character.name}
        subheader={`Age: ${character.age}`}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Gender: ${character.gender}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Hair color: ${character.hair_color}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Eye color: ${character.eye_color}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>
          {`Films:${character.films.map((film) => {
            if (!film || !storedFilms.length) return null
            const filmInfo = storedFilms.find(({url}) => film === url) as IFilm
            return ` ${filmInfo.title}`
          })}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

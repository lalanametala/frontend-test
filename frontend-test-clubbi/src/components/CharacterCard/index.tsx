import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import useElevation from '../../hooks'
import { ICharacter } from '../../interfaces/ICharacter'
import { RootState } from '../../store/store'
import { IFilm } from '../../interfaces/IFilm'

export default function DisplayCard (character: ICharacter): JSX.Element {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()
  const storedFilms = useSelector((state: RootState) => state.films.data)
  const { name, age, gender, hair_color: hairColor, eye_color: eyeColor, films } = character

  return (
    <Card
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ width: { xs: '300px', sm: '400px', md: '450px' } }}
    >
      <CardHeader
        title={name}
        subheader={`Age: ${age}`}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Gender: ${gender}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Hair color: ${hairColor}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`Eye color: ${eyeColor}`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>
          {`Films:${films.map((film) => {
            if (!film || !storedFilms.length) return ''
            const filmInfo = storedFilms.find(({ url }) => film === url) as IFilm
            return ` ${filmInfo.title}`
          }).toString()}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

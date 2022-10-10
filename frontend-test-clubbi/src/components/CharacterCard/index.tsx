import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import useElevation from '../../hooks'
import { ICharacter } from '../../interfaces/ICharacter'

export default function DisplayCard (character: ICharacter): JSX.Element {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()

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
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>
          {`Eye color: ${character.eye_color}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

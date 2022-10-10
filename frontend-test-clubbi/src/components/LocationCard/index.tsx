import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import useElevation from '../../hooks'
import { ILocation } from '../../interfaces/ILocation'

export default function DisplayCard (location: ILocation): JSX.Element {
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()

  return (
    <Card 
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ width: { xs: '300px', sm: '400px', md: '400px'} }}
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
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography>
          {`Surface water: ${location.surface_water}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import totoroNotFound from '../../assets/totoro-not-found.png'

export default function NotFound (): JSX.Element {
  return (
    <Grid
      container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingX: { xs: '70px', sm: '70px', md: '90px' },
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      columns={{ xs: 4, sm: 4, md: 12 }}
    >
      <Grid item>
        <Box
          component="img"
          src={totoroNotFound}
          alt="Totoro rain"
          sx={{
            height: '200px'
          }}
        />
      </Grid>
      <Grid
        item
        component="section"
        columns={{ xs: 4, sm: 4, md: 2 }}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 700,
            paddingBottom: '20px',
            paddingTop: '50px',
            fontSize: { xs: '20px', sm: '30px' },
            textAlign: 'justify'
          }}
        >
          TOTORO COULD NOT FIND THE PAGE YOU WERE LOOKING FOR :(
        </Typography>
      </Grid>
    </Grid>
  )
}

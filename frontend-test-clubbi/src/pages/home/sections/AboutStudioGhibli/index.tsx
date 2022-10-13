import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function About (): JSX.Element {
  return (
    <Grid
      item
      columns={{ xs: 4, sm: 4, md: 4 }}
      component="section"
      sx={{
        marginLeft: { md: '5%' },
        width: { xs: '100%', sm: '80%', md: '80%' }
      }}
    >
      <Grid
        item
        display={{ xs: 'block', sm: 'block', md: 'none' }}
        columns={{ xs: 4, sm: 4, md: 2 }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="left"
          gutterBottom
          sx={{ fontFamily: '"Sniglet", cursive', fontWeight: 700, paddingBottom: '20px', fontSize: { xs: '30px' } }}
        >
          Studio Ghibli
        </Typography>
      </Grid>
      <Grid
        item
        columns={{ xs: 4, sm: 4, md: 2 }}
      >
        <Typography
          align="left"
          paragraph
          sx={{ fontSize: { xs: '18px', sm: '24px', md: '20px' }, paddingY: '10px' }}
        >
          Studio Ghibli is a Japanese animation studio based in Koganei, Tokyo.
          Founded in 1985, the studio has produced 21 animated features, the
          first being Castle in the Sky (1986) and the most recent When Marnie Was There (2014).
        </Typography>
        <Typography
          align="left"
          paragraph
          sx={{ fontSize: { xs: '20px', sm: '24px', md: '20px' }, paddingY: '10px', paddingBottom: '70px' }}
        >
          Studio Ghibli was founded in 1985 by Hayao Miyazaki, Isao Takahata,
          Toshio Suzuki and Yasuyoshi Tokuma, shortly after the success of
          Nausicaä of the Valley of the Wind the previous year.
          The studio released its first film, Castle in the Sky, the following year.
          The company`s logo is Totoro, the character from the movie
          My Neighbor Totoro, released in 1988.
          With the exception of six productions,
          all of the studio`s films were directed by Hayao Miyazaki and Isao Takahata.
          Toshio Suzuki, meanwhile, is the producer for most of them.
          In 2001, the Ghibli Museum, a museum dedicated to the studio`s works, opened.
        </Typography>
      </Grid>
    </Grid>
  )
}

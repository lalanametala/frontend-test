import React, { useState } from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography, styled, IconButton, IconButtonProps } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MovieRating from '../Rating'
import { IFilm } from '../../interfaces/IFilm'
import useElevation from '../../hooks'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function DisplayCard (film: IFilm): JSX.Element {
  const [expanded, setExpanded] = useState(false)
  const { elevation, handleMouseOver, handleMouseOut } = useElevation()

  const handleExpandClick = (): void => {
    setExpanded(!expanded)
  }

  const {
    title,
    original_title: originalTitle,
    release_date: releaseDate,
    running_time: runningTime,
    rt_score: rtScore,
    movie_banner: movieBanner,
    description,
    director,
    producer
  } = film

  return (
    <Card
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      data-testid="film-card"
      sx={{ width: { xs: '100%', sm: '400px', md: '400px' } }}
    >
      <CardHeader
        title={title}
        subheader={originalTitle}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`${releaseDate} - ${runningTime} min`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0 }}>
        <MovieRating rating={rtScore} />
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={movieBanner}
        alt={title}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
          <Typography sx={{ paddingBottom: '14px', fontSize: '20px' }}>
            <strong>Description</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: '14px' }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            {`Directed By ${director}`}
          </Typography>
          <Typography variant="body2" sx={{ paddingBottom: '5px', fontStyle: 'italic' }}>
            {`Produced By ${producer}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

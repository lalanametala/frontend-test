import React, { useState } from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography, styled, IconButton, IconButtonProps } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MovieRating from '../Rating'
import { IFilm, IFilmWithNames } from '../../interfaces/IFilm'
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

  return (
    <Card 
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{ width: { xs: '100%', sm: '400px', md: '400px'} }}
    >
      <CardHeader
        title={film.title}
        subheader={film.original_title}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '5px' }}>
        <Typography>
          {`${film.release_date} - ${film.running_time} min`}
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0 }}>
        <MovieRating rating={film.rt_score} />
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        
        image={film.movie_banner}
        alt={film.title}
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
          <Typography sx={{ paddingBottom: '16px', fontSize: '20px' }}>
            <strong>Description</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: '14px' }}>
            {film.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingY: '2px', fontStyle: 'italic' }}>
            {`Directed By ${film.director}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: '5px', fontStyle: 'italic' }}>
            {`Produced By ${film.producer}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

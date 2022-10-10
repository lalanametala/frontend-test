import * as React from 'react'
import { Box, Popover, Rating, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

type props = {
  rating: number
}

export default function MovieRating ({ rating }: props): JSX.Element {
  const value = ((rating / 100) * 5)

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Rating
          name="movie-rating"
          value={value}
          readOnly
          precision={0.05}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{`Rating: ${rating}`}</Typography>
      </Popover>
    </>
  )
}

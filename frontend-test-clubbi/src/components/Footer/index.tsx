import {
  Box, Container, Grid, Link, Typography, useTheme
} from '@mui/material'
import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { AiFillLinkedin } from 'react-icons/ai'
import colors from '../../styles/colors'

function Footer (): JSX.Element {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.main,
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))'
      }}
    >
      <Container
        component="footer"
        maxWidth="lg"
        sx={{
          paddingY: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Grid
            component="section"
            item
            xs={4}
            sm={8}
            md={12}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box>
              <Typography variant="body1" paragraph sx={{ color: palette.secondary.contrastText, marginTop: '10px' }}>
                <strong>Developed by Laís Nametala</strong>
              </Typography>
            </Box>
          </Grid>
          <Grid
            component="section"
            item
            xs={4}
            sm={8}
            md={12}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              height: '100%',
              gap: '20px'
            }}
          >
            <Link
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              variant="button"
              data-testid="github-link"
              href="https://github.com/lalanametala"
              color={colors.babyBlue}
              sx={{
                lineHeight: 1,
                fontSize: '20px',
                color: colors.babyBlue,
                '&:hover': {
                  color: palette.primary.contrastText
                }
              }}
            >
              <VscGithub />
            </Link>
            <Link
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              variant="button"
              data-testid="linkedin-link"
              href="https://www.linkedin.com/in/la%C3%ADs-nametala/"
              color={colors.babyBlue}
              sx={{
                lineHeight: 1,
                fontSize: '20px',
                color: colors.babyBlue,
                '&:hover': {
                  color: palette.primary.contrastText
                }
              }}
            >
              <AiFillLinkedin />
            </Link>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer

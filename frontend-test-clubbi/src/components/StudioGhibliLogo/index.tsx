import { Box } from '@mui/material'
import React from 'react'
import logo from '../../assets/Studio_Ghibli_logo.svg'
import negativeLogo from '../../assets/Studio_Ghibli_logo_negative.svg'
import { ILogo } from '../../interfaces/ILogo'

function StudioLogo ({
  logoMargin, logoHeight, logoPadding, dispXS, dispSM, dispMD, pgTheme
}: ILogo): JSX.Element {
  return (
    <Box
      component="img"
      src={pgTheme === 'dark' ? negativeLogo : logo}
      alt="Studio Ghibli"
      sx={{
        display: { xs: dispXS, sm: dispSM, md: dispMD },
        marginRight: logoMargin,
        height: logoHeight,
        paddingY: logoPadding
      }}
    />
  )
}

export default StudioLogo

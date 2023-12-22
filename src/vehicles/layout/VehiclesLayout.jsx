import { Box } from '@mui/material'
import React from 'react'

export const VehiclesLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>


      <Box
      component='main'
      sx={{
        flexGrow: 1, padding: 3
      }}
      >

        {children}
      </Box>


    </Box>

    

  )
}

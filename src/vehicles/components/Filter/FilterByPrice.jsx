import { Box, Slider, Typography } from '@mui/material'
import React from 'react'

export const FilterByPrice = () => {
  return (
    <Box sx={{ padding: '25px' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
            Rango de Precio
          </Typography>
          <Slider
            min={0}
            max={35000}
            value={[0, 20000]}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Box>
  )
}

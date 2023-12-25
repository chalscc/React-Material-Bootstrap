import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import { fuelTypes } from '../../../data';

export const FilterByFuel = () => {
  return (
    <FormGroup sx={{ padding: '20px' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
            Tipo de combustible
          </Typography>
          {fuelTypes.map((type) => (
            <FormControlLabel
              key={type}
              control={
                <Checkbox
                  value={type}
                />
              }
              label={type}
            />
          ))}
        </FormGroup>
  )
}

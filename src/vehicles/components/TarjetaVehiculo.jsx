import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export const TarjetaVehiculo = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Tarjeta 1
              </Typography>
              <Typography variant="body2">
                Contenido de la Tarjeta 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
  )
}

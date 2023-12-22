import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export const TarjetaVehiculo = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="ruta-de-tu-imagen1.jpg" // Cambia esto por la ruta de tu imagen
              alt="Imagen del producto 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Título del Producto 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción del Producto 1
              </Typography>
              <Divider style={{ margin: '10px 0' }} />
              <Typography variant="body2" color="text.primary">
                Precio: $100
              </Typography>
              <Divider style={{ margin: '10px 0' }} />
              <Typography variant="body2" color="text.secondary">
                Segunda Descripción del Producto 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
  )
}

import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'


export const TarjetaVehiculo = ({ ano, cambio, combustible, km, marca, modelo, precioMes, precioOriginal, precioVenta, id }) => {

  console.log(id)

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={`../../assets/coche${id}.jpg`}
          alt="Imagen del producto 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modelo}
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography variant="body2">
            <Box color="error.main" component={'span'} sx={{ textDecoration: 'line-through' }}>
              {precioOriginal} €
            </Box>
            <Box component={'span'}>
              {precioVenta} €
            </Box>
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography variant="body2" color="text.secondary">
            Segunda Descripción del Producto 1
          </Typography>
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary" style={{ border: '1px solid black', padding: '8px' }}>
                {ano}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary" style={{ border: '1px solid black', padding: '8px' }}>
                {km} km
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary" style={{ border: '1px solid black', padding: '8px' }}>
                {combustible}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" color="text.secondary" style={{ border: '1px solid black', padding: '8px' }}>
                {cambio}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

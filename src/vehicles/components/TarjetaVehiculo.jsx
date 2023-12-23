import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import { useImage } from '../../helpers/useImage'


const heightImage = 250;

export const TarjetaVehiculo = ({ ano, cambio, combustible, km, marca, modelo, precioMes, precioOriginal, precioVenta, id }) => {

  const { image } = useImage(`coche${id}`)

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height={heightImage}
          image={image}
          alt="{modelo}"
        />
        <CardContent>
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box variant="div" component="span">
              Desde {precioMes} €/mes
            </Box>
            <Box variant="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Box color="error.main" component="span" sx={{ textDecoration: 'line-through' }}>
                {precioOriginal} €
              </Box>
              <Box component="span">
                {precioVenta} €
              </Box>
            </Box>
          </Typography>
          <Divider style={{ margin: '0px 0' }} />
          <Typography gutterBottom variant="h5" component="div">
            {marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modelo}
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={3} align="center">
              {ano}
            </Grid>
            <Grid item xs={3} align="center">
              {km}Km
            </Grid>
            <Grid item xs={3} align="center">
              {combustible}
            </Grid>
            <Grid item xs={3} align="center">
              {cambio}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import { useImage } from '../../../helpers'


const heightImage = 250;

export const VehiclesCard = ({ id, brand, fuelType, mileage, year, model, monthlyPrice, originalPrice, salePrice }) => {

  const { image } = useImage(`car${id}`)

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height={heightImage}
          image={image}
          alt={model}
        />
        <CardContent>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
              Desde {monthlyPrice} €/mes
            </Box>
            <Box className="text-end">
              <Box color="error.main" sx={{ textDecoration: 'line-through', marginBottom: "-10px" }}>
                {originalPrice} €
              </Box>
              <Box className="fs-3">
                {salePrice} €
              </Box>
            </Box>
          </Grid>
          <Divider />
          <Typography gutterBottom variant="h5">
            {brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {model}
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={3} align="center">
              {year}
            </Grid>
            <Grid item xs={3} align="center">
              {mileage}Km
            </Grid>
            <Grid item xs={3} align="center">
              {fuelType}
            </Grid>
            <Grid item xs={3} align="center">
              {brand}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

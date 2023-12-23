import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button } from "@mui/material"
import { useImage } from "../../helpers"

const heightImage = 350;

export const VehiclesExpert = ({ id, name, quote }) => {

  console.log(id, name, quote);

  const { image } = useImage(`VehiclesExpert${id}`)

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-left'
      alignItems='center'
      style={{ height: '35vh' }}
    >

      <Card>
        <CardMedia
          component="img"
          height={heightImage}
          image={image}
          alt={'VehiclesExpert'}
        />
      </Card>

      <Card variant="outlined" style={{ margin: '20px', padding: '20px' }}>
        <CardContent>
          {/* <FormatQuoteIcon style={{ fontSize: 40, marginBottom: '10px' }} /> */}
          <Typography variant="body1" component="p">
            {quote}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" style={{ marginTop: '10px' }}>
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Compartir
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

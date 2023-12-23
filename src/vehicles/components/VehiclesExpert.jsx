import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button } from "@mui/material"
import { useImage } from "../../helpers"

const heightImage = 350;

export const VehiclesExpert = ({ id, name, quote }) => {

  const { image } = useImage(`VehiclesExpert${id}`)

  return (
    <Grid item sm={6}>
      <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Card style={{ flex: 1 }}>
          <CardMedia
            component="img"
            height={heightImage}
            image={image}
            alt=""
          />
        </Card>

        <Card variant="outlined" style={{ flex: 2, margin: '20px' }}>
          <CardContent>
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
    </Grid>

  )
}

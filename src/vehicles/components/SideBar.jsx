import { Box, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Slider, Toolbar, Typography } from '@mui/material'
import { brands, fuelTypes } from '../../data/vehicles'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop: '20px',
          },
        }}
      >
        <Toolbar>
          <Typography variant='h5' style={{ flexGrow: 1, textAlign: 'center', marginBottom: '20px' }}>
            Filtros
          </Typography>
        </Toolbar>
        {/* <Divider /> */}

        <FormGroup style={{ padding: '20px' }}>
          <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
            Marca
          </Typography>
          {brands.map((name, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={name}
              style={{ marginBottom: '10px' }}
            />
          ))}
        </FormGroup>

        <Divider />

        <div style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="subtitle1" gutterBottom>
            Media de valoración por cliente
          </Typography>
          <Rating
            name="simple-controlled"
            precision={1}
            max={5}
            size="large"
          />
        </div>

        <Divider />

        <div style={{ padding: '25px' }}>
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
        </div>

        <Divider />

        <FormGroup style={{ padding: '20px' }}>
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

      </Drawer>

    </Box>
  )
}
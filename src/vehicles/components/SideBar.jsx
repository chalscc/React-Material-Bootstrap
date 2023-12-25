import { Box, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, Rating, Slider, Toolbar, Typography } from '@mui/material'

import { fuelTypes } from '../../data';
import { FilterByBrand } from './Filter/FilterByBrand';
import { FilterByRating } from './Filter/FilterByRating';

export const SideBar = ({ drawerWidth = 240 }) => {

  return (
    <Box
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
          },
        }}
      >
        <Toolbar>
          <Typography variant='h5' style={{ flexGrow: 1, textAlign: 'center' }}>
            Filtros
          </Typography>
        </Toolbar>

        <Divider />

        <FilterByBrand />

        <Divider />

        <FilterByRating />


        <Divider />

        <Box style={{ padding: '25px' }}>
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
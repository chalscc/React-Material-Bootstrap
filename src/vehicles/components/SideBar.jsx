import { Box, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, Rating, Slider, Toolbar, Typography } from '@mui/material'

import { FilterByBrand, FilterByRating, FilterByPrice, FilterByFuel } from '../components';

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

        <FilterByPrice />        

        <Divider />

        <FilterByFuel />

      </Drawer>

    </Box>
  )
}
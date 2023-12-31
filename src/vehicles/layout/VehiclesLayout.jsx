import { Box, Toolbar } from '@mui/material'

import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const VehiclesLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />
      <Box
        component='main'
        sx={{
          flexGrow: 1, padding: 3
        }}
      >
        <Toolbar />
        {children}
      </Box>

    </Box>

  )
}

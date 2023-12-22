import { Box } from '@mui/material'
import { NavBar } from '../components';

const drawerWidth = 240;

export const VehiclesLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWidth={ drawerWidth } />

      <Box
      component='main'
      sx={{
        flexGrow: 1, padding: 3
      }}
      >

        {children}
      </Box>


    </Box>

    

  )
}

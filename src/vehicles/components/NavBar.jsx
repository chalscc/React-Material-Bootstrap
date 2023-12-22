import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material"
import Typhograpy from "@mui/material/Typography"

export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            edge='start'
            sx={{ 
              mr: 2,
              display: { sm: 'none' },            
            }}
          >
            <MenuOutlined />
          </IconButton>

          <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            <Typhograpy variant="h6" noWrap component='div'> VehiclesApp </Typhograpy>

            <IconButton color='error'>
              <LogoutOutlined />
            </IconButton>

          </Grid>

        </Toolbar>
    </AppBar>
  )
}

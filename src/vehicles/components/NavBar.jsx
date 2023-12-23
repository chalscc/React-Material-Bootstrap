import { AppBar, Button, Grid, IconButton, Toolbar } from "@mui/material"
import { LoginOutlined, LogoutOutlined, ShoppingCartOutlined, PersonAddOutlined } from '@mui/icons-material';
// import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          spacing={2}
          style={{ width: '100%' }}
        >
          <Grid item>
            <IconButton size='large' color='inherit'>
              <ShoppingCartOutlined />
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='inherit'
              startIcon={<LoginOutlined />}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='inherit'
              startIcon={<PersonAddOutlined />}
            >
              Registro
            </Button>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}

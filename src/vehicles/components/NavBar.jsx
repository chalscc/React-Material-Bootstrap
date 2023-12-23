import { AppBar, Button, Grid, IconButton, Toolbar } from "@mui/material"
import { LoginOutlined, ShoppingCartOutlined, PersonAddOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export const NavBar = ({ drawerWidth = 240 }) => {

  const theme = useTheme();
  const buttonColor = theme.palette.button.icon;

  console.log(buttonColor)

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
            <IconButton size='large' sx={{ color: buttonColor }}>
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

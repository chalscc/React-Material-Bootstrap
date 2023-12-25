import { AppBar, Box, Button, Grid, IconButton, MenuItem, Toolbar, Typography } from "@mui/material"
import { LoginOutlined, ShoppingCartOutlined, PersonAddOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export const NavBar = ({ drawerWidth = 240 }) => {

  const theme = useTheme();

  const pages = ['Productos', 'Precio', 'Blog'];

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
          justifyContent='flex-start'
          alignItems='center'
          spacing={2}
          style={{ width: '100%' }}
        >
          {pages.map((page) => (
            <Grid item key={page}>
              <Button
                variant="navigation"
              >
                <Typography> {page} </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          spacing={2}
          style={{ width: '100%' }}
        >

          <Grid item>
            <IconButton size='large'>
              <ShoppingCartOutlined />
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              variant='user'
              startIcon={<LoginOutlined />}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='user'
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

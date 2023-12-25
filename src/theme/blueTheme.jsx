import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'navigation' },
          style: {
            textTransform: 'none',
            backgroundColor: '#0288d1',
            width: '150px',
          },
        },
        {
          props: { variant: 'user' },
          style: {
            border: `1px solid #ffffff`,
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: '#ffffff',
          },
        },
      },
    },
  },
});

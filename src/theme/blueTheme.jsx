import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    button: {
      icon: '#ffffff',
    },
    error: {
      main: red.A400,
    },    
  },
});
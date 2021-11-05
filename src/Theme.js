import { createTheme } from "@material-ui/core";
import { pink, grey } from "@material-ui/core/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: grey[900],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
});

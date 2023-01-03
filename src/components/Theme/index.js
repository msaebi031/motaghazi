import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  breakpoints: {
    values: {
      xs: 0,
      sm: 570,
      psm: 635,
      md: 912,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Iran yekan", "Nunito", "Helvetica", "Sans-Serif"].join(","),
    },
    subtitle2: {
      fontSize: "0.75em",
      fontWeight: 600,
    },
  },
  palette: {
    secondary: {
      main: "#686868",
      dark: "#3d3d3d",
    },
    success: {
      main: "#19bfaf",
    },
    successLight: {
      main: "#4ac562",
    },
    danger: {
      main: "#be1064",
    },
    puper: {
      main: "#7e31b0",
    },
    puperTheme: {
      main: "#6449d9",
    },
    light: {
      main: "#ffffff",
    },
    darkMenu: {
      main: "#121212",
    },
  },
});

export default theme;

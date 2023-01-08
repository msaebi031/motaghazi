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
    red: {
      main: "#f44336"
    },
    primary: {
      main: "#08c"
    },
    blue: {
      dark: "#6449d9",
      main: "#6438e2",
      light: "#a244e0",
      // contrastText: "#7e31b0"
    },
    dark: {
      // dark: "#3d3d3d",
      // main: "",
      light: "#3e3e3e"
    },
    brown: {
      main: "#7b7b7b",
      light: "#646464",
      dark: "#565656",
      contrastText: "#535353"
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
    info: {
      main: "#6610f2"
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
    warning: {
      main: "#1ebea5"
    },
    darkMenu: {
      main: "#121212",
    },
  },
});

export default theme;



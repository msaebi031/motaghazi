import { ThemeProvider } from "@mui/material";
import theme from "../src/components/Theme";
import "../src/assets/css/main.css";
import { wrapper } from "../src/components/redux/store/configureStore";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);

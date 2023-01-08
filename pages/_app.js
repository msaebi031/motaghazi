import { ThemeProvider } from "@mui/material";
import theme from "../src/components/Theme";
import { wrapper } from "../src/components/redux/store/configureStore";
import { appWithTranslation } from "next-i18next";
import "../src/assets/css/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(appWithTranslation(MyApp));

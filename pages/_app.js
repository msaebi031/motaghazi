import { ThemeProvider } from "@mui/material";
import theme from "../src/components/Theme";
import { wrapper } from "../src/components/redux/store/configureStore";
import { Provider } from "react-redux";

import "../src/assets/css/main.css";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;

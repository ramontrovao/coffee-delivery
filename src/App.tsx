import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";
import { CoffeeContextProvider } from "./context/CoffeeListContext";
import { AddressContextProvider } from "./context/AddressContext";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CoffeeContextProvider>
        <AddressContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AddressContextProvider>
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

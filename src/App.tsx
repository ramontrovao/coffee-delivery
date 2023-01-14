import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";
import { CoffeeContextProvider } from "./context/CoffeeListContext";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CoffeeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

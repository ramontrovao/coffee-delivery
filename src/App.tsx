import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

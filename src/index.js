import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme/theme.context";

import "./scss/index.scss";
import App from "./App";

ReactDOM.render(
   <BrowserRouter>
      <ThemeProvider>
         <App />
      </ThemeProvider>
   </BrowserRouter>,
   document.getElementById("root")
);

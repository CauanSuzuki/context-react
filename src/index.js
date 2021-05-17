import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CountProvider } from "./context/count";
import { ThemeProvider } from "./context/theme";
import {ConteudoProvider} from "./context/conteudo"

ReactDOM.render(
  <React.StrictMode>
    <ConteudoProvider>
      <ThemeProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </ThemeProvider>
    </ConteudoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

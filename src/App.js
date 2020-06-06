import React from "react";
import { Router } from "react-router-dom";

import { FilmProvider } from "./Context/FilmsContext";
import Routes from "./routes";
import history from "./Services/history";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <FilmProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </FilmProvider>
  );
}

export default App;

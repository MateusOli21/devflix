import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function index() {
  return (
    <Container>
      <h1>DEVFLIX</h1>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/films">Filmes</Link>
        <Link to="/series">Séries</Link>
      </nav>
    </Container>
  );
}

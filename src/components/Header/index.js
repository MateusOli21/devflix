import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>DEVFLIX</h1>

      <nav>
        {document.location.pathname === "/" ? (
          <>
            <Link to="/dashboard">
              <span>Entrar</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Início</Link>
            <Link to="/films">Filmes</Link>
            <Link to="/series">Séries</Link>
            <Link to="/">
              <span>Sair</span>
            </Link>
          </>
        )}
      </nav>
    </Container>
  );
}

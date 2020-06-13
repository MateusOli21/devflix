import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <h1>HomePage</h1>
      <Link to="/dashboard">Entrar</Link>
    </Container>
  );
}

export default Home;

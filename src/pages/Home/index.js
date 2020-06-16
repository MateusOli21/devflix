import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import TrendingCarousel from "../../components/TrendingCarousel";

import { Container, Slogan } from "./styles";

function Home() {
  return (
    <Container>
      <Slogan>
        <h1>Filmes, séries e muito mais.</h1>
        <h2>Assista onde quiser e quando quiser.</h2>

        <Link to="/dashboard">
          <span>
            <FiLogIn />
          </span>
          <strong>Explorar catálogo</strong>
        </Link>
      </Slogan>

      <TrendingCarousel />
    </Container>
  );
}

export default Home;

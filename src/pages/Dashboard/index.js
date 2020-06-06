import React, { useContext } from "react";

import { Context } from "../../Context/FilmsContext";

import { Wrapper, Container, FilmsTitle } from "./styles";

function Dashboard() {
  const { filmsData } = useContext(Context);

  const films = filmsData.results;

  while (!films) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <Container>
        <h1>Welcome to Devflix</h1>

        <FilmsTitle>
          {films.map((film) => (
            <span key={film.id}>{film.title}</span>
          ))}
        </FilmsTitle>
      </Container>
    </Wrapper>
  );
}

export default Dashboard;

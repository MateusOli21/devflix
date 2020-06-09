import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../Context/FilmsContext";

import { Container, Row, RowInner, Film } from "./styles";

function FilmPreview() {
  const { filmsData } = useContext(Context);

  const films = filmsData.results;

  while (!films) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <h1>Filmes</h1>

      <Row>
        <RowInner>
          {films.map((film) => (
            <Film key={film.id}>
              <Link to={`/${film.id}`}>
                <img src={film.poster_url} alt="poster" />
              </Link>
            </Film>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default FilmPreview;

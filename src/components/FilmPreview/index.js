import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

import { Context } from "../../Context/FilmsContext";

import { Container, Row, RowInner, Film, FilmInfo } from "./styles";

function FilmPreview() {
  const { films } = useContext(Context);

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
              <img src={film.poster_url} alt="poster" />
              <Link to={`/films/${film.id}`}>
                <FilmInfo>
                  <button>{film.vote_average.toFixed(1)}</button>
                  <span>
                    <FiMoreHorizontal size={24} />
                  </span>
                </FilmInfo>
              </Link>
            </Film>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default FilmPreview;

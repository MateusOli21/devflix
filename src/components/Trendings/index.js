import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../Context/FilmsContext";

import { Container, Row, RowInner, Film, FilmInfo } from "./styles";

function Trendings() {
  const { trendings } = useContext(Context);

  return (
    <Container>
      <h1>Populares</h1>

      <Row>
        <RowInner>
          {trendings.map((film) => (
            <Film key={film.id}>
              <img src={film.poster_url} alt="poster" />
              <Link
                to={`/${film.media_type === "movie" ? "films" : "series"}/${
                  film.id
                }`}
              >
                <FilmInfo>
                  <span>{film.title}</span>
                </FilmInfo>
              </Link>
            </Film>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default Trendings;

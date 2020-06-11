import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

import { Context } from "../../Context/FilmsContext";

import { Container, Row, RowInner, Film, FilmInfo } from "./styles";

function Trendings() {
  const { trendings } = useContext(Context);

  return (
    <Container>
      <h1>Populares</h1>

      <Row>
        <RowInner>
          {trendings.map((trending) => (
            <Film key={trending.id}>
              <img src={trending.poster_url} alt="poster" />
              <Link
                to={`/${trending.media_type === "movie" ? "films" : "series"}/${
                  trending.id
                }`}
              >
                <FilmInfo>
                  <button>{trending.vote_average.toFixed(1)}</button>
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

export default Trendings;

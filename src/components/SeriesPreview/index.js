import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../Context/FilmsContext";

import { Container, Row, RowInner, Serie, SerieInfo } from "./styles";

function SeriesPreview() {
  const { series } = useContext(Context);

  while (!series) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <h1>Séries</h1>

      <Row>
        <RowInner>
          {series.map((serie) => (
            <Serie key={serie.id}>
              <img src={serie.poster_url} alt="poster" />
              <Link to={`/series/${serie.id}`}>
                <SerieInfo>
                  <span>{serie.original_name}</span>
                </SerieInfo>
              </Link>
            </Serie>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default SeriesPreview;

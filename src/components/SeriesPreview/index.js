import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../Context/FilmsContext";

import { Container, Row, RowInner, Serie, SerieInfo } from "./styles";

function SeriesPreview() {
  const { seriesData } = useContext(Context);

  const series = seriesData.results;

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
              <Link to={`/${serie.id}`}>
                <img src={serie.poster_url} alt="poster" />
              </Link>
              <SerieInfo>
                <span>{serie.title}</span>
              </SerieInfo>
            </Serie>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default SeriesPreview;

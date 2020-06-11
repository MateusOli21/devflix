import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../Services/api";

import {
  Container,
  RowInner,
  Row,
  Recommendation,
  RecommendationInfo,
} from "./styles";

function Recommendatios({ filmId, tvId }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function getRecomendations() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/${filmId ? "movie" : "tv"}/${
          filmId ? filmId : tvId
        }/recommendations?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=pt-BR&page=1`
      );

      response.data.results.map((recommendation) => {
        recommendation.poster_url = `${process.env.REACT_APP_IMAGES_URL}${recommendation.poster_path}`;

        return {
          ...recommendation,
        };
      });

      setRecommendations(response.data.results);
    }

    getRecomendations();
  }, [filmId, tvId]);

  return (
    <Container>
      <h2>Recomendados</h2>

      <Row>
        <RowInner>
          {recommendations.map((film) => (
            <Recommendation key={film.id}>
              <img src={film.poster_url} alt="poster" />
              <Link to={`/${filmId ? "films" : "series"}/${film.id}`}>
                <RecommendationInfo>
                  <span>{film.title}</span>
                </RecommendationInfo>
              </Link>
            </Recommendation>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default Recommendatios;

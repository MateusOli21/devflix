import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

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
          {recommendations.map((item) => (
            <Recommendation key={item.id}>
              <img src={item.poster_url} alt="poster" />
              <Link to={`/${filmId ? "films" : "series"}/${item.id}`}>
                <RecommendationInfo>
                  <button>{item.vote_average.toFixed(1)}</button>
                  <span>
                    <FiMoreHorizontal size={24} />
                  </span>
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

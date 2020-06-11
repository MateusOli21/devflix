import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

import api from "../../Services/api";

import { Container, Row, RowInner, DiscoverItem, ItemInfo } from "./styles";

function DiscoverList({ isMovies, isSeries, genreId, label }) {
  const [discoverList, setDiscoverList] = useState([]);

  useEffect(() => {
    async function discoverList() {
      const response = await api.get(
        `${process.env.REACT_APP_DISCOVER_URL}/${
          isMovies ? "movie" : "tv"
        }?api_key=${
          process.env.REACT_APP_API_KEY
        }&with_genres=${genreId}&language=pt-BR`
      );

      response.data.results.map((item) => {
        item.poster_url = `${process.env.REACT_APP_IMAGES_URL}${item.poster_path}`;

        return {
          ...item,
        };
      });

      setDiscoverList(response.data.results);
    }

    discoverList();
  }, [isMovies, genreId]);

  return (
    <Container>
      <h1>{label}</h1>

      <Row>
        <RowInner>
          {discoverList.map((item) => (
            <DiscoverItem key={item.id}>
              <img src={item.poster_url} alt="poster" />
              <Link to={`/${isMovies ? "films" : "series"}/${item.id}`}>
                <ItemInfo>
                  <button>{item.vote_average.toFixed(1)}</button>
                  <span>
                    <FiMoreHorizontal size={24} />
                  </span>
                </ItemInfo>
              </Link>
            </DiscoverItem>
          ))}
        </RowInner>
      </Row>
    </Container>
  );
}

export default DiscoverList;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiPlayCircle, FiArrowLeft } from "react-icons/fi";

import api from "../../Services/api";

import Recommendations from "../../components/Recommendations";

import { Container, Serie, BackPage, InfoSeparator, Buttons } from "./styles";

function SeriePage() {
  const { serieId } = useParams();
  const [serie, setSerie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getSerie() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/tv/${serieId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
      );

      [response.data].map((serie) => {
        serie.poster_url = `${process.env.REACT_APP_IMAGES_URL}${serie.poster_path}`;
        serie.backdrop_url = `${process.env.REACT_APP_IMAGES_URL}${serie.backdrop_path}`;

        const lastIndex = serie.seasons.length - 1;

        const getYear = serie.seasons[lastIndex].air_date.split("-");
        const lastSeasonYear = getYear[0];
        serie.last_season_date = lastSeasonYear;

        return {
          ...serie,
        };
      });

      setSerie(response.data);
      setGenres(response.data.genres);
    }

    getSerie();
  }, [serieId]);

  return (
    <Container>
      <Serie bgImage={serie.backdrop_url}>
        <BackPage>
          <Link to="/dashboard">
            <FiArrowLeft size={18} />
          </Link>
        </BackPage>

        <InfoSeparator isGenre>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </InfoSeparator>

        <h1>{serie.name}</h1>

        <InfoSeparator>
          <span>{serie.last_season_date}</span>
          <span>{`IMDb: ${serie.vote_average}`}</span>
          <span>{`${serie.number_of_seasons} ${
            serie.number_of_seasons === 1 ? "Temporada" : "Temporadas"
          }`}</span>
          <span>{serie.number_of_episodes} episódios</span>
        </InfoSeparator>
        <Buttons>
          <button>
            <span>Assista trailer</span>
            <FiPlayCircle size={20} />
          </button>
        </Buttons>
        <p>{serie.overview}</p>
      </Serie>

      <Recommendations tvId={serieId} />
    </Container>
  );
}

export default SeriePage;

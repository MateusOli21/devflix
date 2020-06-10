import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiPlayCircle, FiArrowLeft } from "react-icons/fi";

import api from "../../Services/api";

import Recommendations from "../../components/Recommendations";

import { Container, InfoSeparator, Movie, BackPage, Buttons } from "./styles";

function Film() {
  const { filmId } = useParams();
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getFilm() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
      );

      [response.data].map((film) => {
        film.poster_url = `${process.env.REACT_APP_IMAGES_URL}${film.poster_path}`;
        film.backdrop_url = `${process.env.REACT_APP_IMAGES_URL}${film.backdrop_path}`;

        const date = film.release_date.split("-");
        const year = date[0];
        film.release_date = year;

        return {
          ...film,
        };
      });

      setFilm(response.data);
      setGenres(response.data.genres);
    }
    getFilm();
  }, [filmId]);

  return (
    <Container>
      <Movie bgImage={film.backdrop_url}>
        <BackPage>
          <Link to="/">
            <FiArrowLeft size={18} />
          </Link>
        </BackPage>

        <InfoSeparator isGenre>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </InfoSeparator>

        <h1>{film.title}</h1>
        <h3>{film.tagline}</h3>
        <InfoSeparator>
          <span>{film.release_date}</span>
          <span>{`IMDb: ${film.vote_average}`}</span>
          <span>{`Tempo de duração: ${film.runtime}min`}</span>
        </InfoSeparator>
        <Buttons>
          <button>
            <span>Assista trailer</span>
            <FiPlayCircle size={20} />
          </button>
        </Buttons>
        <p>{film.overview}</p>
      </Movie>

      <Recommendations filmId={filmId} />
    </Container>
  );
}

export default Film;

import React, { createContext, useState, useEffect } from "react";

import api from "../Services/api";

const Context = createContext();

function FilmProvider({ children }) {
  const [filmsData, setFilmsData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-Br&page=1`
      );

      response.data.results.map((film) => {
        film.poster_url = `${process.env.REACT_APP_IMAGES_URL}${film.poster_path}`;
        film.backdrop_url = `${process.env.REACT_APP_IMAGES_URL}${film.backdrop_path}`;

        return {
          ...film,
        };
      });

      setFilmsData(response.data.results);
    }

    getFilms();
  }, []);

  useEffect(() => {
    async function getSeries() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`
      );

      response.data.results.map((serie) => {
        serie.poster_url = `${process.env.REACT_APP_IMAGES_URL}${serie.poster_path}`;
        serie.backdrop_url = `${process.env.REACT_APP_IMAGES_URL}${serie.backdrop_path}`;

        return {
          ...serie,
        };
      });

      setSeriesData(response.data.results);
    }

    getSeries();
  }, []);

  useEffect(() => {
    async function getTrending() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
      );

      response.data.results.map((film) => {
        film.poster_url = `${process.env.REACT_APP_IMAGES_URL}${film.poster_path}`;
        film.backdrop_url = `${process.env.REACT_APP_IMAGES_URL}${film.backdrop_path}`;

        return {
          ...film,
        };
      });

      setTrendingData(response.data.results);
    }

    getTrending();
  }, []);

  return (
    <Context.Provider
      value={{
        films: filmsData,
        series: seriesData,
        trendings: trendingData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, FilmProvider };

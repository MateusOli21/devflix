import React, { createContext, useState, useEffect } from "react";

import api from "../Services/api";

const Context = createContext();

function FilmProvider({ children }) {
  const [filmsData, setFilmsData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

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

      setFilmsData(response.data);
    }

    getFilms();
  }, []);

  useEffect(() => {
    async function getSeries() {
      const response = await api.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`
      );

      response.data.results.map((serie) => {
        serie.poster_url = `${process.env.REACT_APP_IMAGES_URL}${serie.poster_path}`;
        serie.backdrop_url = `${process.env.REACT_APP_IMAGES_URL}${serie.backdrop_path}`;

        return {
          ...serie,
        };
      });

      setSeriesData(response.data);
    }

    getSeries();
  }, []);

  return (
    <Context.Provider value={{ filmsData: filmsData, seriesData: seriesData }}>
      {children}
    </Context.Provider>
  );
}

export { Context, FilmProvider };

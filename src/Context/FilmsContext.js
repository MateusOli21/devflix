import React, { createContext, useState, useEffect } from "react";

import api from "../Services/api";

const Context = createContext();

function FilmProvider({ children }) {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    async function getFilms() {
      const response = await api.get(
        `${process.env.REACT_APP_MOVIES_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-Br&page=1`
      );

      setFilmsData(response.data);
    }

    getFilms();
  }, []);

  return (
    <Context.Provider value={{ filmsData: filmsData }}>
      {children}
    </Context.Provider>
  );
}

export { Context, FilmProvider };

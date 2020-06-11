import React from "react";

import FilmsPreview from "../../components/FilmPreview";
import DiscoverList from "../../components/DiscoverList";

function Films() {
  return (
    <>
      <FilmsPreview />
      <DiscoverList isMovies genreId={18} label={"Drama"} />
      <DiscoverList isMovies genreId={27} label={"Terror"} />
      <DiscoverList isMovies genreId={878} label={"Ficção científica"} />
      <DiscoverList isMovies genreId={16} label={"Animação"} />
    </>
  );
}

export default Films;

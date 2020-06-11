import React from "react";

import FilmsPreview from "../../components/FilmPreview";
import DiscoverList from "../../components/DiscoverList";

function Films() {
  return (
    <>
      <FilmsPreview />
      <DiscoverList isMovies genreId={878} label={"Ficção científica"} />
    </>
  );
}

export default Films;

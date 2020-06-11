import React from "react";

import SeriesPreview from "../../components/SeriesPreview";
import DiscoverList from "../../components/DiscoverList";

function Series() {
  return (
    <>
      <SeriesPreview />
      <DiscoverList isSeries genreId={28} label={"Ação"} />
      <DiscoverList isSeries genreId={80} label={"Criminal"} />
      <DiscoverList isSeries genreId={878} label={"Ficção científica"} />
      <DiscoverList isSeries genreId={14} label={"Fantasia"} />
    </>
  );
}

export default Series;

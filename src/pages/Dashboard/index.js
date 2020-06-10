import React from "react";

import FilmPreview from "../../components/FilmPreview";
import SeriesPreview from "../../components/SeriesPreview";

import { Wrapper } from "./styles";

function Dashboard() {
  return (
    <Wrapper>
      <FilmPreview isDashboard />
      <SeriesPreview isDashboard />
    </Wrapper>
  );
}

export default Dashboard;

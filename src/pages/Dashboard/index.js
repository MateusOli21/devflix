import React from "react";

import FilmPreview from "../../components/FilmPreview";
import SeriesPreview from "../../components/SeriesPreview";
import Trendings from "../../components/Trendings";

import { Wrapper } from "./styles";

function Dashboard() {
  return (
    <Wrapper>
      <Trendings />
      <FilmPreview isDashboard />
      <SeriesPreview isDashboard />
    </Wrapper>
  );
}

export default Dashboard;

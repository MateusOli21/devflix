import React from "react";

import FilmPreview from "../../components/FilmPreview";

import { Wrapper } from "./styles";

function Dashboard() {
  return (
    <Wrapper>
      <FilmPreview isDashboard />
    </Wrapper>
  );
}

export default Dashboard;

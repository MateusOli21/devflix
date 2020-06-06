import React from "react";

import Header from "../../../components/Header";

import { Container } from "./styles";

function Default({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Default;

import { createGlobalStyle } from "styled-components";

export const theme = {
  background: "#0f0f0f",
  gray: "#333",
  white: "#fff",
  primary: "#328ffb",
  secondary: "#f1af12",
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  background: ${theme.background};
  color: ${theme.white};
  
}

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font: 16px 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;

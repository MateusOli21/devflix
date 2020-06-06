import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;

  h1 {
    font-size: 1.5rem;
    color: ${theme.secondary};
  }

  nav {
    span {
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 620px) {
    padding: 1.5rem 4.25rem;

    nav {
      span {
        margin-left: 1.2rem;
      }
    }
  }
`;

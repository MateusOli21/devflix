import styled from "styled-components";
import { darken } from "polished";

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
    a {
      font-size: 0.9rem;
      font-weight: 700;
      margin-left: 0.5rem;
      color: ${theme.white};

      &:hover {
        color: ${theme.secondary};
      }
    }

    span {
      padding: 6px 12px;
      border-radius: 5px;
      background: ${theme.secondary};

      &:hover {
        color: ${theme.white};
        background: ${darken(0.05, theme.secondary)};
      }
    }
  }

  @media (min-width: 620px) {
    padding: 1.5rem 3rem;

    nav {
      a {
        margin-left: 1.2rem;
      }
    }
  }
`;

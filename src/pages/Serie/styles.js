import styled from "styled-components";
import { darken } from "polished";

import { theme } from "../../styles/global";

export const Container = styled.div``;

export const BackPage = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem 0rem;
  justify-content: flex-end;
  align-items: flex-end;

  a {
    color: ${theme.white};
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.3rem 0.8rem;
    border: 1px solid ${theme.secondary};
    border-radius: 5px;

    &:hover {
      color: ${theme.white};
      background: ${theme.secondary};
    }
  }

  @media (min-width: 620px) {
    padding: 2rem 1rem;
  }
`;

export const InfoSeparator = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.2rem 0;
  font-weight: ${(props) => (props.isGenre ? "700" : "400")};

  span {
    font-size: 0.9rem;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    border-right: 1px solid #fff;
  }

  span:last-of-type {
    border-right: none;
  }

  @media (min-width: 620px) {
    span {
      font-size: 1.2rem;
    }
  }
`;

export const Serie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  background: ${(props) =>
    props.bgImage
      ? `linear-gradient(0deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(${props.bgImage})`
      : ""};
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 0.85rem;
    font-weight: 400;
  }

  p {
    line-height: 1.25rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 620px) {
    h1 {
      font-size: 2.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      width: 50%;
    }
  }
`;

export const Buttons = styled.div`
  margin: 0.5rem 0 1.5rem;

  button {
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 5px;
    background: ${theme.secondary};
    color: ${theme.white};
    font-weight: 700;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.5rem;
    }

    &:hover {
      background: ${darken(0.05, theme.secondary)};
    }
  }
`;

import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.div`
  width: 100%;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slogan = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  h2 {
    margin-bottom: 1.5rem;
  }

  a {
    width: 100%;
    max-width: 240px;
    height: 50px;
    background: ${theme.secondary};
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;

    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 60px;
      height: 60px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }

    strong {
      flex: 1;
      text-align: center;
      color: ${theme.white};
    }

    svg {
      color: ${theme.white};
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 620px) {
    height: 520px;

    h1 {
      font-size: 2.5rem;
    }
    h2 {
      margin-bottom: 1.5rem;
    }
  }
`;

export const ContentPreview = styled.div`
  margin: 1rem 0 1rem;
  padding: 0 1.75rem;
  text-align: left;

  h1 {
    font-size: 1.5rem;
  }

  @media (min-width: 620px) {
    margin: 2rem 0 6rem;
    text-align: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 3.5rem;
    }
  }
`;

export const TabNavigation = styled.div`
  margin: 1rem 0 1rem;
  padding: 0 1.75rem;
`;

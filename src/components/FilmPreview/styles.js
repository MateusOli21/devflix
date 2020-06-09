import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0 6rem;

  h1 {
    font-size: 1.25rem;
    margin-left: 2rem;
  }

  @media (min-width: 620px) {
    h1 {
      margin: 0 3rem;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  padding: 0 2em;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    margin: 0 15px;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 0 2.25rem;
  }

  @media (min-width: 620px) {
    padding: 0 2.75rem;
  }
`;

export const Film = styled.div`
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
  margin-right: 0.75rem;

  img {
    max-width: 220px;
  }

  ${Row} &:hover {
    transform: scale(1.15);
    z-index: 1;
  }

  &:hover ~ & {
    transform: translateX(10%);
  }
`;

export const RowInner = styled.div`
  display: flex;
  margin-top: 1.5rem;
  white-space: nowrap;
  padding-bottom: 1rem;
`;

export const FilmInfo = styled.div`
  width: 100%;
  padding: 0.8rem 0.8rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid red;

  h3 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  span {
    margin: 2px 0;
    font-size: 0.85rem;
    max-width: 70%;
  }
`;

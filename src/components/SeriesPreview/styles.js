import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0rem 0 4rem;

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

export const Serie = styled.div`
  position: relative;
  display: inline-block;
  flex: 1 1 0px;
  transition: transform 500ms;
  margin-right: 0.75rem;

  img {
    border-radius: 5px;
    max-width: 180px;
  }

  ${Row} &:hover {
    transform: scale(1.1);
    z-index: 1;
    opacity: 1;
  }

  &:hover ~ & {
    transform: translateX(6%);
  }

  @media (min-width: 620px) {
    img {
      max-width: 220px;
    }
  }
`;

export const RowInner = styled.div`
  display: flex;
  margin-top: 1.5rem;
  white-space: nowrap;
  padding-bottom: 1rem;
`;

export const SerieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: 500ms opacity;

  ${Serie}:hover & {
    opacity: 1;
  }

  span {
    position: absolute;
    bottom: 0;
    padding: 1rem;
    width: 70%;
    font-size: 0.85rem;
  }
`;

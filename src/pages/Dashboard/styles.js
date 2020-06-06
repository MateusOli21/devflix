import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;

export const FilmsTitle = styled.ul`
  width: 100%;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  span {
    font-size: 0.8rem;
  }
`;

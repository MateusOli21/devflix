import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  height: 380px;
  position: relative;
  perspective: 1800px;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;

  [type="radio"] {
    display: none;
  }

  label {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: auto;
    border-radius: 8px;
    max-width: 300px;
    max-height: 220px;
    left: 0;
    right: 0;
    transition: transform 0.4s ease;
    cursor: pointer;

    img {
      width: 100%;
      max-width: 680px;
      border-radius: 5px;
    }

    span {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      padding: 0 9px;
      font-weight: 700;
      opacity: 0;
    }
  }

  @media (min-width: 620px) {
    label {
      max-width: 680px;
      max-height: 720px;

      img {
        width: 100%;
        max-width: 680px;
        border-radius: 5px;
      }

      span {
        position: absolute;
        bottom: 1.2rem;
        left: 1.1rem;
        padding: 9px 9px;
        font-weight: 700;
        opacity: 0;
      }
    }
  }

  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(-40%, 0, -280px);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-20%, 0, -140px);
  }

  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 0);

    span {
      opacity: 1;
    }
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(20%, 0, -140px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(40%, 0, -280px);
  }

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

  #slide1,
  #slide2,
  #slide3,
  #slide4,
  #slide5 {
    background: ${theme.backgroundOpt};
  }
`;

import React, { useContext } from "react";

import { Context } from "../../Context/FilmsContext";

import { Container, Row } from "./styles";

function TrendingCarousel() {
  const { trendings } = useContext(Context);

  const trendingList = trendings.slice(0, 5);
  console.log(trendingList);
  var baseNumber = 0;

  return (
    <Container>
      <Row>
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />
        {trendingList.map((trending) => (
          <label
            key={trending.id}
            htmlFor={`s${++baseNumber}`}
            id={`slide${baseNumber}`}
          >
            <img src={trending.backdrop_url} alt="poster" />

            <span>
              {trending.media_type === "movie"
                ? trending.title
                : trending.original_name}
            </span>
          </label>
        ))}
      </Row>
    </Container>
  );
}

export default TrendingCarousel;

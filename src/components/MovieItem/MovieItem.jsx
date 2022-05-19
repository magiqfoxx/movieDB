import React from "react";

import {
  MovieItemWrapper,
  LeftCont,
  RightCont,
  Title,
  Vote,
  Image,
  Genre,
  Genres,
  Description,
  Date,
  Top,
} from "./styles";

export default function MovieItem({ movie }) {
  return (
    <MovieItemWrapper>
      <LeftCont>
        <Image
          src={` https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
        />
      </LeftCont>
      <RightCont>
        <Top>
          <Title>{movie.title}</Title>
          <Vote>{movie.vote_average}</Vote>
        </Top>
        <Genres>
          {movie.genres?.map((genre, i) => (
            <Genre key={genre.id}>
              {genre.name}
              {i < movie.genres.length - 1 && " | "}
            </Genre>
          ))}
        </Genres>
        <Description>{movie.overview}</Description>
        <Date>{movie?.release_date}</Date>
      </RightCont>
    </MovieItemWrapper>
  );
}

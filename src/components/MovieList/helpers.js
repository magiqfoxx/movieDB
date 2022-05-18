export const getMovies = (movies, genres) => {
  return movies.map((movie) => {
    return {
      ...movie,
      genres: movie.genre_ids.map((id) =>
        genres.find((genre) => genre.id === id)
      ),
    };
  });
};

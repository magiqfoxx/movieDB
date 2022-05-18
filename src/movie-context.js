import * as React from "react";

import { searchMoviesFromApi, getGenresFromApi } from "./fetcher";

const MovieContext = React.createContext(undefined);

const movieReducer = (state, action) => {
  switch (action.type) {
    case "setQuery": {
      return { ...state, query: action.payload };
    }
    case "setSearchedMovies": {
      return { ...state, movie: action.payload };
    }
    case "setLoading": {
      return { ...state, loading: action.payload };
    }
    case "setGenres": {
      return { ...state, genres: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(movieReducer, {
    movie: {},
    movies: [],
    query: "",
  });
  const value = { state, dispatch };

  React.useEffect(() => {
    const getGenres = async () => {
      value.dispatch({ type: "setLoading", payload: true });
      const data = await getGenresFromApi();
      value.dispatch({ type: "setSearchedMovies", payload: data });
      value.dispatch({ type: "setLoading", payload: false });
    };
    getGenres();
  }, []);
  React.useEffect(() => {
    const getMovies = async () => {
      value.dispatch({ type: "setLoading", payload: true });
      const data = await searchMoviesFromApi(value.state.query);
      value.dispatch({ type: "setSearchedMovies", payload: data });
      value.dispatch({ type: "setLoading", payload: false });
    };
    getMovies();
  }, [value.state.query]);
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = React.useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { MovieProvider, useMovie };

import * as React from "react";

import { searchMoviesFromApi, getGenresFromApi } from "./fetcher";

const MovieContext = React.createContext(undefined);

const ratings = [
  { id: 7.5, name: 7.5 },
  { id: 8, name: 8 },
  { id: 8.5, name: 8.5 },
  { id: 9, name: 9 },
  { id: 9.5, name: 9.5 },
  { id: 10, name: 10 },
];
const languages = [
  { id: "GR", name: "Greek" },
  { id: "EN", name: "English" },
  { id: "RU", name: "Russian" },
  { id: "PO", name: "Polish" },
];

const movieReducer = (state, action) => {
  switch (action.type) {
    case "setQuery": {
      return { ...state, query: action.payload };
    }
    case "setSearchedMovies": {
      //debugger;
      return { ...state, movies: action.payload };
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
    ratings,
    languages,
  });
  const value = { state, dispatch };

  // React.useEffect(() => {
  //   const getGenres = async () => {
  //     value.dispatch({ type: "setLoading", payload: true });
  //     const data = await getGenresFromApi();
  //     value.dispatch({ type: "setSearchedMovies", payload: data });
  //     value.dispatch({ type: "setLoading", payload: false });
  //   };
  //   getGenres();
  // }, []);
  // const getMovies = async () => {
  //   value.dispatch({ type: "setLoading", payload: true });
  //   const data = await searchMoviesFromApi(value.state.query);
  //   value.dispatch({ type: "setSearchedMovies", payload: data });
  //   value.dispatch({ type: "setLoading", payload: false });
  // };
  // React.useEffect(() => {
  //   getMovies();
  // }, [value.state.query]);
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

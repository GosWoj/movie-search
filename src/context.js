import React, { useState, useContext, useEffect, useCallback } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("star");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(0);

  const fetchMovies = useCallback(
    async (url) => {
      setLoading(true);

      const urlPage = `&page=${page}`;
      const urlQuery = `&s=${query}`;

      url = `${API_ENDPOINT}${urlQuery}${urlPage}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
          setResults(parseInt(data.totalResults));
          setError({ show: false, message: "" });
        } else {
          setError({ show: true, message: data.Error });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [page, query]
  );

  const nextPage = () => {
    setPage((oldPage) => {
      return oldPage + 1;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      return oldPage - 1;
    });
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        query,
        setQuery,
        page,
        setPage,
        nextPage,
        prevPage,
        results,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

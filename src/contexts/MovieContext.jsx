import { useState, createContext, useContext, useEffect } from "react";
const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MoviesProvider = ({ children }) => {
  const [favourites, setfavourites] = useState([]);

  useEffect(() => {
    const storedfavs = localStorage.getItem("favourites");
    if (storedfavs) setfavourites(JSON.parse(storedfavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addTofavourites = (movie) => {
    setfavourites((prev) => prev.some(m => m.id === movie.id) ? prev : [...prev, movie]);
  };
  const removeFromfavourites = (movieId) => {
    setfavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isfavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const values = {
    favourites,
    addTofavourites,
    removeFromfavourites,
    isfavourite,
  };

  return (
    <MovieContext.Provider value={values}>
      {children}
    </MovieContext.Provider>
  );
};

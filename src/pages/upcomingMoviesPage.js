import React, {useState, useEffect} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovieUpcoming } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const UpComingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      getMovieUpcoming()
      .then(movies => {
        setMovies(movies);
      });
  }, []);
  return (
    <MovieListPageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={movie => <AddToFavoritesButton movie={movie}  /> }
    />
  );
};

export default UpComingMoviesPage;
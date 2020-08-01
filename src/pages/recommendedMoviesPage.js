import React, {useState, useEffect} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovieRecommendations } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const RecommendedMoviesPage = ({movie}) => {
  const [movies, setMovies] = useState([]);
  console.log(movie)
  useEffect(() => {
      getMovieRecommendations(movie.id)
      .then(movies => {
        setMovies(movies);
      });
  }, []);
  return (
    <MovieListPageTemplate
      title="Recommended Movies"
      movies={movies}
      action={movie => <AddToFavoritesButton movie={movie}  /> }
    />
  );
};

export default RecommendedMoviesPage;
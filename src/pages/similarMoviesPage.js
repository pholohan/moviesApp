import React, {useState, useEffect} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovieSimilar } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const SimilarMoviesPage = (props) => {
    const movie = props.location.state.movie 
    const [movies, setMovies] = useState([]);
  useEffect(() => {
      getMovieSimilar(movie.id)
      .then(movies => {
        setMovies(movies);
      });
  }, []);
  return (
    <MovieListPageTemplate
      title="Similar Movies"
      movies={movies}
      action={movie => <AddToFavoritesButton movie={movie}  /> }
    />
  );
};

export default SimilarMoviesPage;
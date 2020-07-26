import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import FilterControls from "../filterControls";

const MovieListPageTemplate = ({movies, title, action}) => {
  console.log(movies)
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [dateFilter, setDateFilter] = useState("");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    })    
    .filter(m => {
      return m.release_date.toLowerCase().search(dateFilter.toLowerCase()) !== -1;
    })
    ;

  const handleChange = (type, value) => {
    if (type === "name") {
      setNameFilter(value)}
    else if (type === "genre"){
      setGenreFilter(value)}
    else {
      setDateFilter(value)}
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <MovieList
        action={action}
        movies={displayedMovies}
      ></MovieList>
    </>
  );
};

export default MovieListPageTemplate ;
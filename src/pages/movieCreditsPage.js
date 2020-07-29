import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieCredit from "../components/movieCredit";

const MovieCreditPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieCredit credit={props.location.state.credit} /> 
      </PageTemplate>
  );
};

export default MovieCreditPage;
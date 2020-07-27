import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";

const MovieCreditsPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieCredit credit={props.location.state.credit} /> 
      </PageTemplate>
  );
};

export default MovieCreditPage;
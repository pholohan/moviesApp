import React from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { Link, Route, withRouter } from "react-router-dom";
import MovieReviews from "../components/movieReviews";
import MovieCredits from "../components/movieCredits";
import RecommendedMoviesPage from "../pages/recommendedMoviesPage";
import SimilarMoviesPage from "../pages/similarMoviesPage";
import useMovie from "../hooks/useMovie";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/credits`}
              >
                Show Cast and Crew
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Cast and Crew 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/credits`}
          render={props => <MovieCredits movie={movie} {...props} />}
        />
        <div className="row">
          <div className="col-12 ">
            <Link 
                className="btn btn-primary btn-block active" 
                to={{pathname: `/recommendations/${id}`,
                state: {
                  movie: movie
                }}}
            >
              See Movie Recommendations
            </Link>
           </div>
        </div>
        <Route
          path={`/recommendations/${id}`}
          params={props => <RecommendedMoviesPage movie={movie} {...props} />}
        />
        <div className="row">
          <div className="col-12 ">
            <Link 
                className="btn btn-primary btn-block active" 
                to={{pathname: `/similar/${id}`,
                state: {
                  movie: movie
                }, }}
            >
              See Similar Movies
            </Link>
            <Route
            path={`/similar/${id}`}
            params={props => <SimilarMoviesPage movie={movie} {...props} />}
            />
          </div>
        </div>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
}

  export default withRouter(MoviePage);
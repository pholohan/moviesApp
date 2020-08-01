import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'  // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpComingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MovieCreditPage from './pages/movieCreditsPage'
import RecommendedMoviesPage from './pages/recommendedMoviesPage'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
      <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
            <Switch>
              <Route path="/recommendations/:id" component={RecommendedMoviesPage} />
              <Route path="/credits/:id" component={MovieCreditPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/upcoming" component={UpComingMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
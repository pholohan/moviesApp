# Project - ReactJS app.

Name:  Paul Holohan

## Overview.
Expansion of the Movies Fan App
 
 + Upcoming Movies
 + Similar Movies
 + Recommended Movies
 + Details of Cast and Crew for Movie
 + Information on Cast and Crew for Movie

## Setup requirements.

No additional requirements after cloning the repo as it is an expansion of the Movies App. 

## API Data Model

 export const getMovieCredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.cast);
  };
  
  {
  "id": 605116,
  "cast": [
    {
      "cast_id": 8,
      "character": "Art",
      "credit_id": "5cec34a1c3a3685a161f83f7",
      "gender": 2,
      "id": 134,
      "name": "Jamie Foxx",
      "order": 0,
      "profile_path": "/hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg"
    },
    {
      "cast_id": 7,
      "character": "Frank",
      "credit_id": "5cec34999251416983b94b26",
      "gender": 2,
      "id": 24045,
      "name": "Joseph Gordon-Levitt",
      "order": 1,
      "profile_path": "/dhv9f3AaozOjpvjAwVzOWlmmT2V.jpg"
    },
    {
      "cast_id": 21,
      "character": "Robin",
      "credit_id": "5f11538ec616ac00325e07d2",
      "gender": 1,
      "id": 1676520,
      "name": "Dominique Fishback",
      "order": 2,
      "profile_path": "/f741e0kvk7vfbFW2HcNE5Pbhlef.jpg"
    },

  export const getMovieRecommendations = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovieSimilar = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovieUpcoming = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => {console.log(json)
        return json.results});
  };

  export const getMoviePerson = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
  };


## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /blogs - displays all published blogs.
+ /blogs/:id (private) - detail view of a particular blog.
+ /blogs/:id/comments (private) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/fileA.js
+ useContext hook - src/components/fileb.js
+ Extended Link - src/components/fileA.js
+ Programmatic navigation - src/pages/fileC.js
+ etc
+ etc
+ etc

## Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png

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
### Movie Credits EndPoint 
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


### Movie Recommendations EndPoint

    export const getMovieRecommendations = id => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then(res => res.json())
        .then(json => json.results);
    };

    {
      "page": 1,
      "results": [
        {
          "id": 547016,
          "video": false,
          "vote_count": 1802,
          "vote_average": 7.3,
          "title": "The Old Guard",
          "release_date": "2020-07-10",
          "original_language": "en",
          "original_title": "The Old Guard",
          "genre_ids": [
            28,
            14
          ],
          "backdrop_path": "/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",
          "adult": false,
          "overview": "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
          "poster_path": "/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
          "popularity": 61.365
        },
        {
          "id": 545609,
          "video": false,
          "vote_count": 2932,
          "vote_average": 7.4,
          "title": "Extraction",
          "release_date": "2020-04-24",
          "original_language": "en",
          "original_title": "Extraction",
          "genre_ids": [
            28,
            18,
            53
          ],
          "backdrop_path": "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
          "adult": false,
          "overview": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…",
          "poster_path": "/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
          "popularity": 37.61
        },
 
  
### Similar Movie EndPoint

    export const getMovieSimilar = id => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then(res => res.json())
        .then(json => json.results);
    };

    {
      "page": 1,
      "results": [
        {
          "adult": false,
          "backdrop_path": "/59jis0LfmsOl1C3Rk8hggYRkSSx.jpg",
          "genre_ids": [
            80,
            18
          ],
          "id": 20289,
          "original_language": "en",
          "original_title": "Rush",
          "overview": "Undercover cop Jim Raynor (Jason Patric) is a seasoned veteran. His partner, Kristen Cates (Jennifer Jason Leigh), is lacking in experience, but he thinks she's tough enough to work his next case with him: a deep cover assignment to bring down the notoriously hard-to-capture drug lord Gaines (Gregg Allman). While their relationship turns romantic during the assignment, they also turn into junkies, and will have to battle their own addictions if they want to bring down Gaines once and for all.",
          "poster_path": "/dqCDrQi825fh9qELz4nMCSGj2OF.jpg",
          "release_date": "1991-12-22",
          "title": "Rush",
          "video": false,
          "vote_average": 6.8,
          "vote_count": 74,
          "popularity": 9.494
        },
        {
          "id": 180863,
          "video": false,
          "vote_count": 2180,
          "vote_average": 7,
          "title": "T2 Trainspotting",
          "release_date": "2017-01-27",
          "original_language": "en",
          "original_title": "T2 Trainspotting",
          "genre_ids": [
            80,
            18
          ],
          "backdrop_path": "/kR48L1E3OLOkQcnlmpi5wDj7ZZt.jpg",
          "adult": false,
          "overview": "After 20 years abroad, Mark Renton returns to Scotland and reunites with his old friends Sick Boy, Spud and Begbie.",
          "poster_path": "/nmTgtQQjRzAB0mue57Rrxe8y5vv.jpg",
          "popularity": 13.571
        },

  
### Upcoming Movies EndPoint

    export const getMovieUpcoming = () => {
      return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
      )
        .then(res => res.json())
        .then(json => {console.log(json)
          return json.results});
    };

    {
      "results": [
        {
          "popularity": 196.491,
          "vote_count": 63,
          "video": false,
          "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
          "id": 577922,
          "adult": false,
          "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
          "original_language": "en",
          "original_title": "Tenet",
          "genre_ids": [
            28,
            53
          ],
          "title": "Tenet",
          "vote_average": 7.3,
          "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
          "release_date": "2020-08-22"
        },


### Movie Cast and Crew Information EndPoint

    export const getMoviePerson = id => {
      return fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then(res => res.json())
    };

    {
      "birthday": "1967-12-13",
      "known_for_department": "Acting",
      "deathday": null,
      "id": 134,
      "name": "Jamie Foxx",
      "also_known_as": [
        "جيمي فوكس",
        "Джейми Фокс",
        "제이미 폭스",
        "ジェイミー・フォックス",
        "เจมี ฟ็อกซ์",
        "傑米·福克斯",
        "Eric Marlon Bishop",
        "Τζέιμι Φοξ"
      ],
      "gender": 2,
      "biography": "Eric Marlon Bishop (born December 13, 1967), professionally known as Jamie Foxx, is an American actor, singer-songwriter, stand-up comedian, and talk radio host. As an actor, his work in the film Ray earned him the Academy Award and BAFTA Award for Best Actor as well as the Golden Globe Award for Best Actor in a musical/comedy. He is also a Grammy Award winning musician, producing two albums which have charted highly on the Billboard 200: Unpredictable, which topped the chart, and Intuition.\n\nFoxx was abandoned seven months after birth, and was subsequently adopted and raised in Terrell by his mother's adoptive parents, Estelle and Mark Talley. Foxx had a strict Baptist upbringing and began piano lessons at the age of five by his grandmother's orders. He has often acknowledged his grandmother's influence in his life as one of the greatest reasons for his success. When he found that female comedians were often called first to perform, he changed his name to Jamie Foxx, feeling that it was an ambiguous enough name to disallow any biases. He chose his surname as a tribute to comedian Redd Foxx.\n\nFrom 1996 to 2001, Foxx starred in his own sitcom The Jamie Foxx Show, and in 1992 he made his film debut in Toys a comedy directed by Barry Levinson. Following Toys, his first dramatic role came in Oliver Stone's 1999 film Any Given Sunday, where he portrayed a hard-partying American football player. Foxx has since evolved into a respected dramatic actor. Foxx was featured as taxi driver Max Durocher in the film Collateral alongside Tom Cruise, for which he received outstanding reviews and a nomination for the Academy Award for Best Supporting Actor. His standout performance, however, was his portrayal of Ray Charles in the biopic Ray (2004), for which he won the Academy Award for Best Actor and the BAFTA Award for Best Actor in a Leading Role. Foxx is the second male in history to receive two acting Oscar nominations in the same year for two different movies, Collateral and Ray.\n\nIn September 2007, Foxx was awarded a star on the Hollywood Walk of Fame.",
      "popularity": 11.954,
      "place_of_birth": "Terrell, Texas, USA",
      "profile_path": "/hPwCMEq6jLAidsXAX5BfoYgIfg2.jpg",
      "adult": false,
      "imdb_id": "nm0004937",
      "homepage": null
    }

## App Design.

### Component catalogue.

Addition of Date Filter to Filter Controls, Movie Review to Storys and Movies Credits to Storys

![](/images/Story.png)

### UI Design.

![](/images/UpcomingMovies.png)
>Shows Movie Card with List of Upcoming Movies

![](/images/MovieDetails.png)
>Shows Movie Details with Additoinal Movie Options for Show Cast and Crew, Movie Recommendations and Similar Movies

![](/images/ShowCastandCrew.png)
>Show Cast and Crew from Movie with the option of Show More Info on each cast member

![](/images/MoreInfoonCast.png)
>Shows Biography of Cast Member

![](/images/MovieRecommendations.png)
>Shows Movie Recommendations based on the Movie Selected

![](/images/SimilarMovies.png)
>Shows Similar Movies based on the Movie Selected

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

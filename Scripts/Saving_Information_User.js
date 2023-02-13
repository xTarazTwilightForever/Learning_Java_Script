"use strict";

function saving_Information_User() {
    let userWatchMovies = true;
    let numberOfFilms = +prompt("How many movies have you watched?", "");

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

    if (personalMovieDB.count == 0) {
        userWatchMovies = false;
        console.log("You don't watch movies. ");
    } else if (personalMovieDB.count < 10) {
        console.log("Seen quite a few movies.");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("You are a great viewer!");
    } else if (personalMovieDB.count > 30) {
        console.log("You're a movie buff!")
    } else {
        console.log("Error.")
    }
    if (userWatchMovies == true) {
        for (let i = 0; i < 2; i++) {

            const lastUserMovie = prompt("One of the last watched movies?", ""),
                filmUserScore = prompt("How much do you rate it?", "");

            if (lastUserMovie != null && filmUserScore != null && lastUserMovie != '' &&
                filmUserScore != '' && lastUserMovie.length < 50) {
                personalMovieDB.movies[lastUserMovie] = filmUserScore;
                console.log(personalMovieDB);
                console.log("Done!");
            } else {
                console.log("Eror!");
                i--;
            }
        }
    }
}
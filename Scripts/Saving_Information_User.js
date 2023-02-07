"use strict";
function saving_Information_User(){
let numberOfFilms = prompt("How many movies have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastUserMovie = prompt("One of the last watched movies?", ""),
    filmUserScore = prompt("How much do you rate it?", "");
personalMovieDB.movies[lastUserMovie] = filmUserScore;

console.log(personalMovieDB);
}
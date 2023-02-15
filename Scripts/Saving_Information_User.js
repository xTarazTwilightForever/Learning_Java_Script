"use strict";

let numberOfFilms;

function saving_Information_User() {

    while (numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)) {
        numberOfFilms=+prompt("How many movies have you watched?", "");
    }


    const personalMovieDB= {

        count: numberOfFilms,
        movies: {} ,
        actors: {},
        genres: [],
        private: false
    };
    writeYourGenres();

    function rememberMyFilms() {
        for (let i=0; i < 2; i++) {

            const lastUserMovie=prompt("One of the last watched movies?", ""),
            filmUserScore=prompt("How much do you rate it?", "");

            if (lastUserMovie !=null && filmUserScore !=null && lastUserMovie !='' && filmUserScore !='' && lastUserMovie.length < 50) {
                personalMovieDB.movies[lastUserMovie]=filmUserScore;
                console.log(personalMovieDB);
                console.log("Done!");
            }

            else {
                console.log("Eror!");
                i--;
            }
        }
    }

    rememberMyFilms();



    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Seen quite a few movies.");
        }

        else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("You are a great viewer!");
        }

        else if (personalMovieDB.count > 30) {
            console.log("You're a movie buff!")
        }

        else {
            console.log("Error.")
        }
    }

    detectPersonalLevel();


    function writeYourGenres() {
        for (let i=1; i <=3; i++) {
            personalMovieDB.genres[i-1]=prompt(`Your favorite genre at number: ${i}`);
        }
    }

    function showMyDB(hidden) {
        if ( !hidden) {}
    }

    showMyDB(personalMovieDB.private);
}
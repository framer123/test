"use strict";



let numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели ?',"");


const personalMovieDB={
    count:numberOfFilms,
    movies:{

    },
    actors:{

    },
    genres:[],
    privat:false
};

let lastMovie1=prompt('Один из последних просмотренных фильмов ?',"");
let movieRatingUser1=prompt('На сколько его оцените ?',"");
let lastMovie2=prompt('Один из последних просмотренных фильмов ?',"");
let movieRatingUser2=prompt('На сколько его оцените ?',"");

personalMovieDB.movies[lastMovie1]=movieRatingUser1;
personalMovieDB.movies[lastMovie2]=movieRatingUser2;

console.log(personalMovieDB);




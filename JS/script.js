"use strict";


let numberOfFilms;

function start(){
    numberOfFilms=prompt('Сколько фильмов вы уже посмотрели ?',"");

    while(numberOfFilms==''|| numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms=prompt('Сколько фильмов вы уже посмотрели ?',"");
    }

}

start();

const personalMovieDB={
    count:numberOfFilms,
    movies:{

    },
    actors:{

    },
    genres:[],
    privat:false
};

function rememberMyMovies(){
    for(let i=0;i<2;i++){
        const lastMovie1=prompt('Один из последних просмотренных фильмов ?',"");
         const movieRatingUser1=prompt('На сколько его оцените ?',"");
     
         if( lastMovie1!=null && movieRatingUser1!=null &&
             lastMovie1 !='' && movieRatingUser1 !='' && lastMovie1.length<50)
             {
                 personalMovieDB.movies[lastMovie1]=movieRatingUser1;
                 console.log("done");
             }else{
                 console.log('error');
                 i--;          // esli if uslovie ne proizoidet,to for oktativaetsa nazad i zanovo sprosit
             }
     
         
     }
}
rememberMyMovies();


function detectPersonalLevel(){
    if(personalMovieDB.count <10){
        console.log("Просмотрено мало фильмов");
    }else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
        console.log("Вы класический зритель");
    }else if(personalMovieDB.count>=30){
        console.log("Вы посмотрели много фильмов");
    }else{
        console.log('error');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
    
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i=1;i<=3;i++){
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
    
}

writeYourGenres();



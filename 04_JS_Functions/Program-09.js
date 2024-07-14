var showMovieInfo;
var movie; 

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

showMovieInfo(); 

var movie; 

movie = {}; 
showMovieInfo(); 

movie = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Docter, Ronaldo Del Carmen"
};
showMovieInfo();
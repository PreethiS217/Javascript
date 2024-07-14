var movie1, movie2, movie3, movie4;

movie1 = {
    title     : "Inside Out",
    actors    : "Amy Poehler, Bill Hader",
    directors : "Pete Docter, Ronaldo Del Carmen"
};

movie2 = {
    title     : "Spectre",
    actors    : "Daniel Craig, Christoph Waltz",
    directors : "Sam Mendes"
};

movie3 = {
    title     : "Star Wars: Episode VII - The Force Awakens",
    actors    : "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors : "J.J. Abrams"
};

movie4 = {
    title     : "Inception",
    actors    : "Leonardo DiCaprio, Joseph Gordon-Levitt",
    directors : "Christopher Nolan"
};

function displayMovieInfo(movie) {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
}

displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

var event1, event2, event3;

event1 = {
    title     : "Project Deadline",
    date      : "2024-08-01",
    location  : "Office",
    description: "Submit the final report for the project."
};

event2 = {
    title     : "Team Meeting",
    date      : "2024-08-05",
    location  : "Conference Room",
    description: "Discuss the upcoming milestones and tasks."
};

event3 = {
    title     : "Annual Company Picnic",
    date      : "2024-08-15",
    location  : "Central Park",
    description: "A day of fun, food, and activities with the company."
};

function displayEventInfo(event) {
    console.log("Event: " + event.title);
    console.log("Date: " + event.date);
    console.log("Location: " + event.location);
    console.log("Description: " + event.description);
    console.log("------------------------------");
}

displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);
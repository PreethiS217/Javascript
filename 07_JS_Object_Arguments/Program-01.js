var planet1, planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Earth",
    position: 3,
    type: "Terrestrial",
    radius: 6371,
    sizeRank: 5
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position + 
           ", type: " + planet.type + 
           ", radius: " + planet.radius + " km" + 
           ", size rank: " + planet.sizeRank;
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
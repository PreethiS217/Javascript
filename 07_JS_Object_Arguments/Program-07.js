var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

var getBig = function (str) {
    return str.toUpperCase();
};

var getSmall = function (str) {
    return str.toLowerCase();
};

console.log(getBig("Earth"));
console.log(getBig("Mars"));

console.log(getSmall("VENUS"));
console.log(getSmall("NEPTUNE"));
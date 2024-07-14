var getPlayerName = function (playerName) {
    var prefix = "====";
    var suffix = "====";
    return prefix + " " + playerName + " " + suffix;
};

console.log(getPlayerName("Kiki")); 
console.log(getPlayerName("Mahesha"));
var getPlayerNameWithBorder = function (playerName) {
    return "|\n| " + playerName + "\n|";
};

console.log(getPlayerNameWithBorder("Jahver"));
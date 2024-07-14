var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

var player;

function showPlayerLocation(player) {
    console.log(player.name + " is in " + player.place);
}

function showPlayerHealth(player) {
    console.log(player.name + " has health " + player.health);
}

function showPlayerInfo(player) {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
}

player = player1;
showPlayerInfo(player);

player = player2;
showPlayerInfo(player);
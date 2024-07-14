var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth;
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);
showPlayerHealth("Artemis", 75);
showPlayerHealth("Zephyr", 60);
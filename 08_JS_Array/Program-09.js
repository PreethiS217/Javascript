var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

players.push("Mara");
players.push("Tarek");

showArguments = function (item, index, wholeArray) {

  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
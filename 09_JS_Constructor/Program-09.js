var Player = function (name, health) {
    var newLine = spacer.newLine();
  
    this.name = name;
    this.health = health;
    this.items = [];
    this.place = null;
  
    this.addItem = function (item) {
      this.items.push(item);
    };
  
    this.getNameInfo = function () {
      return this.name;
    };
  
    this.getHealthInfo = function () {
      return this.name + " has health " + this.health;
    };
  
    this.getPlaceInfo = function () {
      return this.name + " is in " + this.place.title;
    };
  
    this.getItemsInfo = function () {
      var itemsString = "Items:" + newLine;
  
      this.items.forEach(function (item) {
        itemsString += "   - " + item + newLine;
      });
  
      return itemsString;
    };
  
    this.getInfo = function (character) {
      var place = this.getPlaceInfo();
      var health = this.getHealthInfo();
      var longest = Math.max(place.length, health.length) + 4;
  
      var info = spacer.box(this.getNameInfo(), longest, character);
      info += spacer.wrap(place, longest, character);
      info += spacer.newLine() + spacer.wrap(health, longest, character);
      info += newLine + spacer.line(longest, character);
  
      info += newLine;
      info += "  " + this.getItemsInfo();
      info += newLine;
      info += spacer.line(longest, character);
      info += newLine;
  
      return info;
    };
  
    this.showInfo = function (character) {
      console.log(this.getInfo(character));
    };
  
    this.dropLastItem = function () {
      return this.items.pop();
    };
  };
  
  var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
  );
  
  var player1 = new Player("Kandra", 50);
  player1.place = library;
  player1.addItem("a rusty key");
  player1.addItem("The Sword of Doom");
  
  var player2 = new Player("Dorian", 70);
  player2.place = library;
  player2.addItem("a shiny shield");
  player2.addItem("a healing potion");
  
  player1.showInfo("=");
  player2.showInfo("=");
  
  player1.dropLastItem();
  player2.dropLastItem();
  
  console.log("After dropping the last item:");
  player1.showInfo("=");
  player2.showInfo("=");  
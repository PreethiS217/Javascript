var items;
var showInfo;
var totalLetters;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

items.push("Machu Picchu"); 
items[items.length] = "Great Wall of China"; 

showInfo = function (itemToShow) {
    console.log(itemToShow + " (Length: " + itemToShow.length + " letters)");
};

items.forEach(showInfo);

totalLetters = function (itemsArray) {
    var total = 0;
    itemsArray.forEach(function(item) {
        total += item.length;
    });
    return total;
};

console.log("Total number of letters in all items: " + totalLetters(items));
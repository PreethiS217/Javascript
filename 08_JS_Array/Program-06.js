var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log("Initial items:", items);

removed = items.pop();
console.log(removed + " was removed");

console.log("Remaining items joined:", items.join(" and "));

items.push("The Eiffel Tower");

console.log("Updated items joined:", items.join(" and "));

items[1] = "The Taj Mahal";
console.log("After updating with square brackets:", items.join(" and "));

items.push("Machu Picchu", "Great Wall of China");
console.log("Final items joined:", items.join(" and "));
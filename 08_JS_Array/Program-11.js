var costs = [1.99, 4.95, 2.50, 9.87, 3.49]; 
var numOfEach = [2, 1, 5, 2, 3]; 

var getTotalBill = function (itemCosts, itemCounts) {
    var total = 0;

    itemCosts.forEach(function (cost, i) {
        total += cost * itemCounts[i];
    });

    return total;
};

console.log("The total cost is $" + getTotalBill(costs, numOfEach));

var getTotalBillModified = function (itemCounts, itemCosts) {
    var total = 0;

    itemCounts.forEach(function (count, i) {
        total += count * itemCosts[i];
    });

    return total;
};

console.log("The total cost (modified function) is $" + getTotalBillModified(numOfEach, costs));

var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
    { cost: 3.49, numberBought: 3 }
];

var getTotalBillFromObjects = function (items) {
    var total = 0;

    items.forEach(function (item) {
        total += item.cost * item.numberBought;
    });

    return total;
};

console.log("The total cost (object-based function) is $" + getTotalBillFromObjects(items));
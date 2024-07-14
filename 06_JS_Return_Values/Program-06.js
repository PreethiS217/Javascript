var getMessage = function () {
    return "I’m going on an adventure!";
};

var getHelloTo = function (name) {
    return "Hello to " + name;
};

var sum = function (number1, number2) {
    return number1 + number2;
};

var totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

console.log(getMessage()); 
console.log(getHelloTo("Dax")); 
console.log(getHelloTo("Alice")); 
console.log(sum(5, 10));
console.log(totalCost(30, 40, 3));
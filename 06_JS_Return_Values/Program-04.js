var add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

var differentSum = add(15, 27);
console.log(differentSum); 

var number1 = 50;
var number2 = 23;
var sum = add(number1, number2);
console.log(`The sum of ${number1} and ${number2} is ${sum}`); 

var totalSum = add(add(10, 20), 30);
console.log(totalSum); 

var addThree = function (number1, number2, number3) {
    return number1 + number2 + number3;
};

var sumOfThree = addThree(5, 15, 25);
console.log(sumOfThree); 
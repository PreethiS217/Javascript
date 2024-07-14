var showSum;

showSum = function (number1, number2) {
    var total = number1 + number2;
    console.log("The sum is " + total);
};

showSum(56, 74);

var showProduct;

showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};

showProduct(3, 4);
showProduct(7, 8);
showProduct(10, 5);

var showDifference;

showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};

showDifference(10, 5);
showDifference(100, 45);

var showQuotient;

showQuotient = function (number1, number2) {
    if (number2 === 0) {
        console.log("Cannot divide by zero.");
    } else {
        var quotient = number1 / number2;
        console.log("The quotient is " + quotient);
    }
};

showQuotient(10, 2);
showQuotient(100, 25);
showQuotient(7, 0); 
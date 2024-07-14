var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var cube;

cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

cube(3);
cube(-4);
cube(5.5);
cube(0.2);

var squareRoot;

squareRoot = function (number) {
  var result;
  result = Math.sqrt(number);
  console.log("The square root of " + number + " is " + result);
};

squareRoot(9);
squareRoot(16);
squareRoot(2);
squareRoot(0.25);
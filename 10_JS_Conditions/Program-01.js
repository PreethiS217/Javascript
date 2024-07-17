var secret = 8;
var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  } else if (userNumber === secret) {
    console.log("Well done!");
  }
};

guess(2); 
guess(10);
guess(8); 
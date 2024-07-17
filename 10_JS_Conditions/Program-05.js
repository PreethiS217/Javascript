var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber < secret) {
        return "Too low!";
      } else if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Too high!";
      }
    };
  };
  
  var guess = getGuesser();
  
  console.log(guess(2)); 
  console.log(guess(5)); 
  console.log(guess(8));   
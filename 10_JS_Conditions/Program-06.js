var getGuesser = function (range, offset) {
    var secret = Math.floor(Math.random() * range + offset);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else if (userNumber > secret) {
        return "Too high!";
      } else {
        return "Too low!";
      }
    };
  };
  
  var guess = getGuesser(20, 30); 
  console.log(guess(25)); 
  console.log(guess(35)); 
  console.log(guess(40));  
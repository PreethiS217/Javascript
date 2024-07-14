var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
console.log(message.substr(charIndex, 3)); 

var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index: " + goIndex); 

var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6)); 

var lastOoIndex = message.lastIndexOf("oo");
console.log("The last 'oo' in 'Moon' starts at index: " + lastOoIndex); 
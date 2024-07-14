var msg;
var anotherMessage;
var showMessage;
msg = "It's full of stars!";
anotherMessage = "The universe is vast!";

showMessage = function () {
    console.log(msg); 
    console.log(anotherMessage); 
    console.log("------------------------------");
    
    var combinedMessage = msg + " " + anotherMessage;
    console.log(combinedMessage);
};

showMessage();
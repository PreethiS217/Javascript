var sayHello;
var printLetters;

sayHello = function () {
    console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

printLetters();
var question1 = {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
};

var question2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
};

var question3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
};

function showQuizQuestion(question) {
    console.log("Question: " + question.question);
    console.log("Options:");
    question.options.forEach(function(option, index) {
        console.log((index + 1) + ". " + option);
    });
    console.log("------------------------------");
}

showQuizQuestion(question1);
showQuizQuestion(question2);
showQuizQuestion(question3);
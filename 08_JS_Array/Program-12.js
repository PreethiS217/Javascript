var displayQuestion = function (questionAndAnswer) {
    var options = ["A", "B", "C", "D", "E"];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(function (answer, i) {
        console.log(options[i] + " - " + answer);
    });
};

var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
};

var question2 = {
    question: "What is 2 + 2?",
    answers: [
        "3",
        "4",
        "5",
        "6"
    ],
    correctAnswer: "4"
};

var question3 = {
    question: "What is the largest planet in our solar system?",
    answers: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
    ],
    correctAnswer: "Jupiter"
};

var questions = [question1, question2, question3];

questions.forEach(displayQuestion);

console.log("Displaying the second question:");
displayQuestion(questions[1]);
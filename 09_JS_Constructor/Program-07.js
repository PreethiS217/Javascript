var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("Lyon");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Marseille");

question1.showQuestion();

var question2 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

question2.addOption("Earth");
question2.addOption("Jupiter");
question2.addOption("Saturn");
question2.addOption("Mars");

var question3 = new QuizQuestion(
    "What is the smallest prime number?",
    "2"
);

question3.addOption("1");
question3.addOption("2");
question3.addOption("3");
question3.addOption("5");
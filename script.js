var score = 0;
var currentQuestion = 0;
var secondsLeft = 76;
var pauseInterval = 0;
var wrongAnswer = 10;
var createUl = document.createElement("ul");

// Variables for my buttons

var startScreenEl = document.getElementById('start-screen');
var startButtonEl = document.getElementById('start-button');
var nextButtonEl = document.getElementById('next-button');

// Variable for the timer, querySelector selects the child element from the timer class from my index.html file

var timeEl = document.querySelector("#timer");

// Variables for the quiz 

var apiQuizEl = document.getElementById('api-quiz');
var questionsEl = document.getElementById("question");
var multipleChoicesEl = document.getElementById('multi-choices');
var answerEl = document.getElementById('answer');
var wrapper = document.querySelector("#wrap");


// Found these questions on https://www.interviewbit.com/javascript-mcq/
// I got this idea from the event-bubbling section in the UW Gitlab.
var multiQuestions = [

    // Question 1

    {
        question: 'Which of the following methods is used to access HTML elements using Javascript:',
        multipleChoices: ['getElementbyId()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
        answer: 'Both A and B'
    },

    // Question 2

    {
        question: 'When an operators value is NULL, the typeof returned by the unary operator is:',
        multipleChoices: ['Boolean', 'Undefined', 'Object', 'Integer'],
        answer: 'Object'
    },

    // Question 3

    {
        question: 'Javascript is an _______ language?',
        multipleChoices: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        answer: 'Object-Oriented'
    },

    // Question 4

    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        multipleChoices: ['var', 'let', 'Both A and B', 'None of the above'],
        answer: 'Both A and B'
    },

    // Question 5

    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        multipleChoices: ['document.write', 'console.log()', 'window.alert', 'All of the above'],
        answer: 'All of the above'
    },
];

// Start button.

startButtonEl.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (pauseInterval === 0) {
        pauseInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(pauseInterval);
                allDone();
                timeEl.textContent = "Time's up!";
            }
        }, 1000);
    }
    mainScreen(currentQuestion);
});

// Function for rendering the questions, choices, and answers. The for loop allows for questions to be added in the future with multiQuestion.length

function mainScreen(currentQuestion) {
    startScreenEl.innerHTML = "";
    createUl.innerHTML = "";
    for (var i = 0; i < multiQuestions.length; i++) {

        //  Variables appending the questions and choices for the quiz

        var usersQuestion = multiQuestions[currentQuestion].question;
        var usersMultiChoice = multiQuestions[currentQuestion].multipleChoices;
        startScreenEl.textContent = usersQuestion;
    }

    // This section allows for the next question to be displayed when the first question is answered.

    usersMultiChoice.forEach(function (newItem) {
        var pasteItem = document.createElement("li");
        pasteItem.textContent = newItem;
        startScreenEl.appendChild(createUl);
        createUl.appendChild(pasteItem);
        pasteItem.addEventListener("click", (getAnswer));
    })
}

// This function will check the answer from the choice selected and determine if it is correct or not.

function getAnswer(event) {
    var pageElement = event.target;

    if (pageElement.matches("li")) {

        var createText = document.createElement("div");
        createText.setAttribute("id", "createText");
        if (pageElement.textContent == multiQuestions[currentQuestion].answer) {
            score++;
            createText.textContent = "Correct! The answer is:  " + multiQuestions[currentQuestion].answer;
        } else {

            // Will deduct -10 seconds off secondsLeft for wrong answers

            secondsLeft = secondsLeft - wrongAnswer;
            createText.textContent = "Wrong! ): The correct answer is:  " + multiQuestions[currentQuestion].answer;
        }

    }

    // currentQuestion determines which question the user is currently on

    currentQuestion++;

    if (currentQuestion >= multiQuestions.length) {
        allDone();
        createText.textContent = "End of quiz!" + " " + "You got  " + score + "/" + multiQuestions.length + " Correct!";
    } else {
        mainScreen(currentQuestion);
    }
    startScreenEl.appendChild(createText);

}

// All done function that will return a "Test is over" string, will show the score, end of quiz score, and an input box to enter in initials

function allDone() {
    startScreenEl.innerHTML = "";
    timeEl.innerHTML = "";

    // Creates an h2 element when the quiz is over

    var createHeaderTwo = document.createElement("h2");
    createHeaderTwo.setAttribute("id", "createHeaderTwo");
    createHeaderTwo.textContent = "Test is Over!!"

    startScreenEl.appendChild(createHeaderTwo);

    // Creates a p tag with the final score when the quiz is over

    var addPTag = document.createElement("p");
    addPTag.setAttribute("id", "addPTag");

    startScreenEl.appendChild(addPTag);

    // Calculates time remaining and replaces it with the users score

    if (secondsLeft >= 0) {
        var timeLeft = secondsLeft;
        var addPTag2 = document.createElement("p");
        clearInterval(pauseInterval);
        addPTag.textContent = "Your final score is: " + timeLeft;

        startScreenEl.appendChild(addPTag2);
    }


    // Adds the submit box to enter in ititials

    // Enter your initials text

    var enterInitials = document.createElement("label");
    enterInitials.setAttribute("id", "createLabel");
    enterInitials.textContent = "Enter your initials: ";

    startScreenEl.appendChild(enterInitials);

    // Submit box

    var initialBox = document.createElement("input");
    initialBox.setAttribute("type", "text");
    initialBox.setAttribute("id", "initials");
    initialBox.textContent = "";

    startScreenEl.appendChild(initialBox);

    // Submit Button

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "Submit");
    submitBtn.textContent = "Submit";

    startScreenEl.appendChild(submitBtn);

    // The code below will take the initials and score, and when the submit button is clicked will enter in the score to initial storage and open up the totalscores page

    submitBtn.addEventListener("click", function () {
        var usersInitials = initialBox.value;

        if (usersInitials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: usersInitials,
                score: timeLeft
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            // This will bring the user to the High Scores page

            window.location.replace("totalscore.html");
        }
    });

}
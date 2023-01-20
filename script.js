var score = 0;
var currentQuestion = 0;
var secondsLeft = 76;
var startScreenEl = document.getElementById('start-screen');
var startButtonEl = document.getElementById('start-button');
var timeEl = document.querySelector(".time");
var questionsEl = document.getElementById("question");
var multipleChoicesEl = document.getElementById('multi-choices');
var answerEl = document.getElementById('answer');
var apiQuizEl = document.getElementById('api-quiz');


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

// console.log(multiQuestions[4].multipleChoices[3]);

// Start button. On-click, it will hide the original HTML and display the questions and timer

startButtonEl.addEventListener('click', function () {
        startScreenEl.classList.add("hide");
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time Remaining: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }

    }, 1000);
}
);

function checkResponse() {
    
}

function questions() {
    // questionsEl.textContent = multiQuestions[0].question;

        for (var i = 0; i < multiQuestions.length; i++) {
            questionsEl.textContent = multiQuestions[i].question;
        }

        
    // console.log(multiQuestions[0].question); 
}

questions()


// TO DO: I need to come up with a function to call this variable, and print the questions on the page. Possibly with .innerHTML


// Step 1 hide the start screen upon the game starting
// Step 1A: Showing new content when clicking start
// Step 1B: Get one question on the screen
// Step 2 How do you progress the gameplay
// Step 3 What happens when the game is over?













// Questions

// What is the significance of an anonymous function in JS

// For this project and in general, would it be better to style in CSS or JS (Example: h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");)
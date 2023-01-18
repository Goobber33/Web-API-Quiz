// I need to write questions, multiple choice answers, and the correct answer


// Found these questions on https://www.interviewbit.com/javascript-mcq/
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

// This syntax was taken from the UW Gitlab repository, on Web-APIs - Day 01 - 09-Ins-Timers-Intervals

var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time Remaining: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            sendMessage('Time is up');
        }

    }, 1000);
}

setTime();











// Questions

// For this project and in general, would it be better to style in CSS or JS (Example: h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");)
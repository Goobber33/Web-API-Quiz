// I need to write questions, multiple choice answers, and the correct answer


// Create an array?
var multiQuestions = [
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript:',
        multipleChoices: ['getElementbyId()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
        answer: 'Both A and B'
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
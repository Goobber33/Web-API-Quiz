// This syntax was taken from the UW Gitlab repository, on Web-APIs - Day 01 - 09-Ins-Timers-Intervals

var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "";

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            sendMessage();
        }

    }, 1000);
}

setTime();
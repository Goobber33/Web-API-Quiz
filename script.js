var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "";

    if(secondsLeft === 0) {
      clearInterval(timerInterval)
      sendMessage();
    }

  }, 1000);
}

setTime();
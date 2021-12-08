const btnStartEl = document.getElementById("startBtn");
const btnResetEl = document.getElementById("resetBtn");
const btnPauseEl = document.getElementById("pauseBtn");
const countDownElement = document.getElementById("countdown");

let intervalTime;
let startingMinutes = 5;
let time = startingMinutes * 60;
let minutes;
let seconds;

// console.log(btnStartEl);
btnStartEl.addEventListener("click", () => {
  console.log("start", time);
  intervalTime = setInterval(updateCountDown, 1000);
});

function updateCountDown() {
  minutes = Math.floor(time / 60);

  seconds = time % 60;

  seconds = seconds < 5 ? "0" + seconds : seconds;
  countDownElement.innerHTML = `${minutes} mins : ${seconds} secs`;
  time--;
}

btnResetEl.addEventListener("click", () => {
  console.log("stop", time);

  clearInterval(intervalTime);
  intervalTime = null;
  startingMinutes = 5;
  time = startingMinutes * 60;
  document.getElementById("countdown").innerHTML = `${0} mins : ${0} secs`;
});

btnPauseEl.addEventListener("click", () => {
  clearInterval(intervalTime);
  countDownElement.innerHTML = `${minutes} mins : ${seconds} secs`;
});

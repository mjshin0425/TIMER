const startMinutes = 10;
let time = startMinutes * 60;

const countdownEl = document.getElementById("countdown");

// updateCountdown 함수를 매 초마다 호출
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  // 다른 표현식
  // seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
}

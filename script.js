var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint); //back of the game timer 0 ke baad bhi chalega negative me to wo extra memory khaayega
      document.querySelector("#pbtm").innerHTML = `GAME OVER`; // time khatam hone ke baad bubbles hat jaaye.
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent); // is code ke karan number mil raha h
  if (clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();

'use strict'


const replayGame = document.getElementById("replay-game");
const highScore = document.getElementById("high-score").textContent = 10;


const numberRandom = Math.trunc(Math.random() *20) +1; 
document.getElementById("number-random").textContent = numberRandom;


const submitBtn = document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const guess = Number(document.querySelector(".input-box").value);
    console.log(guess, typeof guess);

if (!guess) {
    document.getElementById('guess-result').textContent = '⛔️ No Number!';
} else if (guess === numberRandom) {
      document.getElementById("guess-result").textContent = '🎉 Correct Number!';
} else if (guess > numberRandom) {
    document.getElementById('guess-result').textContent = 'Too High!';
} else if (guess < numberRandom) {
    document.getElementById('guess-result').textContent = 'Too Low!';
}
});


replayGame.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
    replayGame.innerHtml = "Let's Go";
});




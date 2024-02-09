'use strict'


let numberRandom = Math.trunc(Math.random() *20) +1; 
let score = 20;
let highscore = 0; 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = 
    message;
}
    // resets to default
   document.querySelector('.replay').addEventListener("click", function(e) {
    e.preventDefault();
    score = 20;
    numberRandom = Math.trunc(Math.random() *20) +1; 

    displayMessage('🏆 Start Guessing!');
    document.querySelector('.stats-score').textContent = score;
    document.querySelector('.input-box').value = '';
    document.querySelector('.number-box').textContent = '?';

    document.querySelector('body').style.backgroundColor = 'rgb(28, 31, 28)';
});


let submitBtn = document.querySelector('.submit').addEventListener("click", function (e) {
    e.preventDefault();
    const guess = Number(document.querySelector('.input-box').value);
    console.log(guess, typeof guess);

 
    // when there is no input
if (!guess) {
   displayMessage('⛔️ No Number!');
    
    // when player wins
} else if (guess === numberRandom) {
  displayMessage('🎉 Correct Number!');
  document.getElementById("number-random").textContent = numberRandom;

 
  document.querySelector('body').style.backgroundColor = 'rgb(54, 174, 54)';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.stats-high').textContent = highscore;
  }
} else if (guess !== numberRandom) {
   if (score > 1) {
        displayMessage(
        guess > numberRandom ? 'Too High!' : 'Too Low');
        score--;
        document.querySelector('.stats-score').textContent = score;
    } else {
        displayMessage('You lost the game!');
        document.querySelector('.stats-score').textContent = 0;
  }}
});











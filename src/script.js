'use strict'





const numberRandom = Math.trunc(Math.random() *20) +1; 
let score = 20;



const submitBtn = document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const guess = Number(document.querySelector(".input-box").value);
    console.log(guess, typeof guess);
 
    // when there is no input
if (!guess) {
    document.getElementById('guess-result').textContent = '⛔️ No Number!';
    
    // when player wins
} else if (guess === numberRandom) {
  document.getElementById("guess-result").textContent = '🎉 Correct Number!';
  document.getElementById("number-random").textContent = numberRandom;    


  document.querySelector('body').style.backgroundColor = 'rgb(54, 174, 54)';

//   document.querySelector('.number-box').style.width = '30rem';
    
//   when guess is too high
} else if (guess > numberRandom) {
    if(score > 1) {
    document.getElementById('guess-result').textContent = 'Too High!'; 
     score--;
    document.querySelector('.stats-score').textContent = score;
} else {
    document.getElementById('guess-result').textContent = 'You lost the game!';
    document.querySelector('.stats-score').textContent = 0;
} 
// when guess is too low
} else if (guess < numberRandom) {
    if (score > 1) {
    document.getElementById('guess-result').textContent = 'Too Low!';
     score--;
    document.querySelector('.stats-score').textContent = score;
} else {
    document.getElementById('guess-result').textContent = 'You lost the game!';
    document.querySelector('.stats-score').textContent = 0;
} 
}});

const replayGame = document.getElementById("replay-game");
replayGame.addEventListener("click",  (e) => {
    e.preventDefault();
    numberRandom = Math.trunc(Math.random() *20) +1; 
    score = 20;
    document.getElementById('guess-result').textContent = '🏆 Start Guessing!';
    document.querySelector('body').style.backgroundColor= 'rgb(28, 31, 28)';
    document.querySelector('.stats-score').textContent = 0;
    document.querySelector('.input-box').value = '';
});




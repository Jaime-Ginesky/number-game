'use strict'


let numberRandom = Math.trunc(Math.random() *20) +1; 
let score = 20;


    document.querySelector('.replay').addEventListener("click", function(e) {
    e.preventDefault();
    score = 20;
    numberRandom = Math.trunc(Math.random() *20) +1; 

    document.querySelector('.message').textContent = '🏆 Start Guessing!';
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
    document.querySelector('.message').textContent = '⛔️ No Number!';
    
    // when player wins
} else if (guess === numberRandom) {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.getElementById("number-random").textContent = numberRandom;
 
  document.querySelector('body').style.backgroundColor = 'rgb(54, 174, 54)';

//   document.querySelector('.number-box').style.width = '30rem';
    
//   when guess is too high
} else if (guess > numberRandom) {
    if(score > 1) {
    document.querySelector('.message').textContent = 'Too High!'; 
     score--;
    document.querySelector('.stats-score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.stats-score').textContent = 0;
} 
// when guess is too low
} else if (guess < numberRandom) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'Too Low!';
     score--;
    document.querySelector('.stats-score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.stats-score').textContent = 0;
} 
}});









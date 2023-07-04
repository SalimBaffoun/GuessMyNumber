'use strict';

const messageElt = document.querySelector('.message');
const scoreElt = document.querySelector('.score');
const hiddenNumberElt = document.querySelector('.number');
const inputElt = document.querySelector('.guess');
let highScoreElt = document.querySelector('.highscore');
let isGameFinished = false;
let secretNumber = randomIntFromInterval (1, 20);
console.log (secretNumber);
let score = Number (scoreElt.textContent);

function randomIntFromInterval(min,max){
     return Math.floor(Math.random() * (max - min + 1) + min);
}

function onButtonCheckClick (){

     if (isGameFinished) return;

     const inputValue = inputElt.value.trim();
     if (inputValue === '') {
          messageElt.textContent = 'No number !';
          return;
     }
       
     const guess = Number (inputValue);
     if(isNaN(guess)){
          messageElt.textContent = 'This is not a number !'
          return;
     }

     if (guess > 20 || guess < 1) {
          messageElt.textContent = 'RTFM!';
     }


     if (guess === secretNumber) {
          messageElt.textContent = 'You win!';
          document.body.style.backgroundColor = 'green';

     let highScore = Number(localStorage.getItem('highscore')) || 0;
     highScoreElt.textContent = highScore;

     if (score > highScore) {
          highScore = score;
          localStorage.setItem('highscore', highScore);
          highScoreElt.textContent = highScore;

     }

          isGameFinished = true;
          return;
     }    else if (guess < secretNumber) {
          messageElt.textContent = 'Too low!';
     }    else {
          messageElt.textContent = 'Too high!';

     }

     score -= 1;
     scoreElt.textContent = score;


     if (score === 0) {
          messageElt.textContent = 'GAME OVER';
          isGameFinished = true;
     }

}

function reset(){
     isGameFinished = false;
     secretNumber = randomIntFromInterval (1, 20);
     scoreElt.textContent = 20;
     messageElt.textContent = 'Ready?'
     inputElt.value = '';  
     document.body.style.backgroundColor = 'black';
     
  
   }

   window.addEventListener('load', function() {
     let highScore = Number(localStorage.getItem('highscore')) || 0;
     highScoreElt.textContent = highScore;
   });
   


   /*   Modification text d'un élément:
messageElt.textcontent = ' correct number '; 
hiddenNumberElt.textContent = '???';

     Modification de la valeur d'un input:
inputElt.value = 23;

     Modification de texte de plusieurs éléments (cree une fonction):
function chanTexts() {
     messageElt.textContent = 'correct number ';
     scoreElt.textContent = 30;
     whiteSquareElt.textContent = '!';
}
*/

/* Code refactorisé:

'use strict';

const messageElt = document.querySelector('.message');
const scoreElt = document.querySelector('.score');
const hiddenNumberElt = document.querySelector('.number');
const inputElt = document.querySelector('.guess');
const highScoreElt = document.querySelector('.highscore');

let isGameFinished = false;
let secretNumber;
let score;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function initializeGame() {
  secretNumber = randomIntFromInterval(1, 20);
  score = 20;
  messageElt.textContent = 'Ready?';
  scoreElt.textContent = score;
  inputElt.value = '';
  document.body.style.backgroundColor = 'black';
}

function displayMessage(text) {
  messageElt.textContent = text;
}

function updateScore(newScore) {
  score = newScore;
  scoreElt.textContent = score;
}

function updateHighScore(newHighScore) {
  highScoreElt.textContent = newHighScore;
  localStorage.setItem('highscore', newHighScore);
}

function onButtonCheckClick() {
  if (isGameFinished) return;

  const inputValue = inputElt.value.trim();
  if (inputValue === '') {
    displayMessage('No number!');
    return;
  }

  const guess = Number(inputValue);
  if (isNaN(guess)) {
    displayMessage('This is not a number!');
    return;
  }

  if (guess > 20 || guess < 1) {
    displayMessage('RTFM!');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('You win!');
    document.body.style.backgroundColor = 'green';

    let highScore = Number(localStorage.getItem('highscore')) || 0;
    if (score > highScore) {
      updateHighScore(score);
    }

    isGameFinished = true;
    return;
  } else if (guess < secretNumber) {
    displayMessage('Too low!');
  } else {
    displayMessage('Too high!');
  }

  updateScore(score - 1);

  if (score === 0) {
    displayMessage('GAME OVER');
    isGameFinished = true;
  }
}

function reset() {
  isGameFinished = false;
  initializeGame();
}

window.addEventListener('load', function() {
  let highScore = Number(localStorage.getItem('highscore')) || 0;
  highScoreElt.textContent = highScore;
});

initializeGame();

*/

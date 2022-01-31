'use strict';
//selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");



       // Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

 //Variables
let currentScore = 0;
let activePlayer=0;

//hiding dice during the start of the game
diceEl.classList.add("hidden");

//generate a random dice roll
btnRoll.addEventListener("click", function() {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
     // unhide the dice
  diceEl.classList.remove("hidden");
  //display the dice of corresponding number
 
  diceEl.src = `dice-${dice}.png`;

  //check for if rolled 1 : if true switch to next player
  if ( dice !== 1){
       currentScore += dice;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      

  } else{
         //switch player
       document.getElementById(`current--${activePlayer}`).textContent = 0;
       currentScore = 0;
       activePlayer = activePlayer === 0 ? 1 : 0;
       player0El.classList.toggle("player--active");
       player1El.classList.toggle("player--active");
  }
  });

  

  
 

 
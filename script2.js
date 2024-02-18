'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const theDice = document.querySelector('.dice');
const thePlayer0 = document.querySelector('.player--0');
const thePlayer1 = document.querySelector('.player--1');
let activePlayer = 1;
let currentScore = 0;
// let currentPlayer = document.querySelector(`#current--${activePlayer}`);
let currentPlayer0 = document.querySelector('#current--0');
let currentPlayer1 = document.querySelector('#current--1');
console.log(activePlayer);
let score0 = 0;
let score1 = 1;

// console.log(currentPlayer)


/* -----------------------------------------------------
// test - succeed
score0El.textContent = 99;
score1El.textContent = 99;
current0El.textContent = 99;
current1El.textContent = 99;

// button test - succeed
buttonNew.addEventListener('click', function() {
    console.log('new clicked')
});
buttonHold.addEventListener('click', function() {
    console.log('Hold clicked')
});
buttonRoll.addEventListener('click', function() {
    console.log('Roll clicked')
});
------------------------------------------------------*/

// Creating initial state
score0El.textContent = 0;
score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
theDice.classList.add('hidden');

// Creating roll dice and random number
const rollClicked = function () {
    let currentPlayer = document.querySelector(`#current--${activePlayer}`);
    console.log(`active player: ${activePlayer}`);
    console.log(currentPlayer);
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(typeof randomNum, randomNum); // test the random function
    if (randomNum !== 1) {        
        currentScore += randomNum;
        currentPlayer.textContent = currentScore;
    }
    else if (randomNum === 1) { 
        currentScore = 0;
        currentPlayer.textContent = currentScore;
        if (activePlayer == 0) {
            activePlayer = 1;
            thePlayer0.classList.remove('player--active');
            thePlayer1.classList.add('player--active');
        }
        else if (activePlayer == 1) {
            activePlayer = 0;
            thePlayer1.classList.remove('player--active');
            thePlayer0.classList.add('player--active');
        }

    }
    
    
    /*
    currentNum0 += randomNum;
    
    current0El.textContent = currentNum0;
    */
    
    // creating if the random number produce 1: change the active player
    // if (randomNum === 1) {
    //     currentPlayer.textContent = 0;
    //     if (activePlayer === 0) {
    //         activePlayer = 1
    //         thePlayer0.classList.remove('player--active');
    //         thePlayer1.classList.add('player--active');
    //     }
    //     else if (activePlayer === 1) {
    //         activePlayer = 0
    //         thePlayer1.classList.remove('player--active');
    //         thePlayer0.classList.add('player--active');
    //     }
        

        // currentPlayer = 0; // current score reset to 0
        // thePlayer0.classList.remove('player--active'); // change the active player
        // thePlayer1.classList.add('player--active');
    }


buttonRoll.addEventListener('click', rollClicked);
// Created Feb 18th, 2024
// Creator: Eko Hadi Permana

'use strict';
// creating the elements
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

// Creating initial state
let activePlayer = 0;
let currentScore = 0;
let score0 = 0;
let score1 = 0;
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
theDice.classList.add('hidden');

function deactivatePlayer0 () {
    thePlayer0.classList.remove('player--active'); 
    thePlayer1.classList.add('player--active'); 
}

function deactivatePlayer1 () {
    thePlayer1.classList.remove('player--active');
    thePlayer0.classList.add('player--active');
}

// Creating roll dice and random number
const rollClicked = function () {
    let currentPlayer = document.querySelector(`#current--${activePlayer}`);
    theDice.classList.remove('hidden');
    let randomNum = Math.floor(Math.random() * 6) + 1;
    theDice.src = `dice-${randomNum}.png`;
    if (randomNum !== 1) {        
        currentScore += randomNum;
        currentPlayer.textContent = currentScore;
    }
    else if (randomNum === 1) { 
        currentScore = 0;
        currentPlayer.textContent = currentScore;
        if (activePlayer == 0) {
            score0 = 0;
            score0El.textContent = score0;
            activePlayer = 1; 
            deactivatePlayer0 ();                 
        }
        else if (activePlayer == 1) {
            score1 = 0;
            score1El.textContent = score1;
            activePlayer = 0;
            deactivatePlayer1 ();
        }
    }   
}

// the function for creating hold button 
const holdClicked = function () {
    if (activePlayer === 0) {
        score0 += currentScore;
        score0El.textContent = score0;
        activePlayer = 1;
        deactivatePlayer0 ();
        currentScore = 0;
        current0El.textContent = currentScore;
        theDice.classList.add('hidden');
    }
    else if (activePlayer === 1) {
        score1 += currentScore;
        score1El.textContent = score1;
        activePlayer = 0;
        deactivatePlayer1 ();
        currentScore = 0;
        current1El.textContent = currentScore;
        theDice.classList.add('hidden');
    }
}

const newClicked = function () {
    currentScore = 0;
    score0 = 0;
    score1 = 0;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    theDice.classList.add('hidden');
}

buttonRoll.addEventListener('click', rollClicked);
buttonHold.addEventListener('click', holdClicked);
buttonNew.addEventListener('click', newClicked);
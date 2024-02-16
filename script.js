'use strict';
// selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const btnNewElement = document.querySelector(".btn--new");
const btnHoldElement = document.querySelector(".btn--hold");
const btnRollElement = document.querySelector(".btn--roll");
const diceElement = document.querySelector('.dice');
const thePlayer0 = document.querySelector('.player--0');
const thePlayer1 = document.querySelector('.player--1');


// first condition
diceElement.classList.add('hidden');
score0Element.textContent = 0;
score1Element.textContent = 0;

// Rolling Dice
const createRandomNum = function () {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    // console.log(Math.floor(Math.random() * 6 + 1));
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${randomNum}.png`;
    if (randomNum === 1) {
        // switch to nexr player
    }
    else {
        // add number to score
        if (thePlayer0.classList.contains('player--active')) {
            score0Element += randomNum;
        }
        else if (thePlayer1.classList.contains('player--active')) {
            score1Element += randomNum;
        }
        score0Element += randomNum; 

    }
};

btnRollElement.addEventListener('click', createRandomNum);

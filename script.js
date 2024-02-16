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
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
let currentScore = 0;


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
        if (thePlayer0.classList.contains('player--active')) {
            thePlayer0.classList.remove('player--active');
            currentScore0.textContent = 0;
            currentScore = 0;
            score0Element = 0;
            thePlayer1.classList.add('player--active');
        }
        else if (thePlayer1.classList.contains('player--active')) {
            thePlayer1.classList.remove('player--active');
            currentScore1.textContent = 0;
            currentScore = 0;
            score1Element = 0;
            thePlayer0.classList.add('player--active'); 
        }
    }
    else {
        // add number to score
        if (thePlayer0.classList.contains('player--active')) {
            currentScore += randomNum;
            currentScore0.textContent = currentScore;
        }
        else if (thePlayer1.classList.contains('player--active')) {
            currentScore += randomNum;
            currentScore1.textContent = currentScore;
        }
        // score0Element += randomNum; 

    }
};

const holdButton = function () {
    if (thePlayer0.classList.contains('player--active')) {
        score0Element += currentScore;
    }
    else if (thePlayer1.classList.contains('player--active')) {
        score1Element += currentScore;
    }
}
btnRollElement.addEventListener('click', createRandomNum);
btnHoldElement.addEventListener('click', holdButton);
                                                               
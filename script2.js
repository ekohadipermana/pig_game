'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const theDice = document.querySelector('.dice');
let currentNum0 = 0;

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
current0El.textContent = 0;
current1El.textContent = 0;
theDice.classList.add('hidden');

// Creating roll dice and random number
const rollClicked = function () {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    currentNum0 += randomNum;
    console.log(randomNum); // test the random function
    current0El.textContent = currentNum0;
}

buttonRoll.addEventListener('click', rollClicked);
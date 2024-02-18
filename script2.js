'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// test
score0El.textContent = 99;
score1El.textContent = 99;
current0El.textContent = 99;
current1El.textContent = 99;

// button test
buttonNew.addEventListener('click', function() {
    console.log('new clicked')
});
buttonHold.addEventListener('click', function() {
    console.log('Hold clicked')
});
buttonRoll.addEventListener('click', function() {
    console.log('Roll clicked')
});
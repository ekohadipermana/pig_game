'use strict';
// selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const btnNewElement = document.querySelector(".btn--new");
const btnHoldElement = document.querySelector(".btn--hold");
const btnRollElement = document.querySelector(".btn--roll");

const diceElement = document.querySelector('.dice');

diceElement.classList.add('hidden');
score0Element.textContent = 0;
score1Element.textContent = 0;
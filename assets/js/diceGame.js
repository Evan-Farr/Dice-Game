"use strict";

function hitDriver() {
  document.getElementById('diceDriver').textContent = (Math.floor(Math.random() * (20 - 12 + 1)) + 12);
}

function hitHybrid() {
  document.getElementById('diceHybrid').textContent = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
}

function hitFourIron() {
  document.getElementById('diceFourIron').textContent = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
}

function hitSevenIron() {
  document.getElementById('diceSevenIron').textContent = (Math.floor(Math.random() * (8 - 3 + 1)) + 3);
}

function hitWedge() {
  document.getElementById('diceWedge').textContent = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
}

function hitPutter() {
  document.getElementById('dicePutter').textContent = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
}

"use strict";

function hitDriver() {
  document.getElementById('dieDriver').textContent = (Math.floor(Math.random() * (20 - 12 + 1)) + 12);
}

function hitHybrid() {
  document.getElementById('dieHybrid').textContent = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
}

function hitFourIron() {
  document.getElementById('dieFourIron').textContent = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
}

function hitSevenIron() {
  document.getElementById('dieSevenIron').textContent = (Math.floor(Math.random() * (8 - 3 + 1)) + 3);
}

function hitWedge() {
  document.getElementById('dieWedge').textContent = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
}

function hitPutter() {
  document.getElementById('diePutter').textContent = (Math.floor(Math.random() * (4 - 1 + 1)) + 1);
}

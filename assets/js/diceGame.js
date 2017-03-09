"use strict";

function startGame() {
  var welcomeMessage = alert("Welcome to Yipes!\nThis is a simple, easy to play and addictive competitive virtual dice-rolling golf game.\nPlayer count: 1-4\nGood Luck!");
}

function countTotalHits() {
  var hitCount = 0;
}

function respondToHit() {
  var msg = "";
}

function hitDriver() {
  var linkToID = document.getElementById('diceDriver');
  var randomNumberGen = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
  linkToID.textContent = randomNumberGen;
}

function hitHybrid() {
  var linkToID = document.getElementById('diceHybrid');
  var randomNumberGen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  linkToID.textContent = randomNumberGen;
}

function hitFourIron() {
  var linkToID = document.getElementById('diceFourIron');
  var randomNumberGen = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  linkToID.textContent = randomNumberGen;
}

function hitSevenIron() {
  var linkToID = document.getElementById('diceSevenIron');
  var randomNumberGen = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
  linkToID.textContent = randomNumberGen;
}

function hitWedge() {
  var linkToID = document.getElementById('diceWedge');
  var randomNumberGen = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  linkToID.textContent = randomNumberGen;
}

function hitPutter() {
  var linkToID = document.getElementById('dicePutter');
  var randomNumberGen = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  linkToID.textContent = randomNumberGen;
}

"use strict";

function initiateMain() {

}

function storePlayerProgress() {
  var players = []; //////spot 0 is totalHits and spot 1 is totalYards//////
  players.push(["player One", 0])

}

function playRound() {
  for (i=0; i<players.length; i++) {
    players[i][1] = hitHybrid();
  }
}

//////Begining of different types of clubs to hit//////
function hitDriver(max, min) {
  var linkToID = document.getElementById('diceDriver');
  var randomNumberGen = Math.floor(Math.random() * (max - min + 1)) + min;
  var yardsHit = (randomNumberGen * 10);
  linkToID.textContent = randomNumberGen;
  return yardsHit;
}

function hitHybrid() {
  var linkToID = document.getElementById('diceHybrid');
  var randomNumberGen = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  linkToID.textContent = randomNumberGen;
  return yardsHit;
}

function hitFourIron() {
  var linkToID = document.getElementById('diceFourIron');
  var randomNumberGen = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  linkToID.textContent = randomNumberGen;
  return yardsHit;
}

function hitSevenIron() {
  var linkToID = document.getElementById('diceSevenIron');
  var randomNumberGen = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
  var yardsHit = (randomNumberGen * 10);
  linkToID.textContent = randomNumberGen;
  return yardsHit;
}

function hitWedge() {
  var linkToID = document.getElementById('diceWedge');
  var randomNumberGen = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  linkToID.textContent = randomNumberGen;
  return yardsHit;
}

function hitPutter() {
  var linkToID = document.getElementById('dicePutter');
  var randomNumberGen = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  linkToID.textContent = randomNumberGen;
  return yardsHit;
}

//////This is where yardsHit gets added to each player//////
function countTotalYards(yardsHit) {
  var linkToTotalPlayerOne = document.getElementById('p1Yardage');
  var linkToTotalPlayerTwo = document.getElementById('p2Yardage');
  var linkToTotalPlayerThree = document.getElementById('p3Yardage');
  var linkToTotalPlayerFour = document.getElementById('p4Yardage');
  var totalYards;
  linkToTotalPlayerOne.textContent = (totalYards + yardsHit);
}

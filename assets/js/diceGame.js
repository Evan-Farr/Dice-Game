"use strict";

function storePlayerProgress() {
  var player

  playRound();
}

function playRound() {
}

function hitBall(event, max, min) {
  var linkToID = event.target.parentElement;
  var randomNumberGen = Math.floor(Math.random() * (max - min + 1)) + min;
  var yardsHit = (randomNumberGen * 10);
  linkToID.children[1].innerHTML = randomNumberGen;
  return yardsHit;
}

function updateTotalYardsHit(yardsHit) {
  var linkToTotal = document.getElementById("yardage");
  var currentTotalYards;
  var newTotalYards = (currentTotalYards + yardsHit);
  linkToTotal.textContent = (currentTotalYards + yardsHit);
}

storePlayerProgress();

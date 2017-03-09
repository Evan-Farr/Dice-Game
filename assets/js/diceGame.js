"use strict";

function playHoleOne(yardsRemainingToHole) {
  var holeLength = 432;
  
}

function hitBall(event, max, min) {
  var linkToID = event.target.parentElement;
  var randomNumberGen = Math.floor(Math.random() * (max - min + 1)) + min;
  var yardsHit = (randomNumberGen * 10);
  linkToID.children[1].innerHTML = randomNumberGen;
  return yardsHit;
}

function updateTotalYardsHit(yardsHit) {
  var linkToTotal = document.getElementById("totalYardsHit");
  var currentTotalYards;
  var newTotalYards = (currentTotalYards + yardsHit);
  linkToTotal.textContent = newTotalYards;
  return newTotalYards;
}

function updateTotalYardsRemaining(newTotalYards, holeLength) {
var linkToTotalRemaining = document.getElementById("yardsRemainingToHole");
var yardsToHole = (holeLength - newTotalYards);
linkToTotalRemaining.textContent = yardsToHole;
return yardsToHole;
}

playHoleOne();

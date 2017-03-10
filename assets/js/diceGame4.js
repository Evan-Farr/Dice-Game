"use strict";

function play() {
  var clubChoice = getUserInput();
  if (clubChoice === "Driver") {
    hitDriver();
  }else if (clubChoice === "Four Iron") {
    hitFourIron();
  }else if (clubChoice === "Hybrid") {
    hitHybrid();
  }else if (clubChoice === "Seven Iron") {
    hitSevenIron();
  }else if (clubChoice === "Wedge") {
    hitWedge();
  }else if (clubChoice === "Putter") {
    hitPutter();
  }else {
    alert("Not a valid Club Choice. Please check your spelling and remember the first letter of the word needs to be Capitalized.");
  }
  var distanceToHole = updateTotalYardsRemaining(updateTotalYardsHit(yardsHit));
  if (distanceToHole === 0) {
    alert("You sunk it! Refresh the page to start again and top that score!");
  }else {
    play();
  }
}

function getUserInput() {
  var clubChoice = prompt("Please enter the name of the club you would like to hit.\nThe total distance of this hole is 432 yards.\nSpelling the club type correctly matters!");
  return clubChoice;
}


function hitDriver() {
  var randomNumberGen = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
  var yardsHit = (randomNumberGen * 10);
  return yardsHit;
}

function hitFourIron() {
  var randomNumberGen = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
  var yardsHit = (randomNumberGen * 10);
  return yardsHit;
}

function hitHybrid() {
  var randomNumberGen = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  var yardsHit = (randomNumberGen * 10);
  return yardsHit;
}

function hitSevenIron() {
  var randomNumberGen = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  return yardsHit;
}

function hitWedge() {
  var randomNumberGen = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  return yardsHit;
}

function hitPutter() {
  var randomNumberGen = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  var yardsHit = (randomNumberGen * 10);
  return yardsHit;
}

function updateTotalStrokes() {
  var currentTotalStrokes = [];
  currentTotalStrokes.push(1)
  var newTotalStrokes = currentTotalStrokes.length
  return newTotalStrokes;
}

function updateTotalYardsHit(yardsHit) {
  var currentTotalYards = [];
  currentTotalYards.push(yardsHit);
  var newTotalYardsHit;
  for (var i = 0; i < currentTotalYards.length; i++) {
    newTotalYardsHit += currentTotalYards[i];
  }
  return newTotalYardsHit;
}

function updateTotalYardsRemaining(newTotalYardsHit) {
var holeLength = 432;
var yardsRemaining = (holeLength - newTotalYardsHit);
return yardsRemaining;
}

console.log(play());

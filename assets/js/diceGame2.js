"use strict";

function storePlayerProgress() {
  var players = []; //////0 is totalYards//////
  players.push(["player1", 0]);
  players.push(["player2", 0]);
  players.push(["player3", 0]);
  players.push(["player4", 0]);
  playRound(players);
}

function playRound(players) {
  for (var i=0; i<players.length; i++) {
    var turn = true;
    while(turn){
    players[i][1] = hitBall();
    turn = false;
    }
  }
}

function hitBall(event, max, min) {
  var linkToID = event.target.parentElement;
  var randomNumberGen = Math.floor(Math.random() * (max - min + 1)) + min;
  var yardsHit = (randomNumberGen * 10);
  linkToID.children[1].innerHTML = randomNumberGen;
  return yardsHit;
}

storePlayerProgress();

//////This is where yardsHit gets added to each player//////
function countTotalYardsHit() {
  var linkToTotalPlayerOne = document.getElementById('p1Yardage');
  var linkToTotalPlayerTwo = document.getElementById('p2Yardage');
  var linkToTotalPlayerThree = document.getElementById('p3Yardage');
  var linkToTotalPlayerFour = document.getElementById('p4Yardage');
  var totalYards;
  linkToTotalPlayerOne.textContent = (totalYards + playRound);
}

"use strict";

function play() {

}

function playHole(goal) {
  var strokes = 0;
  var yardsHit = 0;

  for (yardsHit !== goal) {
    prompt("You have a distance of " + totalYards + " remaining to the hole.");

    chooseClub();
    yardsHit = swing(chooseClub());

    strokes++;
  }
  return strokes;
}

function chooseClub(){
  var club = prompt("Which club would you like to use?");
  switch (club.toLowerCase()) {
    case "driver":
      return 20;
    case "4 iron":
      return 12;
    case "hybrid":
      return 10;
    case "7 iron":
      return 8;
    case "wedge":
      return 6;
    case "putter":
      return 4;
    default:
      return chooseClub();
  }
}

function swing(club) {
  var club = chooseClub();
  var yardsHit = Math.floor(Math.random() * (club + 1)) * 10;
  return yardsHit;
}

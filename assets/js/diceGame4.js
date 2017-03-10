"use strict";


function playHole(goal) {
  var strokes = 0;
  var totalYardsHit = 0;
  var goal = 200;
  var yardsRemaining = goal;

  while (totalYardsHit !== goal) {
    alert("The hole is currently " + yardsRemaining + " yards away.");

    var yardsHit = swing();
    alert("You hit that ball " + yardsHit + " yards.");
    totalYardsHit = totalYardsHit + yardsHit;
    yardsRemaining = yardsRemaining - yardsHit;

    if (totalYardsHit > goal) {
      alert("Yips! Too much power! The ball must land exactly in the hole. Try again.");
      swing();
      totalYardsHit = totalYardsHit - yardsHit;
      yardsRemaining = yardsRemaining + yardsHit;
    }

    strokes++;
  }

  alert("You finished this hole in " + strokes + " stroke! Refresh the page to start over.");
}

function chooseClub(){
  var club = prompt("Which club would you like to use?");
  switch (club.toLowerCase()) {
    case "driver":
      return 20;
    case "4 iron":
      return 12;
    case "putter":
      return 10;
    case "hybrid":
      return 8;
    case "7 iron":
      return 6;
    case "wedge":
      return 4;
    default:
      alert("Yips! You did not enter a valid club type. Please try again.");
      return chooseClub();
  }
}

function swing(club) {
  var club = chooseClub();
  var multiplier = 10;
  if (club === 10) {
    multiplier = 1;
  }
  var yardsHit = (Math.floor(Math.random() * club) + 1) * multiplier;
  return yardsHit;
}

playHole();

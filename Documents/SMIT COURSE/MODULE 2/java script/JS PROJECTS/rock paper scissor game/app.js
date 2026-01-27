var score = {
  wins : 0 ,
  losses : 0 ,
  draws : 0 
} 



function computerMoveSelection() {
  var num = Math.floor(Math.random() * 10 + 1);
  var computermove;

  if (num >= 1 && num < 4) {
    computermove = "rock";
  } else if (num >= 4 && num < 7) {
    computermove = "paper";
  } else if (num >= 7 && num <= 10) {
    computermove = "scissor";
  }

  return computermove;
}

function move(playermove) {
  var computermove = computerMoveSelection();
  var result;
  var computermove;
  if (playermove === "rock") {

    if (computermove === "rock") {
      result = "tie";
    } else if (computermove === "paper") {
      result = "you lose";
    } else if (computermove === "scissor") {
      result = "you win";
    }

  } else if (playermove === "paper") {

    if (computermove === "rock") {
      result = "you win";
    } else if (computermove === "paper") {
      result = "tie";
    } else if (computermove === "scissor") {
      result = "you lose";
    }

  } else if (playermove === "scissor") {

    if (computermove === "rock") {
      result = "you lose";
    } else if (computermove === "paper") {
      result = "you win";
    } else if (computermove === "scissor") {
      result = "tie";
    }

  }

  if (result === "you win"){
    score.wins = score.wins + 1
  }else if (result === "you lose"){
    score.losses = score.losses + 1;
  }else if (result === "tie"){
    score.draws = score.draws + 1;
  }


alert(
  `Your move is ${playermove} and computer move is ${computermove}
${result}
Wins = ${score.wins}, Losses = ${score.losses}, Draws = ${score.draws}`
);
}


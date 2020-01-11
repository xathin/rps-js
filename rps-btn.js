function computerPlay() {
  let choice = Math.floor(Math.random() * 3)
  if (choice == 0) {
    return 'Rock'
  } else if (choice == 1) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Draw, " + playerSelection + " matches " + computerSelection
  } else {
    const loseMsg = "You Lose! " + computerSelection + " beats " + playerSelection
    const winMsg = "You Win! " + playerSelection + " beats " + computerSelection
    switch (playerSelection.toLowerCase()) {
      case "rock":
        if (computerSelection.toLowerCase() == "paper") {
          return loseMsg
        } else {
          return winMsg
        }
      case "paper":
        if (computerSelection.toLowerCase() == "scissors") {
          return loseMsg
        } else {
          return winMsg
        }
      case "scissors":
        if (computerSelection.toLowerCase() == "rock") {
          return loseMsg
        } else {
          return winMsg
        }
    }
  }
}

const buttons = document.querySelectorAll('button');

let playerWins = 0;
let computerWins = 0;
let computerSelection, msg;
const divResult = document.querySelector('div.results');
const player = document.querySelector('.score > #player');
const computer = document.querySelector('.score > #computer');

function winner() {
  if (playerWins == 5 || computerWins == 5) {
    return true;
  }
  return false;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    computerSelection = computerPlay();
    msg = (playRound(button.id, computerSelection));
    if (msg[4] == 'W') {
      playerWins++;
    } else if (msg[4] == 'L') {
      computerWins++
    }
    divResult.textContent = msg;
    player.textContent = playerWins;
    computer.textContent = computerWins;
    if (winner()) {
      divResult.textContent += "<br/>Winner detected!"
      playerWins = 0;
      computerWins = 0;
    }
  });
});

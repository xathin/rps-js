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
        break
      case "paper":
        if (computerSelection.toLowerCase() == "scissors") {
          return loseMsg
        } else {
          return winMsg
        }
        break
      case "scissors":
        if (computerSelection.toLowerCase() == "rock") {
          return loseMsg
        } else {
          return winMsg
        }
    }
  }
}

function game() {
  let gamesPlayed
  let playerWins = 0
  let computerWins = 0
  for (gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors: ")
    let computerSelection = computerPlay()
    let msg = playRound(playerSelection, computerSelection)
    if (msg[4] == 'W') {
      playerWins++
    } else if (msg[4] == 'L') {
      computerWins++
    }
    console.log(msg)
  }
  console.log("Score: Player - " + playerWins + " Computer - " + computerWins)
}

// game()

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(playRound(button.id, computerPlay()));
  });
});

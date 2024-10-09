// Create a new function called getHumanChoice
function getHumanChoice() {
  // prompt user to enter choice
  humanChoice = prompt("rock, paper or scissors?")
  // make text case insensitive
  humanChoice = humanChoice.toLowerCase();
  // return one of the valid choices depending on what the user inputs
  switch(humanChoice) {
    case "rock":
      break;
    case "paper":
      break;
    case "scissors":
      break;
    default:
      console.log("not a valid input");
      getHumanChoice();
  }
  console.log("You have chosen " + humanChoice);
  return humanChoice;
}

// Create a new function called getComputerChoice
function getComputerChoice() {
  // generate random number between one and three
  let choiceNumber = Math.floor(Math.random() * 3)
  // use conditional statement to match each choice to either "rock", "paper" or "scissors" and return value
  let computerChoice = "error";
  switch(choiceNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "error - the computer has made no choice"
  }
  console.log("The computer has chosen " + computerChoice);
  return computerChoice;
}

// Create a new funtion named playRound with parameters to take the human and computer choices as arguments

// Create a function called playGame
function playGame(){
  // Declare playRound function and score variables so that they are declared inside playGame function
  function playRound(humanPlay, computerPlay) {
    let decision = "error";
    if (humanPlay == "rock") {
      switch (computerPlay){
        case "paper":
          decision = "You lose!";
          computerScore ++;
          break;
        case "scissors":
          decision = "You win!";
          humanScore ++;
          break;
        default:
          decision = "It's a draw!";
      }
    }
    else if (humanPlay == "paper") {
      switch (computerPlay){
        case "scissors":
          decision = "You lose!";
          computerScore ++;
          break;
        case "rock":
          decision = "You win!";
          humanScore ++;
          break;
        default:
          decision = "It's a draw!";
      }
    }
    else if (humanPlay == "scissors") {
      switch (computerPlay){
        case "rock":
          decision = "You lose!";
          computerScore ++;
          break;
        case "paper":
          decision = "You win!";
          humanScore ++;
          break;
        default:
          decision = "It's a draw!";
      }
    }
    return decision;
  }
  let humanScore = 0;
  let computerScore = 0;

  // Play 5 rounds by calling playRound 5 times
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));

  console.log("Human score is " + humanScore + " and Computer score is " + computerScore);
  
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));

  console.log("Human score is " + humanScore + " and Computer score is " + computerScore);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));

  console.log("Human score is " + humanScore + " and Computer score is " + computerScore);
  
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));

  console.log("Human score is " + humanScore + " and Computer score is " + computerScore);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));

  console.log("Human score is " + humanScore + " and Computer score is " + computerScore);

  if (humanScore > computerScore) {
    console.log("Human is the overall winner! Congratulations!!!")
  }
  else if (humanScore < computerScore) {
    console.log("Human is the overall Loser! Better luck next time!")
  }
  else {
    console.log("It's a draw! Try harder next time and you might win!")
  }
}

playGame ();
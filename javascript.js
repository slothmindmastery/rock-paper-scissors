const options = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function() {
  const choiceNumber = Math.floor(Math.random() * 3)
  let computerChoice = "";
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
  }
  console.log("The computer has chosen " + computerChoice);
  return computerChoice;
}

const playRound = function(humanChoice) {
  const computerChoice = getComputerChoice();
  let decision = "";
  if (humanChoice == options[0]) {
    switch (computerChoice){
      case options[1]:
        decision = "lose";
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
  else if (humanChoice == "paper") {
    switch (computerChoice){
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
  else if (humanChoice == "scissors") {
    switch (computerChoice){
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
  console.log(decision);
  return decision;
}

const buttonsSetup = function(){
  const optionButtons = document.createElement("div");
  optionButtons.setAttribute("id", "optionButtons")
  document.body.appendChild(optionButtons);
  const rockButton = document.createElement("button");
  rockButton.textContent = "rock";
  optionButtons.appendChild(rockButton);
  const paperButton = document.createElement("button");
  paperButton.textContent = "paper";
  optionButtons.appendChild(paperButton);
  const scissorsButton = document.createElement("button");
  scissorsButton.textContent = "scissors";
  optionButtons.appendChild(scissorsButton);
}

const buttonClick = function() {
  optionButtons = document.querySelector("#optionButtons");
  optionButtons.addEventListener('click', event => {
    if (event.target.matches("button")){
      humanChoice = event.target.textContent;
      console.log("You have chosen " + humanChoice + " !")
      playRound(humanChoice);
      return;
    }
  })
}

buttonsSetup();
buttonClick();
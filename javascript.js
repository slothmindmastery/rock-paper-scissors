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
  choiceNotification("computerChoice", computerChoice);
  return computerChoice;
}

const playRound = function(humanChoice) {
  const computerChoice = getComputerChoice();
  let winner = "";
  if (humanChoice == options[0]) {
    switch(computerChoice) {
      case options[1]:
        winner = "Computer";
        computerScore ++;
        break;
      case options[2]:
        winner = "Human";
        humanScore ++;
        break;
      default:
        winner = "Nobody";
    }
  }
  else if (humanChoice == options[1]) {
    switch(computerChoice) {
      case options[2]:
        winner = "Computer";
        computerScore ++;
        break;
      case options[0]:
        winner = "Human";
        humanScore ++;
        break;
      default:
        winner = "Nobody";
    }
  }
  else if (humanChoice == options[2]) {
    switch(computerChoice) {
      case options[0]:
        winner = "Computer";
        computerScore ++;
        break;
      case options[1]:
        winner = "Human";
        humanScore ++;
        break;
      default:
        winner = "Nobody";
    }
  }
  resultsNotification(winner);
  updateRunningScore()
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
      resetResults ();
      humanChoice = event.target.textContent;
      choiceNotification("humanChoice", humanChoice);
      playRound(humanChoice);
      return;
    }
  
  })
}

runningScoreSetup = function () {
  const runningScore = document.createElement("div");
  runningScore.setAttribute("id", "runningScoreDiv");
  document.body.appendChild(runningScore);
}

resultsDivSetup = function () {
  const resultsDiv = document.createElement("div");
  resultsDiv.setAttribute("id", "resultsDiv");
  document.body.appendChild(resultsDiv);
}

choiceNotification = function (id, choice) {
  const text = document.createElement("h2");
  text.setAttribute("id", id);
  if (id == "humanChoice"){
    text.textContent = "You have chosen " + choice;
  }
  if (id == "computerChoice") {
    text.textContent = "The computer has chosen " + choice;
  }
  const results = document.querySelector("#resultsDiv");
  results.appendChild(text);
}

const resultsNotification = function (winner) {
  const text = document.createElement("h1");
  text.setAttribute("id", "resultsNotification");
  text.textContent = "The winner is . . . " + winner + "!";
  const results = document.querySelector("#resultsDiv");
  results.appendChild(text);
}

const updateRunningScore = function () {
  const runningScoreDiv = document.querySelector("#runningScoreDiv");
  runningScoreDiv.textContent = "Human " + humanScore + ": Computer " + computerScore;
  if (humanScore == 5 || computerScore == 5) {
    const winnerDiv = document.createElement("div");
    document.body.appendChild(winnerDiv);
    if (humanScore == 5) {
      winnerDiv.textContent = "human is the overall winner!";
    }
    else {
      winnerDiv.textContent = "computer is the overall winner!";;
    }
  }
}

resetResults = function () {
  const results = document.querySelector("#resultsDiv");
  if (results) {
    while(results.firstChild){
      results.removeChild(results.firstChild);
    }
  }
}

buttonsSetup();
resultsDivSetup();
runningScoreSetup();
buttonClick();

let rock = document.querySelector(".rockBtn");
let paper = document.querySelector(".paperBtn");
let scissors = document.querySelector(".scissorsBtn");
let result = document.querySelector(".results");
let reset = document.querySelector(".resetBtn");
let userChoice;

rock.addEventListener("click", function () {
    userChoice = "rock";
    playGame(userChoice, computerChoice);
});
paper.addEventListener("click", function () {
    userChoice = "paper";
    playGame(userChoice, computerChoice);
});

scissors.addEventListener("click", function () {
    userChoice = "scissors";
    playGame(userChoice, computerChoice);
});

reset.addEventListener("click", function () {
    result.textContent = "Choose Rock, Paper, or Scissors!";
    userChoice = null;
    computerChoice = computerAnswer();
});


function computerAnswer() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let computerChoice = computerAnswer();

function playGame(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.textContent = "You both chose " + userChoice + " ... it's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")) {
        result.textContent = "You chose " + userChoice + " and the computer chose " + computerChoice + "  ... you lose!";
    } else {
        result.textContent = "You chose " + userChoice + " and the computer chose " + computerChoice + " ...  you win!";
    }
}

playGame(userChoice, computerChoice);
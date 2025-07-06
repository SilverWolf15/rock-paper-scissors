let humanScore = 0;
let computerScore = 0;
let humanChoice, computerChoice;
let rounds = 0;

let divContent = document.querySelector("#main");
let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorChoice = document.querySelector("#scissors");

let gameRound = document.createElement("div");
let scoreDisplay = document.createElement("div");
let gameInfo = document.createElement("div");

gameInfo.textContent = "Click a button to start!";

divContent.appendChild(gameRound);
divContent.appendChild(scoreDisplay);
divContent.appendChild(gameInfo);

function playRound(humanChoice) {
    if(rounds>4) {
        return;
    }
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        gameInfo.textContent = "It's a tie!";
    } else {
        switch(humanChoice) {
            case 'rock':
                (computerChoice === "paper") ? playerLose(humanChoice, computerChoice) : playerWin(humanChoice, computerChoice);
                break;
            case 'scissors':
                (computerChoice === "rock") ? playerLose(humanChoice, computerChoice) : playerWin(humanChoice, computerChoice);
                break;
            case 'paper':
                (computerChoice === "scissors") ? playerLose(humanChoice, computerChoice) : playerWin(humanChoice, computerChoice);
                break;
        }
    }
    displayScore();
}

function getComputerChoice() {
    let ans = Math.random();
    return (ans<0.33)?"rock":((ans<0.66)?"paper":"scissors");
}

function displayScore() {
    scoreDisplay.textContent = `Player Score : ${humanScore} and Computer Score : ${computerScore}`;
    rounds++;
    gameRound.textContent = `Round ${rounds}`;
    if(rounds===5) {
        gameInfo.textContent = (humanScore > computerScore) ? "Congrats! You win!" : ((humanScore === computerScore) ? "It's a tie!" : "Oh no! You lost!");
    }
}

function playerLose(humanChoice, computerChoice) {
    gameInfo.textContent = `You Lost!, ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
}

function playerWin(humanChoice, computerChoice) {
    gameInfo.textContent = `You Win!, ${humanChoice} beats ${computerChoice}`;
    humanScore += 1;
}

rockChoice.addEventListener('click',() => playRound("rock"));
paperChoice.addEventListener('click',() => playRound("paper"));
scissorChoice.addEventListener('click',() => playRound("scissors"));
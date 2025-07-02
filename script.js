function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice, computerChoice;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            switch(humanChoice) {
                case 'rock':
                    (computerChoice === "paper") ? playerLose(humanChoice, computerChoice) : playerWin(humanChoice, computerChoice);
                    break;
                case 'scissor':
                    (computerChoice === "rock") ? playerLose(humanChoice, computerChoice) : playerWin(humanChoice, computerChoice);
                    break;
                case 'paper':
                    (computerChoice === "scissor") ? playerLose(humanChoice, computerChoice) : playerWin(humanChoice, computerChoice);
                    break;
                default:
                    console.log("Enter a valid choice");
            }
        }

        displayScore();
    }

    function getHumanChoice() {
        let ans = prompt("Enter your choice");
        return (ans.toLowerCase()).replace(/\s+/g, '');
    }

    function getComputerChoice() {
        let ans = Math.random();
        return (ans<0.33)?"rock":((ans<0.66)?"paper":"scissors");
    }

    function displayScore() {
        console.log(`Player Score : ${humanScore} and Computer Score : ${computerScore}`);
    }

    function playerLose(humanChoice, computerChoice) {
        console.log(`You Lost!, ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }

    function playerWin(humanChoice, computerChoice) {
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }

    for(let i=0; i<5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    (humanScore > computerScore) ? console.log("Congrats! You win!") : console.log("Oh no! You lost!");
}

playGame();
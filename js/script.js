
document.addEventListener("DOMContentLoaded", function () {

    const ROCK = 'Rock';
    const PAPER = 'Paper';
    const SCISSORS = 'Scissors';
    const options = [ROCK, PAPER, SCISSORS];
    let playerScore = 0, computerScore = 0;

    function computerPlay() {
        const index = Math.floor((Math.random() * options.length));
        return options[index];
    }

    function playRound(playerSelection, computerSelection) {
        let result = '';
        switch (true) {
            case (playerSelection === null || playerSelection === undefined):
                result = 'Invalid option';
                break;
            case (playerSelection === computerSelection):
                result = `Tie! ${playerSelection} x ${computerSelection}`;
                break;
            case (playerSelection === ROCK && computerSelection === PAPER):
                result = `You Lose! ${PAPER} beats ${ROCK}`;
                computerScore++;
                break;
            case (playerSelection === PAPER && computerSelection === SCISSORS):
                result = `You Lose! ${SCISSORS} beats ${PAPER}`;
                computerScore++;
                break;
            case (playerSelection === SCISSORS && computerSelection === ROCK):
                result = `You Lose! ${ROCK} beats ${SCISSORS}`;
                computerScore++;
                break;
            case (playerSelection === ROCK && computerSelection === SCISSORS):
                result = `You Won! ${ROCK} beats ${SCISSORS}`;
                playerScore++;
                break;
            case (playerSelection === PAPER && computerSelection === ROCK):
                result = `You Won! ${PAPER} beats ${ROCK}`;
                playerScore++;
                break;
            case (playerSelection === SCISSORS && computerSelection === PAPER):
                result = `You Won! ${SCISSORS} beats ${PAPER}`;
                playerScore++;
                break;
            default:
                result = 'Oops! Something went wrong';
                break;
        }
        return result;
    }

    function findSelection(selection) {
        let option;
        switch (selection.toUpperCase()) {
            case ROCK.toUpperCase():
                option = ROCK;
                break;
            case PAPER.toUpperCase():
                option = PAPER;
                break;
            case SCISSORS.toUpperCase():
                option = SCISSORS;
                break;
            default:
                option = null;
                break;
        }
        return option;
    }

    function game() {
        const gameRounds = 5;
        let round = 1;
        let keepGoing = true;
        while (keepGoing) {
            const playerInput = prompt('Rock, Paper or Scissors?');
            if (playerInput === null || playerInput === undefined) {
                continue;
            }

            const playerPlay = findSelection(playerInput);
            if (playerPlay === null) {
                console.log(`Invalid input: ${playerInput}`);
                continue;
            }

            const roundResult = playRound(playerPlay, computerPlay());
            console.log(`Round ${round}: ${roundResult}`);

            round++;

            if (round > gameRounds) {
                console.log(gameResult());
                keepGoing = false;
            }
        }
    }

    function gameResult() {
        let result = '';
        if (playerScore === computerScore) {
            result = `Tied! Score - You: ${playerScore}, Computer: ${computerScore}`;
        } else if (playerScore > computerScore) {
            result = `Congratulations! Score - You: ${playerScore}, Computer: ${computerScore}`;
        } else {
            result = `You lose! Score - You: ${playerScore}, Computer: ${computerScore}`;
        }
        return result;
    }

    game();

});

document.addEventListener("DOMContentLoaded", function () {
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors";
  const options = [ROCK, PAPER, SCISSORS];

  let playerScore = 0,
    computerScore = 0,
    round = 0;

  const rockBtn = document.querySelector("#rock-btn");
  const paperBtn = document.querySelector("#paper-btn");
  const scissorsBtn = document.querySelector("#scissors-btn");
  const resetBtn = document.querySelector("#reset-btn");

  const playerNameUI = document.querySelector("#player-name");
  const playerScoreUI = document.querySelector("#player-score");
  const computerScoreUI = document.querySelector("#computer-score");
  const roundResultUI = document.querySelector("#round-result");
  const gameResultUI = document.querySelector("#game-result");

  const rockBtnEvent = () => playRound(ROCK, computerPlay());
  const paperBtnEvent = () => playRound(PAPER, computerPlay());
  const scissorsBtnEvent = () => playRound(SCISSORS, computerPlay());

  rockBtn.addEventListener("click", rockBtnEvent);
  paperBtn.addEventListener("click", paperBtnEvent);
  scissorsBtn.addEventListener("click", scissorsBtnEvent);
  resetBtn.addEventListener("click", resetGame);

  function computerPlay() {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  function playRound(playerSelection, computerSelection) {
    let roundResult = "";
    switch (true) {
      case playerSelection === null || playerSelection === undefined:
        roundResult = "Invalid option";
        break;
      case playerSelection === computerSelection:
        roundResult = `Tie! ${playerSelection} x ${computerSelection}`;
        break;
      case playerSelection === ROCK && computerSelection === PAPER:
        roundResult = `You Lose! ${PAPER} beats ${ROCK}`;
        computerScore++;
        break;
      case playerSelection === PAPER && computerSelection === SCISSORS:
        roundResult = `You Lose! ${SCISSORS} beats ${PAPER}`;
        computerScore++;
        break;
      case playerSelection === SCISSORS && computerSelection === ROCK:
        roundResult = `You Lose! ${ROCK} beats ${SCISSORS}`;
        computerScore++;
        break;
      case playerSelection === ROCK && computerSelection === SCISSORS:
        roundResult = `You Won! ${ROCK} beats ${SCISSORS}`;
        playerScore++;
        break;
      case playerSelection === PAPER && computerSelection === ROCK:
        roundResult = `You Won! ${PAPER} beats ${ROCK}`;
        playerScore++;
        break;
      case playerSelection === SCISSORS && computerSelection === PAPER:
        roundResult = `You Won! ${SCISSORS} beats ${PAPER}`;
        playerScore++;
        break;
      default:
        roundResult = "Oops! Something went wrong";
        break;
    }

    playerScoreUI.textContent = playerScore;
    computerScoreUI.textContent = computerScore;

    round++;
    roundResultUI.textContent = `Round ${round}: ${roundResult}`;

    if (playerScore === 5 || computerScore === 5) {
      gameResultUI.textContent = gameResult();

      rockBtn.removeEventListener("click", rockBtnEvent);
      paperBtn.removeEventListener("click", paperBtnEvent);
      scissorsBtn.removeEventListener("click", scissorsBtnEvent);
    }
  }

  function gameResult() {
    let result = "";
    if (playerScore > computerScore) {
      result = `Congratulations! Score - You: ${playerScore}, Computer: ${computerScore}`;
    } else {
      result = `You lose! Score - You: ${playerScore}, Computer: ${computerScore}`;
    }
    return result;
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    playerScoreUI.textContent = playerScore;
    computerScoreUI.textContent = computerScore;
    roundResultUI.textContent = "";
    gameResultUI.textContent = "";

    rockBtn.addEventListener("click", rockBtnEvent);
    paperBtn.addEventListener("click", paperBtnEvent);
    scissorsBtn.addEventListener("click", scissorsBtnEvent);
  }
});

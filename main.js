const moves = ['rock', 'paper', 'scissors']

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)]
}

const clickSound = new Audio("./sounds/click.wav")
const buttons = document.querySelectorAll('input')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e.target.id, computerPlay());
        clickSound.play()
    })
})
const player = document.querySelector("#player")
const computer = document.querySelector("#computer")
const hero = document.querySelector(".hero")

let computerScore = 0
let playerScore = 0

player.textContent = playerScore.toString()
computer.textContent = computerScore.toString()

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection===computerSelection) {

    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection==='scissors' && computerSelection==='rock') || (playerSelection==='paper' && computerSelection==='scissors') ) {
        computerScore++;
    } else {
        playerScore++;
    }

    player.textContent = playerScore.toString()
    computer.textContent = computerScore.toString();

    if (computerScore == 5) {
        hero.textContent = "You lose! Refresh to retry!";
        disableButtons();

    } else if (playerScore == 5) {
        hero.textContent = "You win! Refresh to play again!"
        disableButtons();
    }

}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}
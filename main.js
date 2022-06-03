const moves = ['rock', 'paper', 'scissors']

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)]
}


const buttons = document.querySelectorAll('input')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e.target.id, computerPlay());
    })
})
const player = document.querySelector("#player")
const computer = document.querySelector("#computer")

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

}

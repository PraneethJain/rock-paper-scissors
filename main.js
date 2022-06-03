const moves = ['rock', 'paper', 'scissors']

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)]
}



const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e.target.id, computerPlay());
    })
})


let computerScore = 0
let playerScore = 0
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection===computerSelection) {

    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection==='scissors' && computerSelection==='rock') || (playerSelection==='paper' && computerSelection==='scissors') ) {
        computerScore++;
    } else {
        playerScore++;
    }
    console.log(`${playerScore} ${computerScore}`);
    
}

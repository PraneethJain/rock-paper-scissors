const moves = ['rock', 'paper', 'scissors']

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection===computerSelection) {
        return `draw`
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection==='scissors' && computerSelection==='rock') || (playerSelection==='paper' && computerSelection==='scissors') ) {
        return `lose`
    } else {
        return `win`
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0
    for (let i=0; i<5; i++) {
        const result = playRound(prompt("Choose your weapon!"),computerPlay())
        if (result==='lose') {
            computerScore++
        } else if (result==='win') {
            playerScore++
        } else if (result==='draw') {

        }
        console.log(`Your score is ${playerScore}`)
        console.log(`Computer's score is ${computerScore}`)
    }
    if (playerScore>computerScore) {
        console.log('You WIN!')
    } else if (playerScore<computerScore) {
        console.log('You LOSE!')
    } else {
        console.log('I do not know how you got here!')
    }
}

game()
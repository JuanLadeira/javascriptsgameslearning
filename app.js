const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
            result = 'Empatou!!'
    }
    if (computerChoice === "rock" && userChoice ==="paper") {
        result = 'Você ganhou!!'
}
    if (computerChoice === "paper" && userChoice ==="rock") {
    result = 'Você perdeu!!'
}
    if (computerChoice === "paper" && userChoice ==="scissors") {
    result = 'Você ganhou'
}
    if (computerChoice === "scissors" && userChoice ==="paper") {
    result = 'Você perdeu!!'
}
    if (computerChoice === "scissors" && userChoice ==="rock") {
    result = 'Você ganhou'  
}
    if (computerChoice === "rock" && userChoice ==="scissors") {
    result = 'Você perdeu!!'
}
    resultDisplay.innerHTML = result
}
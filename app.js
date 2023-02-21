const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
let vitoria
let empate
let derrota

empate = "Empatou!!"
vitoria = "Você ganhou!!"
derrota = "Você perdeu"


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)

    if (randomNumber === 1){
        computerChoice = 'Pedra'
    }
    if (randomNumber === 2){
        computerChoice = 'Papel'
    }
    if (randomNumber === 3){
        computerChoice = 'Tesoura'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
            result = empate
    }
    if (computerChoice === "Pedra" && userChoice ==="Papel") {
        result = vitoria
}
    if (computerChoice === "Papel" && userChoice ==="Pedra") {
    result = derrota
}
    if (computerChoice === "Papel" && userChoice ==="Tesoura") {
    result = vitoria
}
    if (computerChoice === "Tesoura" && userChoice ==="Papel") {
    result = derrota
}
    if (computerChoice === "Tesoura" && userChoice ==="Pedra") {
    result = vitoria  
}
    if (computerChoice === "Pedra" && userChoice ==="Tesoura") {
    result = derrota
}
    if (result === empate) {
        resultDisplay.innerHTML = result
        resultDisplay.setAttribute('class', 'text-primary')
    }
    if (result === derrota) {
        resultDisplay.innerHTML = result
        resultDisplay.setAttribute('class', 'text-danger')
    }
    if (result === vitoria) {
        resultDisplay.innerHTML = result
        resultDisplay.setAttribute('class', 'text-success')
    }
    
}
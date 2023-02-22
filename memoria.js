document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburguer',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburguer',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay  = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const pontuacaoDisplay = document.querySelector('#pontuacao')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []



function createBoard(){
    for (let i = 0;i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.append(card)   
    }
}

function flipcard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("Você clicou duas vezes na mesma figura, tente novamente")
    }
    else if(cardsChosen[0] == cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        alert('Você achou um Match!!')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("Você não conseguiu, tente novamente!!")
    }
    
    cardsChosen = []
    cardsChosenIds = []
    console.log(cardsWon.length)
    resultDisplay.textContent = cardsWon.length + " pontos"

    if(cardsWon.length === cardArray.length/2){
        pontuacaoDisplay.remove()
        resultDisplay.innerHTML = 'Parabéns, você encontrou todas as duplicatas.'
    }
}   
createBoard()

})
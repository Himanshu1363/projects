
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false
let messageEL = document.getElementById("messageEL")
let sumEl = document.querySelector("#sumEl")
let cardEl = document.getElementById("card-El")
let cards = []
console.log(cards)

function randomm()
{
    let randomNumber = Math.floor ( Math.random() * 13) + 1
    if (randomNumber===1) {
        return randomNumber = 11
    }
    else if (randomNumber >10)
    {
        return randomNumber =10
    }
    else {
        return randomNumber;
    }

}



function startGame(){
    isAlive = true
    let firstCard = randomm()
let secondCard = randomm()
sum = firstCard + secondCard
cards = [firstCard,secondCard]
    renderGame()
}



function renderGame(){
    cardEl.textContent = "Cards:"
for ( i=0;i<cards.length;i++)
{
    cardEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum:"+" "+sum
if (sum<=20){
    message="Do you want to draw another card?"
}
else if (sum===21){
    message="You've got a Blackjack" 
    hasBlackJack = true
}
else {
    message="You're  out of game "
    isAlive = false
}
 messageEl.textContent = message

}
function newCard()

{
    if (isAlive===true && hasBlackJack===false){
    let card = randomm()
    sum += card
    cards.push(card)
    renderGame()}
}



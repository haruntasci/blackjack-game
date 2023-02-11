
let player = {
    name: "Harun",
    chips: 200,

}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardsText;
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {

    let value = Math.floor(Math.random() * 13) + 1;

    value == 1 ? value = 11 : value > 10 ? value = 10 : value = value;


    return value;

}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

}


function renderGame() {

    sumEl.textContent = "Sum: " + sum;

    cardsText = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsText += cards[i];
        if (i < cards.length - 1)
            cardsText += " ";
    }
    cardsEl.textContent = cardsText;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    }
    else if (sum == 21) {
        message = "You've got the BlackJack";
        hasBlackJack = true;
    }
    else {
        message = "You are out of the game";
        isAlive = false;
    }

    messageEl.textContent = message;
}
function newCard() {

    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }


}












document.addEventListener("DOMContentLoaded", function() {

})

var suits = ['H','D','C','S']
var cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
var deck = [];

for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var cardCounter = 0; cardCounter < 13; cardCounter++) {
        deck.push(cards[cardCounter] + suits[suitCounter]);
    }
}

const lastCard = document.getElementById("lastCard")
const nextCard = document.getElementById("nextCard");
const buttons = document.getElementsByClassName("btn");
const score = document.getElementById("score")
const result = document.getElementById("result")

let last_card = 0;
let next_card = deck[Math.floor(Math.random() * deck.length)];
let streak = 0;

nextCard.innerText = next_card;
lastCard.innerText = last_card;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        StartGame(this.dataset.value);
    })
}

function StartGame (choice) {

    last_card = next_card;
    next_card = deck[Math.floor(Math.random() * deck.length)];
    lastCard.innerText = last_card;
    nextCard.innerText = next_card;

    let compare;

    if (last_card < next_card) {
        compare = "higher";
    } else if (last_card > current_card) {
        compare = "lower";
    } else  {
        compare = "pair";
    }
    
    if (choice == compare) {
        score++;
        score.innerText = score;
        result.innerText = "Correct";
        result.classList.remove("correct");
        result.classList.remove("clear");
    } else if (compare == "pair") {
        result.innerText = "You don't get anything for a pair.....Not in this game";
        result.classList.remove("clear");
    } else {
        result.innerText = "Incorrect";
        result.classList.add("incorrect")
        result.classList.remove("clear");

        score = 0;
    }

}





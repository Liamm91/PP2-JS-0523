document.addEventListener("DOMContentLoaded", function() {

})

var suits = ['H','C','D','S'];
var cards = ['2','3','4','5','6', '7', '8', '9', '10', 'J', 'Q','K','A' ];
var deck = [];
for(var suitCounter = 0; suitCounter < 4; suitCounter++) {  
    for(var cardsCounter = 0; cardsCounter < 13; cardsCounter++) {
        deck.push(cards[cardsCounter]) + suits[suitCounter];
    }
}

const currentCard = document.getElementById("previousCard");
const nextCard = document.getElementById("nextCard");
const buttons = document.getElementsByClassName("btn");
const score = document.getElementById("score")
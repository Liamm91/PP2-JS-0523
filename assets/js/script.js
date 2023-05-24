document.addEventListener("DOMContentLoaded", function() {

})

var cards = ['H2','H3','H4','H5','H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ','HK','HA','C2','C3','C4','C5','C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ','CK','CA','D2','D3','D4','D5','D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ','DK','DA','S2','S3','S4','S5','S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ','SK','SA' ];

const currentCard = document.getElementById("previousCard");
const nextCard = document.getElementById("nextCard");
const buttons = document.getElementsByClassName("btn");
const score = document.getElementById("score")

let current_card = cards[Math.floor(Math.random() * cards.length)];
let next_card = cards[Math.floor(Math.random() * cards.length)];
let streak = 0;

previousCard.innerText = current_card;
nextCard.innerText = next_card;





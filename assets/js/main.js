const cards = document.querySelectorAll('.game-card');

let cardHasFlipped = false;
let cardOne, cardTwo;

// make the card flip
function flipCard() {
    this.classList.toggle('flip');
    //Picking two cards to match
    if (!cardHasFlipped) {
        cardHasFlipped = true;
        cardOne = this;
        // console.log({cardHasFlipped, cardOne});
    } else {
        cardHasFlipped = false;
        cardTwo = this;
        //console.log({cardOne,cardTwo});
        matchChecking();
    }
}
// this function will check if card one matched card Two
function matchChecking() {
    let match = cardOne.dataset.check === cardTwo.dataset.check
    match ? stopClick() : unFlip();
}
//  this function allows some time for the second card to flip over if it is incorrect
function unFlip() {
    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        //console.log('unmatched');
    }, 1500);
}

// this function stops the user from clicking the matched card.
function stopClick() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
}



cards.forEach(card => card.addEventListener('click', flipCard));
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

        // do cards match ??
        console.log(cardOne.dataset.check);
        console.log(cardTwo.dataset.check);
    }
}



cards.forEach(card => card.addEventListener('click', flipCard));
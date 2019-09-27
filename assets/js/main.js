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
        if (cardOne.dataset.check === cardTwo.dataset.check) {
            cardOne.removeEventListener('click', flipCard);
            cardTwo.removeEventListener('click', flipCard);
            //console.log('Matched')
        } else {
            //need to allow some time for the second card to flip over if it is incorrect.
            setTimeout(() => {
                cardOne.classList.remove('flip');
                cardTwo.classList.remove('flip');
                //console.log('unmatched');
            }, 1500);
        };
    }
}



cards.forEach(card => card.addEventListener('click', flipCard));
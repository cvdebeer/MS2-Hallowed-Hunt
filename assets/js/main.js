const cards = document.querySelectorAll('.game-card');

let cardHasFlipped = false;
let blockOverClick = false;
let cardOne, cardTwo;

// make the card flip
function flipCard() {
    // block from clicking too many card
    if (blockOverClick) return;
    // block from clicking the same card twice
    if (this === cardOne) return;

    this.classList.toggle('flip');
    //Picking two cards to match
    if (!cardHasFlipped) {
        //1st card
        cardHasFlipped = true;
        cardOne = this;
        return;
        // console.log({cardHasFlipped, cardOne});
    }
    //2nd card
    cardHasFlipped = false;
    cardTwo = this;
    //console.log({cardOne,cardTwo});
    matchChecking();
}

// this function will check if card one matched card Two
function matchChecking() {
    let match = cardOne.dataset.check === cardTwo.dataset.check
    match ? stopClick() : unFlip();
}
//  this function allows some time for the second card to flip over if it is incorrect
function unFlip() {
    blockOverClick = true;

    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        //console.log('unmatched');

        resetGameBoard()
    }, 1500);
}

// this function stops the user from clicking the matched card.
function stopClick() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);

    resetGameBoard();
}

function playAudio() {
    var audio = new Audio('assets/card-flip.wav');
    audio.play();
}

function resetGameBoard() {
    [cardHasFlipped, blockOverClick] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
cards.forEach(card => card.addEventListener('click', playAudio));
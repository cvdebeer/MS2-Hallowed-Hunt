const cards = document.querySelectorAll('.game-card');
const faceCards = [`assets/img/treaters.svg`, `assets/img/headless_skeleton.svg`, `assets/img/spider.svg`, `assets/img/spider.svg`, `assets/img/witchandpump.svg`, `assets/img/black_cat.svg`, `assets/img/treaters.svg`, `assets/img/ghost.svg`, `assets/img/witchandpump.svg`, `assets/img/ghost.svg`, `assets/img/black_cat.svg`, `assets/img/headless_skeleton.svg`]
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
    // console.log({cardOne,cardTwo });
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
// this function allows the sound effects when clicking the cards
function playAudio() {
    var audio = new Audio('assets/card-flip.wav');
    audio.play();
}

function resetGameBoard() {
    [cardHasFlipped, blockOverClick] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

//this function is to reset/restart the game board and unflip all the cards.
function shuffleCards() {
    cards.forEach(card => {
        card.classList.remove('flip');
    });
    cards.forEach(card => {
        let randomMix = Math.floor(Math.random() * 12);
        card.style.order = randomMix;
    });
    cards.forEach(card => card.addEventListener('click', flipCard));
};




cards.forEach(card => card.addEventListener('click', flipCard));
cards.forEach(card => card.addEventListener('click', playAudio));
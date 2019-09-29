const cards = document.querySelectorAll('.game-card');
const audio = new Audio('assets/card-flip.wav');
const sound = document.querySelector('#sound')
const reset = document.querySelector('#game-reset');
const moves = document.querySelector('.moves');
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
easyDone = [];

let count = 0;
let sec = 0,
    interval;
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
    easyDone.push(cardOne);
    easyDone.push(cardTwo);
    if (easyDone.length === 12) {
        resetTimer();
    }

    resetGameBoard();
}

function resetGameBoard() {
    [cardHasFlipped, blockOverClick] = [false, false];
    [cardOne, cardTwo] = [null, null];
}
// this function allows the sound effects when clicking the cards
function playAudio() {
    audio.play();
    sound.innerHTML == `<i class="fas fa-volume-up"> ON</i>`;
}

// switches sound effects on when you click the ON/OFF button
function audioButton() {
    if (sound.innerHTML == `<i class="fas fa-volume-up"> ON</i>`) {
        cards.forEach(card => card.removeEventListener('click', playAudio));
        sound.innerHTML = `<i class="fas fa-volume-up"> OFF</i>`;
    } else {
        cards.forEach(card => card.addEventListener('click', playAudio));
        sound.innerHTML = `<i class="fas fa-volume-up"> ON</i>`;
    }
}

//this function is to reset/restart the game board and unflip all the cards and turns move counter back to 0
function shuffleCards() {
    cards.forEach(card => {
        card.classList.remove('flip');
    });
    cards.forEach(card => {
        let randomMix = Math.floor(Math.random() * 12);
        card.style.order = randomMix;
    });
    resetTimer();
    cards.forEach(card => card.addEventListener('click', flipCard));
    cards.forEach(card => card.addEventListener('click', startTimer));
    count = 0;
    moves.innerHTML = `MOVES: ${count}`;
    sec = 0;
    easyDone = [];
};

//function to count the moves the player is making
function countMoves() {
    if (cardHasFlipped == true) {
        count++;
        moves.innerHTML = `MOVES: ${count}`;
    }
}
// function to start the timer- copied from Stack Overflow
function startTimer() {

    cards.forEach(card => card.removeEventListener('click', startTimer));
    clearInterval(interval);

    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
    interval = setInterval(function () {
        document.getElementById("seconds").innerHTML = ":" + pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);

}
//function to stop the clock from running.
function resetTimer() {
    clearInterval(interval);
}





sound.addEventListener('click', audioButton);
reset.addEventListener('click', shuffleCards);
cards.forEach(card => card.addEventListener('click', flipCard));
cards.forEach(card => card.addEventListener('click', startTimer));
cards.forEach(card => card.addEventListener('click', countMoves));
cards.forEach(card => card.addEventListener('click', playAudio));
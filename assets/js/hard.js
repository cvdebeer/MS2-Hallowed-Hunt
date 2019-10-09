const gameIntro = document.querySelector('.game-intro');
const cards = document.querySelectorAll('.game-card');
const audio = new Audio('assets/card-flip.wav');
const sound = document.querySelector('#sound');
const reset = document.querySelector('#game-reset');
const moves = document.querySelector('.moves');
const dropdown = document.querySelector('.change-level');
const drops = document.querySelectorAll('.drop');
const mdlDrops = document.querySelectorAll('.mdl-drop');
const gameSuccess = document.querySelector('.successful-game');
const modalReset = document.querySelector('#mdl-rst');
const modalCL = document.querySelector('#mdl-chg-lvl');
const exit = document.querySelector('#mdl-exit');
const easteregg = document.querySelector('#halloween');

let hardDone = [];
let count = 0;
let sec = 0;
let interval = 0;
let cardHasFlipped = false;
let blockOverClick = false;
let cardOne, cardTwo;

// game starter modal
$(gameIntro).modal('show');
// showEasterEgg start function
$(window).on('load', showEasterEgg);

shuffleCards();


// make the card flip- function used  from Code Sketch
function flipCard() {

    // // block from clicking too many card
    if (blockOverClick) return;
    // // block from clicking the same card twice
    if (this === cardOne) return;

    this.classList.toggle('flip');
    //Picking two cards to match
    if (!cardHasFlipped) {
        //1st card
        cardHasFlipped = true;
        cardOne = this;
        return;
    }
    //2nd card
    cardHasFlipped = false;
    cardTwo = this;

    matchChecking();
}

// this function will check if card one matched card Two-  function used  from Code Sketch
function matchChecking() {
    let match = cardOne.dataset.check === cardTwo.dataset.check;
    match ? stopClick() : unFlip();
}
//  this function allows some time for the second card to flip over if it is incorrect - function used  from Code Sketch
function unFlip() {
    blockOverClick = true;

    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        resetGameBoard();
    }, 1200);
}

// this function stops the user from clicking the matched card.-- function used and adjusted from Code Sketch
function stopClick() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
    hardDone.push(cardOne);
    hardDone.push(cardTwo);
    if (hardDone.length === 24) {
        successModal();
        resetTimer();
    }

    resetGameBoard();
}

//- function used  from Code Sketch to lock the board
function resetGameBoard() {
    [cardHasFlipped, blockOverClick] = [false, false];
    [cardOne, cardTwo] = [null, null];
}
// this function allows the sound effects when clicking the cards
function playAudio() {
    audio.play();
    sound.innerHTML = `ON<span><i class="fas fa-volume-up"></i></span>`;
}

// switches sound effects on when you click the ON/OFF button
function audioButton() {
    if (sound.innerHTML == `ON<span><i class="fas fa-volume-up"></i></span>`) {
        cards.forEach(card => card.removeEventListener('click', playAudio));
        sound.innerHTML = `OFF<span><i class="fas fa-volume-up"></i></span>`;
    } else {
        cards.forEach(card => card.addEventListener('click', playAudio));
        sound.innerHTML = `ON<span><i class="fas fa-volume-up"></i></span>`;
    }
}

//this function is to reset/restart the game board and unflip all the cards and turns move counter back to 0
//- function used  from Code Sketch and adjusted to add extra elements needed for the rest of my code
function shuffleCards() {
    cards.forEach(card => {
        card.classList.remove('flip');
    });
    cards.forEach(card => {
        let randomMix = Math.floor(Math.random() * 24);
        card.style.order = randomMix;
    });
    resetTimer();
    cards.forEach(card => card.addEventListener('click', flipCard));
    cards.forEach(card => card.addEventListener('click', startTimer));
    count = 0;
    moves.innerHTML = `MOVES: ${count}`;
    sec = 0;
    hardDone = [];
    $(gameSuccess).modal('hide');
    showEasterEgg();
}

//function to count the moves the player is making
function countMoves() {
    if (cardHasFlipped == true) {
        count++;
        moves.innerHTML = `MOVES: ${count}`;
    }
}

// function to start the timer- copied and adjusted from Stack Overflow (https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript)
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

function navFunc() {
    drops.forEach(drop => drop.classList.add('show'));
}

function navNot() {
    drops.forEach(drop => drop.classList.remove('show'));
}

// function from stackoverflow to show tooltips only on hover.(https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript)
$('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
});

//function to launch the modal at the end of the game
function successModal() {
    $(gameSuccess).modal('show');
}

function exitGame() {
    $(gameSuccess).modal('hide');
}

function mdlDropDown() {
    mdlDrops.forEach(drop => drop.classList.add('show'));
}

function mdlDropDownExit() {
    mdlDrops.forEach(drop => drop.classList.remove('show'));
}

//this function shows the user the clue to the Konami code
function showEasterEgg() {

    easteregg.classList.add('show');

    setTimeout(function () {
        easteregg.classList.remove('show');
    }, 10000)
}

dropdown.addEventListener('mouseover', navFunc);
dropdown.addEventListener('mouseout', navNot);
modalCL.addEventListener('mouseover', mdlDropDown);


sound.addEventListener('click', audioButton);
reset.addEventListener('click', shuffleCards);
modalReset.addEventListener('click', shuffleCards);
exit.addEventListener('click', exitGame);
modalCL.addEventListener('click', mdlDropDownExit);

cards.forEach(card => card.addEventListener('click', flipCard));
cards.forEach(card => card.addEventListener('click', startTimer));
cards.forEach(card => card.addEventListener('click', countMoves));
cards.forEach(card => card.addEventListener('click', playAudio));
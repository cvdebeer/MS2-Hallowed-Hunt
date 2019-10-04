//This code was copied for the most part from a WesBos tutorial https://javascript30.com/ day 12
// I adjusted the code to insert my own little pop up into the mix.

const pressed = [];
const secretCode = 'halloween';
const dance = document.querySelector('.easteregg');
const close = document.querySelector('.easter-close');

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        dance.classList.add('show');
        console.log(pressed);
    }
});

function closeKonami() {
    dance.classList.remove('show');
}
close.addEventListener('click', closeKonami);
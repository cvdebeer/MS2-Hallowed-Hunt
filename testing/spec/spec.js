//testing example
describe("Purpose", function () {
    var a;
    it("Expectation", function () {
        //arrange
        a = true;
        //act
        //assert
        expect(a).toBe(true);
    });
});

describe("flipCard function has been defined", function () {
    it("should exist", function () {
        expect(flipCard).toBeDefined();
    });
    it('should toggle the flip class', function () {
        expect($('.game-card')).toHaveClass('flip');
    });
    it('should identify the first card turned', function () {

    });
    it('should identify the second card turned', function () {

    });
});

describe('function for checking whether the two cards selected match', function () {
    it('should check whether the datasets match', function () {

    });
});

describe(`'have a function the unFlips the selected cards if they don't match`, function () {
    it('should remove the flip class', function () {

    });
});
describe(`function for removing the clicking functionality from matched cards`, function () {
    it('should remove the EventListener from the card', function () {

    });
});
describe('stopping the ability to turn over other cards before the two selected cards have been checked', function () {
    it('should lock the board to prevent clicking cards', function () {

    });
});
describe('dealing with clicking the same card more than once', function () {
    it('should ignore a second click on the same card if already face-up', function () {

    });
});

describe(`play and audio snippet every time a card is clicked`, function () {
    it('should initiate wav file with each click', function () {
        var audio = new Audio(src = "assets/card-flip.wav");
        audio.play();
        expect($('#sound')).toBe(true);
    });
});
describe(`removing the audio from the game`, function () {
    it('should toggle between sound being on and off', function () {

    });
    it('should change the wording on the button between on and off', function () {

    });
});
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
    it(`should add the class 'flip' to the card`, function () {


        flipCard();
        expect(this.classList.toggle('.flip')).toBe(true);
    })
});
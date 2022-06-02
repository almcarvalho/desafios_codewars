const squareDigits = require('./square');

describe("Basic tests", () => {

    it("squareDigits(3212) should equal 9414", () => {
        expect(squareDigits(3212)).toBe(9414);
    });

    it("squareDigits(2112) should equal 4114", () => {
        expect(squareDigits(2112)).toBe(4114);
    });

    it("squareDigits(0) should equal 0", () => {
        expect(squareDigits(0)).toBe(0);
    });
})
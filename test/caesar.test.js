const {expect} = require("chai");
const { caesar } = require("../src/caesar.js");

describe("function caesar(input, shift, encode = true)", () => {
    it("should return false if the shift value is equal to 0", () => {
       const actual = caesar("thinkful", 0)
       expect(actual).to.be.false
    });
    it("should return false if the shift value is less than -25", () => {
        const actual = caesar("thinkful", -50)
        expect(actual).to.be.false
    });
    it("should return false if the shift value is greater than 25", () => {
        const actual = caesar("thinkful", 50)
        expect(actual).to.be.false

    });
    it("should ignore capital letters", () => {
        const actual = caesar("THINKFUL",3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    });
    it(`If a letter is shifted so that it goes ${"off"} the alphabet, it should wrap around to the front of the alphabet`, () => {
        const actual = caesar("Zebra Magazine", 3)
        const expected = "cheud pdjdclqh"
        expect(actual).to.equal(expected)
        const actualNegativeShift = caesar("dog", -10)
        const expectedNegativeShift = "tew"
        expect(actualNegativeShift).to.equal(expectedNegativeShift)
    })
    it("should return a decoded message", () => {
        const actual = caesar("F tfii mxpp qefkhcri!", -3, false)
        const expected = "i will pass thinkful!"
        expect(actual).to.equal(expected)
        const actualNegativeShift = caesar("L qhhg wr sdvv wklqnixo!", 3, false)
        const expectedNegativeShift = "i need to pass thinkful!"
        expect(actualNegativeShift).to.equal(expectedNegativeShift)
    })
    it("should maintain spaces and other nonalphabetic symbols in the message,", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected)
    })

});
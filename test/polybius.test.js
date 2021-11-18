const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("function polybius(input, encode = true)", () => {
    it("should return a string", () => {
        const actual = polybius("thinkful", true)
        expect(actual).to.be.a("string")
    });
    it("should ignore capital letters", () => {
        const actual = polybius("Thinkful", true)
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    });
    it("should maintain the spaces throughout", ()  => {
        const actual = polybius("hello world", true)
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    });
    it("the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
        const actual = polybius("44324233521254134", false)
        expect(actual).to.be.false
        const actualTwo = polybius("443242 33521254134", false)
        expect(actualTwo).to.be.false
    });
    it(`When encoding with the letters ${"I"} and ${"J"} both letters can be converted to 42"`, () => {
        const actual = polybius("thinkful", true)
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)

    });
    it(`when decoding with the letters ${"I"} and ${"J"}, both letters should be shown.`, () => {
        const actual = polybius("4432423352125413", false)
        const expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    });


});

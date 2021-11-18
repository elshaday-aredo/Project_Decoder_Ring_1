const {expect} = require("chai");
const {substitution} = require("../src/substitution.js");

describe("function substitution(input, alphabet, encode = true)", () => {
    it("should return false if the alphabet parameter is not a string of exactly 26 characters" ,() => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.be.a("string")
        const actualTwo =  substitution("thinkful", "short")
        expect(actualTwo).to.be.false 
        const actualThree = substitution("thinkful", "thisAlphabetIsLongerThan26Characters")
        expect(actualThree).to.be.false
    });
    it("should return false if any character in the alaphabet is repeated", () => {
        const actual = substitution("thinkful", "abcdefghijklmnopqrstuvwxyy")
        expect(actual).to.be.false
    });
    it("should return false if there is no alphabet", () => {
        const actual = substitution("thinkful")
        expect(actual).to.be.false
    });
    it("should ignore capital letters", () => {
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    });
    it("should maintain the spaces if input has any", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
        const actualTwo = substitution("r droo  tizwfzgv uiln gsrmpufo lm grnv", "zyxwvutsrqponmlkjihgfedcba")
        const expectedTwo = "i will  graduate from thinkful on time" 
        expect(actualTwo).to.equal(expectedTwo)
    });
});

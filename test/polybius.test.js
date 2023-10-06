// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius"); 

describe("polybius", () => {
  it("should encode 'Walter White'", () => {
    const characterName = "Walter White";
    const encodedName = polybius(characterName, true);
    expect(encodedName).to.equal("251113445124 2532424451");
  });

  it("should decode an encoded 'Walter White'", () => {
    const encodedName = "251113445124 2532424451";
    const decodedName = polybius(encodedName, false);
    expect(decodedName).to.equal("walter wh(i/j)te");
  });

  it("should handle 'i/j' correctly during decoding", () => {
    const encodedName = "424242";
    const decodedName = polybius(encodedName, false);
    expect(decodedName).to.equal("(i/j)(i/j)(i/j)");
  });

  it("should return false for invalid decoding input", () => {
    const encodedMessage = "2345 235134341122514";
    const decodedMessage = polybius(encodedMessage, false);
    expect(decodedMessage).to.be.false;
  });
});
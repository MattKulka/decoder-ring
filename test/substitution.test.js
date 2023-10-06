const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests with corrected alphabets", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "apple";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "banana";
      const alphabet = "shortalphabet";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "cherry";
      const alphabet = "aabccdefghijklmnopqrstuvwxyz";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "dog";
      const alphabet = "XOYQMCGRUKSWAFLNTHDJPZIBEV";
      const actual = substitution(message, alphabet);
      const expected = "qlg";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "ice cream";
      const alphabet = "XOYQMCGRUKSWAFLNTHDJPZIBEV";
      const actual = substitution(message, alphabet);
      const expected = "uym yhmxa";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "QLG";
      const alphabet = "XOYQMCGRUKSWAFLNTHDJPZIBEV";
      const actual = substitution(message, alphabet, false);
      const expected = "dog";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "AXJJ!";
      const alphabet = "XOYQMCGRUKSWAFLNTHDJPZIBEV";
      const actual = substitution(message, alphabet, false);
      const expected = "matt!";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "UYM YHMXA";
      const alphabet = "XOYQMCGRUKSWAFLNTHDJPZIBEV";
      const actual = substitution(message, alphabet, false);
      const expected = "ice cream";

      expect(actual).to.equal(expected);
    });
  });
});
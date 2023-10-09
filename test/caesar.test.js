// Write your tests here!
const chai = require("chai");
const caesarModule = require("../src/caesar");

const { expect } = chai;

describe("caesarModule", () => {
  describe("caesar()", () => {
    it("should encode spider-mans name with a positive shift", () => {
      const input = "Spider-Man";
      const shift = 3;
      const expectedOutput = "vslghu-pdq";

      const actualOutput = caesarModule.caesar(input, shift);

      expect(actualOutput).to.equal(expectedOutput);
    });

    it("should encode spider-mans name with a negative shift", () => {
      const input = "vslghu-pdq";
      const shift = -3;
      const expectedOutput = "spider-man";

      const actualOutput = caesarModule.caesar(input, shift);

      expect(actualOutput).to.equal(expectedOutput);
    });

    it("should handle non-alphabetic characters", () => {
      const input = "Spider-man 123";
      const shift = 3;
      const expectedOutput = "vslghu-pdq 123";

      const actualOutput = caesarModule.caesar(input, shift);

      expect(actualOutput).to.equal(expectedOutput);
    });

    it("should return false if the shift value is invalid", () => {
      const input = "Spider-man";
      const shift = -27;

      const actualOutput = caesarModule.caesar(input, shift);

      expect(actualOutput).to.be.false;
    });
  });

  describe("decode()", () => {
    it("should decode spider-mans name with a positive shift", () => {
      const input = "pmfabo-jxk";
      const shift = -3;
      const expectedOutput = "spider-man";

      const actualOutput = caesarModule.decode(input, shift);

      expect(actualOutput).to.equal(expectedOutput);
    });

    it("should decode a spider-mans with a negative shift", () => {
      const input = "vslghu-pdq";
      const shift = 3;
      const expectedOutput = "spider-man";

      const actualOutput = caesarModule.decode(input, shift);

      expect(actualOutput).to.equal(expectedOutput);
    });

    it("should handle non-alphabetic characters", () => {
      const input = "pmfabo-jxk 123";
      const shift = -3;
      const expectedOutput = "spider-man 123";

      const actualOutput = caesarModule.decode(input, shift);

      expect(actualOutput).to.equal(expectedOutput);
    });

    it("should return false if the shift value is invalid", () => {
      const input = "vslghu-pdq";
      const shift = -27;

      const actualOutput = caesarModule.decode(input, shift);

      expect(actualOutput).to.be.false;
    });
  });
});

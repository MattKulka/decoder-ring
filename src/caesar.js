// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  // Check if shift is valid
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }

  // Adjust the shift direction for decoding
  if (!encode) {
    shift *= -1;
  }

  // Convert input to lowercase outside the loop
  const inputLowerCase = input.toLowerCase();

  for (let i = 0; i < input.length; i++) {
    const inputLetter = inputLowerCase[i];

    if (alphabet.includes(inputLetter)) {
      const indexOfLetter = alphabet.indexOf(inputLetter);

      let finalIndex = indexOfLetter + shift;

      if (finalIndex < 0) {
        finalIndex += 26;
      } else if (finalIndex > 25) {
        finalIndex -= 26;
      }

      result += alphabet[finalIndex];
    } else {
      result += input[i];
    }
  }

  return result;
}

function decode(input, shift) {
  
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }

  // Convert all capital letters to lowercase letters
  const inputLowerCase = input.toLowerCase();

  // Decode the input string
  const decodedString = caesar(inputLowerCase, shift * -1);

  // Return the decoded string
  return decodedString;
}

  return {
    caesar,
    decode,
  };
})();

module.exports = { caesar: caesarModule.caesar , decode: caesarModule.decode};
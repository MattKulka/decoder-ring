// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

function substitution(input, alphabet, encode = true) {
  
  if (!alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) {
    return false;
  }

  // Check for unique characters in the alphabet
  const uniqueChars = new Set(alphabet);
  if (uniqueChars.size !== 26) {
    return false;
  }

  // Define the standard alphabet for reference
  const standardAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const substitutionAlphabet = alphabet.toUpperCase();

  let result = '';

  for (let char of input) {
    if (char === ' ') {
      // Maintain spaces
      result += ' ';
    } else {
      const index = encode
        ? standardAlphabet.indexOf(char.toUpperCase())
        : substitutionAlphabet.indexOf(char.toUpperCase());

      if (index !== -1) {
        result += encode
          ? substitutionAlphabet[index]
          : standardAlphabet[index];
      } else {
        result += char;
      }
    }
  }
  return result.toLowerCase();
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
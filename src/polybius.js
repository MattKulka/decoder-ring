// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
  // Define the Polybius square 
  const polybiusSquare = {
    a: '11', b: '21', c: '31', d: '41', e: '51',
    f: '12', g: '22', h: '32', i: '42', j: '42',
    k: '52', l: '13', m: '23', n: '33', o: '43',
    p: '53', q: '14', r: '24', s: '34', t: '44',
    u: '54', v: '15', w: '25', x: '35', y: '45', z: '55',
    ' ': ' '
  };

  // Helper function to swap keys and values 
  const reversePolybiusSquare = Object.fromEntries(
    Object.entries(polybiusSquare).map(([key, value]) => [value, key])
  );

  // Convert the input to lowercase
  input = input.toLowerCase();

  if (encode) {
    // Encoding: Convert letters to their Polybius square equivalents
    const encodedChars = input.split('').map((char) => polybiusSquare[char] || char);
    return encodedChars.join('');
  } else {
    
    const numberOfCharacters = input.replace(/\s/g, '').length;
    if (numberOfCharacters % 2 !== 0) {
      return false;
    }
    // Decoding: Convert Polybius square numbers back to letters, handling 'i/j'
    const decodedMessage = input
      .split(' ')
      .map((word) =>
        word
          .match(/(42)|\d{2}/g)
          .map((char) => {
            if (char === '42') {
              return '(i/j)';
            }
            return reversePolybiusSquare[char] || char;
          })
          .join('')
      )
      .join(' ');

    return decodedMessage;
  }
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
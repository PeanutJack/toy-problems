// bull = exact match, cow = contains in different location
// may contain duplicates (assuming for now that 332 > 223 is 0A2C (the three in the guess can only be used once))
// secret and guess will be same length

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let secretDigits = Array(10).fill(0);
  let guessDigits = Array(10).fill(0);
  let results = [0, 0];
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      results[0]++;
      secret = secret.substring(0, i) + secret.substring(i + 1);
      guess = guess.substring(0, i) + guess.substring(i + 1);
      i--;
    } else {
      secretDigits[secret[i]] ? secretDigits[secret[i]]++ : secretDigits[secret[i]] = 1;
      guessDigits[guess[i]] ? guessDigits[guess[i]]++ : guessDigits[guess[i]] = 1;
    }
  }
  for (let j = 0; j < secretDigits.length; j++) {
    results[1] += Math.min(guessDigits[j], secretDigits[j]);
  }
  return `${results[0]}A${results[1]}B`;
};

console.log(getHint('0123', '0132'));
console.log(getHint('1807', '7810'));
console.log(getHint('1123', '0111'));
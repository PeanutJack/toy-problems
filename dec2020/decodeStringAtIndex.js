// input: string and index of character from decoded string to output
// output: character at given index in decoded string

// Instructions: decode string
  // when a number is hit, the string so far is repeated that many times
  // "leet2code3" = leetleetcodeleetleetcodeleetleetcode

// Strategy:
  // Nothing complicated, just decode the string and grab at index
  // AHA, the catch, you can't generate a string as big as it may ask for
  // instead of making the string, I need to figure out how to know what will be at K probably using division
  // alternatively, go ahead and make the string up until it gets longer than K
    // that didn't work when K was 100 million, I can't make a 100 million length string
  // can I collect what characters are at what multiples?
    // for leet2code3
    // e is at 2, 3, 6, 7, 12, and all of those + multiples of 12
    // do I do some division on k?
    // l at 1, e at 2, e at 3, t at 4, then I hit a 2
    // for all of them, I add the current length to each and add to record
    // assuming I store this in arrays, I would still have every number 1 - 100 mil stored, not feasible
    // There has to be a way to math this out
    // do I modulo K in reverse order of the numbers??
  // increment a number to get the length of what the decoded string would be
    // divide

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
  let decLength = 0;
  let i = 0;
  while (decLength < K) {
    S[i] < 10 ? decLength *= S[i] : decLength++;
    i++;
  }
  while (decLength >= K) {
    i--;
    if (S[i] < 10) {
      decLength /= S[i];
      K = K % decLength || decLength;
    } else {
      if (decLength === K) return S[i];
      decLength--;
    }
  }
};

console.log(decodeAtIndex('leet2code3', 10))
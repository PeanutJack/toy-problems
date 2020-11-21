// Given array of digits, how many combinations of numbers can you make with all numbers being less than n

// brute force: recursively generate them all, adding to a count, until a number greater than n is generated

// however, there is a pattern identified in one of the examples
// where l = digits.length, output is l to the power of 1 through n's number of digits all added together minus however many max digit numbers cannot be generated at same length of n

// if n = 1000 (4 digits) and digits = [1,2,3,4] (4 length)
  // output = 4^1 + 4^2 + 4^3 + (however many combos you can make of 4 length resulting in less than 1000) (0)

// question for interviewer: can n be floating?
// text in prompt says "less than given INTEGER n" so I'm assuming no floating
// this just makes getting length of n easier

// another question: is digits sorted? assuming yes, if it doesn't work out I can sort it myself

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  let l = n.toString().length;
  let counter = 1;
  let output = 0;
  while (counter < l) {
    output += digits.length ** counter;
    counter++;
  }
  let helper = function(combo) {
    if (combo.length === l && Number(combo.join('')) <= n) return output++;
    if (combo.length === l) return null;
    for (let i = 0; i < digits.length; i++) {
      helper(combo.concat([digits[i]]));
    }
  }
  helper([]);
  return output;
};

// console.log(atMostNGivenDigitSet([1,2,3,4], 200));

console.log(atMostNGivenDigitSet([5,7,8], 59));

// Figures, I had to use the bruteforce for some of it and that cause time limit to be exceeded
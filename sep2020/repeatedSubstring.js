/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // return true if string can be constructed ENTIRELY of a repeated substring
  // I believe this means that an odd length string will never be true
    // ^ this is wrong because 3 x 3
  // check all substrings of prime number lengths where the prime numbers are evenly divisible by the length
    // 12 length -> check 2x6 and 3x4, but I also need to check if it's 6x2 which 6 is not prime, same of 4x3
    // so not prime factorization, but just regular factorization?
  // find factors of the string length, can stop checking at length / 2
  let factors = [];
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length  % i === 0) factors.push([i, s.length / i]);
  }
  for (let i = 0; i < factors.length; i++) {
    if (s === s.slice(0, factors[i][0]).repeat(factors[i][1])) {
      return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('abcabcabcabc'));
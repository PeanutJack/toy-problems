// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let storage = {};
  let output = 0;
  let addedOdd = false;
  // count up all characters
  for (let i = 0; i < s.length; i++) {
    if (storage[s[i]]) {
      storage[s[i]]++;
    } else {
      storage[s[i]] = 1;
    }
  }
  for (var key in storage) {
    // add up totals of all even counts
    if (storage[key] % 2 === 0) {
      output += storage[key];
    } else if (!addedOdd) {
      // add 1 if there is at least 1 odd
      output += storage[key];
      addedOdd = true;
    } else {
      // add counts of odds - 1
      output += storage[key] - 1;
    }
  }
  return output;
};

console.log(longestPalindrome('abccccdd')); // 7
// input: string
// output: array of copies of the string split via array into palindromes

// Strategy:
  // Slow but technically works :
    // create palindrome checker
    // create all possible partitions of string
    // run them through palindrome checker and push to output if all palindromes
  // Better :
    // loop x times, up to string length
      // Use the first x characters, is it a palindrome?
        // if so, recurse on the remaining of the string
          // if no string remains, add current partition cluster to overall output
        // if not, do nothing

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let output = [];
  let part = [];
  let palinCheck = function(palin) {
    for (let i = 0; i < palin.length / 2; i++) {
      if (palin[i] !== palin[palin.length - 1 - i]) return false;
    }
    return true;
  };
  let partBuilder = function(start, end) {
    if (palinCheck(start)) {
      part.push(start);
      if (end === '') output.push(part.slice());
      for (let i = 1; i <= end.length; i++) {
        partBuilder(end.slice(0, i), end.slice(i));
      }
      part.pop();
    }
  };
  for (let x = 1; x <= s.length; x++) {
    partBuilder(s.slice(0, x), s.slice(x));
  }
  return output;
};

console.log(partition('aab'))




// The below code passed, but was significantly below the curve in space and time complexity
  // Maybe it's bad because I'm creating so many copies of the string with the .slice() taking both time and space
/*
var partition = function(s) {
  let output = [];
  let part = [];
  let palinCheck = function(palin) {
    for (let i = 0; i < palin.length / 2; i++) {
      if (palin[i] !== palin[palin.length - 1 - i]) return false;
    }
    return true;
  };
  let partBuilder = function(start, end) {
    if (palinCheck(start)) {
      part.push(start);
      if (end === '') output.push(part.slice());
      for (let i = 1; i <= end.length; i++) {
        partBuilder(end.slice(0, i), end.slice(i));
      }
      part.pop();
    }
  };
  for (let x = 1; x <= s.length; x++) {
    partBuilder(s.slice(0, x), s.slice(x));
  }
  return output;
};
*/
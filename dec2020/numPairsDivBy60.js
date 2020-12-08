// input: array of song durations (i.e. [30,20,150,100,40])
// output: number of pairs that when combined are divisible by 60, (30 + 150, 20 + 100, 20 + 40), total 3

// Strategy:
  // First thought: brute force seems super simple
    // iterate over all possible combinations, incrementing count if it's divisible by 60
  // Not sure how this could be made any faster
  // Typed that out, and it was "accepted" but there were clearly much faster solutions
  // I'm already not doing any redundant checks, but the time complexity is O(n^2)
  // Maybe it's just eliminating when numbers are duplicated or something?
  // Other strat:
    // go over once to add all of them to an array based on the remainder
    // go over the array of remainders multiplying the current number by it's counterpart
    // Does this work? Might as well try

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let rems = Array(60).fill(0);
  time.forEach(song => rems[song % 60]++);
  let count = ((rems[0] * (rems[0] - 1)) / 2);
  for (let i = 1; i < 30; i++) {
    count += rems[i] * rems[60 - i];
  }
  console.log(rems);
  return count + ((rems[30] * (rems[30] - 1)) / 2);
};

console.log(numPairsDivisibleBy60([418,204,77,278,239,457,284,263,372,279,476,416,360,18]));

// for items with remainder of 0 or 30:
  // if there is 1, there are 0 pairs
  // 2, 1
  // 3, 3
  // 4, 6
  // 5, 10

// Time complexity is something like O(n + 60), but the +60 doesn't matter very much at all
// However, I have seen other solutions that calculated how many to add to the count during the n iteration, which removes the extra 60 at the end
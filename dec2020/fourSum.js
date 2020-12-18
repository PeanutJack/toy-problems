// input: 4 equal length arrays of integers
// output: how many combinations of 1 number from each can total 0

// basic strat: try them all
  // too slow (n ^ 4)
// other ideas:
  // If there were only 2, then I can just look for the complements
  // If I sort them then I can have 4 pointers keeping track of how far in each one
    // Try moving one forward
      // if I go past the goal (0) then try moving a different one forward?
      // if none of them can hit goal, then move whichever one went over least????
    // no no no
  // making two arrays of sums (A + B and C + D combos) would be n^2 operation
  // instead of arrays, those could be objects for easier complement lookup

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let output = 0;
  let arrAB = [];
  let objCD = {};
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      arrAB.push(A[i] + B[j]);
      let sum = -(C[i] + D[j]);
      objCD[sum] ? objCD[sum]++ : objCD[sum] = 1;
    }
  }
  arrAB.forEach(sum => objCD[sum] ? output += objCD[sum] : null);
  return output;
};
// Can the input array be split into two sub-arrays where the sum of both sub-arrays is equal?

// Questions:
  // Is the input sorted? No
  // Do the subarrays have to be contiguous of the original array? No
    // [1,5,11,5] => [1,5,5], [11] works, 11 was in the middle of the 5s
  // Negative numbers? 0?
    // Numbers are between 1-100
  // Do the two subarrays have to together contain all elements of the original array?
    // I believe so because the prompt says "partitioned" into subarrays

// How do I solve it?
  // Brute force of trying every possible split seems WAY too long
  // Add alternating numbers to sub arrays depending on their value?
    // Maybe? But I would need some weird start
    // I don't think so because sometimes the smallest and second smallest need to go together, and sometimes the smallest and the largest need to go together
  // Eliminate pairs by assuming they go into separate arrays?
    // No because the pair of 5's in example both go into the same array
  // Start with largest in one --- no, largest and second largest can still go together
  // Maybe a mixture of brute force and the smart placement?

// The greatest imbalance possible would be the largest number in one array, and everything else in the other
  // if the "everything else" is smaller, then the answer is false

// Put largest in one, add sum of everything else
  // if (everything else) is smaller, return false
  // if equal, return true
  // if greater, find difference divided by two and look for it inside of everything else
    // if the exact number isn't in everything else, see if there is some combo to add to it
      // try two numbers, then three, etc
      // checking all these combos seems slow, but doable

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  // If the sum of the original array is odd, the answer is false
  if (nums.reduce((a, c) => a + c) % 2 === 1) return false;
  nums.sort((a, b) => a - b);
  let largest = nums.pop();
  let allElse = nums.reduce((a, c) => a + c);
  if (allElse < largest) {
    return false;
  } else if (allElse === largest) {
    return true;
  } else {
    let diff = (allElse - largest) / 2;
    if (nums.includes(diff)) return true;
    // Here would be the code to try combinations of numbers from everything else to get the difference
  }
  return false;
};

console.log(canPartition([1,5,11,5])); // true
console.log(canPartition([2,2,3,5])); // false
console.log(canPartition([1,2,3,4,5,6,7])); // true
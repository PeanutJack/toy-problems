// input: array of integers
// output: boolean if an increasing triple exists in given array
  // increasing meaning that only going left to right, there are three numbers that are increasing
// constraints: O(n) time and 0(1) space if possible
// edge cases: array of less than 3 numbers => false

// Clarity:
  // [1,7,2,3] does 1,2,3 count or does it need to be sequential?
  // strictly greater or is equal okay?

// Strategy:
  // Straightforward first: O(n^3) time, O(1) space (passed leetcode tests in 144ms)
    // Iterate over array
      // iterate over remaining portion of array
        // if the second is greater than first, iterate over remaining
          // if third is greater than second, return true
    // return false if no triplet found

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] > nums[i]) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[k] > nums[j]) return true;
        }
      }
    }
  }
  return false;
};

// Improved strategy: Aiming for O(n) time, ran leetcode tests in 84ms
  // Can I do a pass that removes all numbers that are lower than previous?
    // No, because [2,1,5,0,4,6] (0,4,6) is the answer and 0 would be removed by this pass
      // Oh hey, for that example (2,5,6) also works or (2,4,6) or (1,5,6)
  // Keep track of biggest number during traversal
    // if a bigger number is found, move it down to second place
    // if a number even bigger is found, return true
    // Does this work? [5,0,4,6] no it wouldn't, I'd only find 5 and 6
  // Keep track of smallest number during traversal [5,4,3,6,7]
    // everything to the left of the smallest number is bigger and unusable?
    // if a smaller number is found, reset??
  // Keep track of two smallest numbers in order, let's walk through [2,1,5,0,4,6]
    // At index 0, smallest is 2
    // Index 1, smallest is 1, no second smallest yet
    // index 2, smallest is 1, second is 5
    // index 3, smallest is 0, second is still 5? // this part confuses
    // index 4, smallest is 0, second is 4
    // index 5, smallest is 0, second is 4, bigger number found, return true
  // Reduce to [2,1,5,0,6]
    // index 3, small is 0, second is 5
    // index 4, small is 0, second is 5, bigger number found, return true???
    // How can I return true? BECAUSE 5 only got to the spot of second because there was a number smaller to it's left

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let small = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
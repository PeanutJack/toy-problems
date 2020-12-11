// input: sorted array of integers
// output: length of nums after duplicates more than 2 are removed
// constraints: O(1) space
  // Must make the adjustments to given array, not a new one

// Strategy:
  // Take it slow to keep the O(1) space constraint
  // iterate through
    // if current is the same number as previous 2, splice item out of array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]));

// Array.splice can be slow, but it passed the test with decent speed
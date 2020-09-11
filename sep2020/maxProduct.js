// find the subarray with the largest product and return that product

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let output = nums[0];
  let curr = nums[0];
  let prev = nums[0];
  // I'm pretty sure I've done this with sum instead of product
  // Then, I could just keep track of previous best while continuing to look if there is a new best later
  // Might not exactly work here because sometimes double negatives is bigger? or maybe it works
  // the strat for products:
    // even number of negatives will include all numbers
    // 0 will bisect the array, since including it always reduces product to 0
    // odd number of negatives means you check both start from left and right
      // basically checking the biggest sub arrays that have an even number of negatives

  // I think this generates all permutations, which probably not needed
  // definitely not, time limit exceeded on leetcode
  // so what can I eliminate?
    // with sums, you can eliminate entire portions of the array if it's result is negative
    // can't do that with products, because neg * neg = big pos
    // I might be able to eliminate the slice + reduce by keep tracking of previous totals
  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      // output = Math.max(output, nums.slice(start, end + 1).reduce((a, c) => a * c));
      if (start === end) {
        curr = nums[start];
      } else {
        curr = prev * nums[end];
      }
      output = Math.max(output, curr);
      prev = curr;
    }
  }
  return output;
};

console.log(maxProduct([2,3,-2,4]));
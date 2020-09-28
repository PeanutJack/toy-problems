// start with first number, increment count as you iterate over the remaining array
// break and don't increment if product goes over k
// O(n^2) solution I'm thinking

// I can take advantage of there being no negative numbers
// Adding a number will NEVER decrease the product
// can I do something like remove the first number as I go along, inching across the array like a catterpillar?
  // not sure how I would keep track of number of subarrays to add to count while doing this
// good thing there are no 0s

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let output = 0;
  let start = 0;
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    // increment product
    product = product * nums[i];
    // if product is now too big, take off the first number of current subarray and check again until start and end points meet or product less than k
    while (product >= k && start < i) {
      product = product / nums[start];
      start++;
    }
    // I am left with all subarrays that end at i, the number of subarrays is equal to the length
    // [10,5,2] there are 3 subarrays ending in 2, same as length
    // [10,5,2], [5,2], and [2]
    // don't need to worry about [10,5] because that was checked while I was looking at 5 as endpoint
    if (product < k) output += i - start + 1;
  }
  return output;
};

console.log(numSubarrayProductLessThanK([10,5,2,6], 100));
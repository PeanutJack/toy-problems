/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  // iterate using two loops, but second loop starts at i + 1 and ends at i + k
  for (let i = 0; i < nums.length; i++) {
    let stop = i + k;
    for (let j = i + 1; j <= stop; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));
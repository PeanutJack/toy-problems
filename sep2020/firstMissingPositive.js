
// list of nums, identify first number in sequence that is missing
// difficult test case: [1,3,4,6,7,2,-3,0] => 5
// input array can contain negative numbers and 0
  // can't depend on length of array then

// should be doable in O(n) time and constant space

// if you ignore time complexity, you just sort it then return when next number is not what you expected
// if you ignore space complexity you can put numbers from original array into new array where nums[i] = i, then iterate the new array looking for first missing

// iterate once to swap current number with whatever is at it's index
// iterate again to find the first non-matching number

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    console.log(nums, curr, i)
    // if current number is positive and not at correct position
    if (curr < nums.length && curr > 0 && nums[curr - 1] !== curr) {
      // move number at desired position to current spot
      nums[i] = nums[curr - 1];
      // put current number at correct position
      nums[curr - 1] = curr;
      // keep on current index and go again
      i--;
    }
  }
  let miss = 0;
  while (true) {
    if (nums[miss] !== miss + 1) return miss + 1;
    miss++;
  }
  return nums;
  // Below is non-space compliant solution
  // let newArr = [];
  // for (let i = 0; i < nums.length; i++) {
  //   newArr[nums[i]] = true;
  // }
  // let miss = 1;
  // while (true) {
  //   if (!newArr[miss]) return miss;
  //   miss++;
  // }
};

console.log(firstMissingPositive([1,3,4,6,7,2,-3,0]));
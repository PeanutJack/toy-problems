// all houses have non-negative money
// return max money you can get
// cannot rob adjacent houses
// first thought is just check all odd vs all even index houses
  // this fails when you get 11 from [1,9,1,1,9,1]
// second thought is take either current index or next index, whichever is bigger
  // [3,9,9,1] would pick 9 first, then 1
// seems you can't know which one is right unless you know the next choice, which requires the next, etc etc
// performing all permutations might be best
  // still sort of a challenge by itself
  // I think I always want one of the first two houses
  // if I also try current/next index comparison from reverse, it would fix my 3991 example
    // fails given example where big number is exact center, surrounded by second biggest numbers

// correct idea (looked up):
  // "if you need to know the future, look to the past" - idk some random quote I thought of
  // rather: instead of trying to know the all possible futures before they happen, wait until the future comes then look at the past while continuing to guide you
  // if the house you're thinking of adding is better than adding the previous house, add it instead of the previous house combo

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 2) return nums[0] || 0;
  let arr = [nums[0], Math.max(nums[1], nums[0])];
  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 1], nums[i] + arr[i - 2]);
  }
  return arr[arr.length - 1];
};

console.log(rob([1,9,1,1,9,1])); // 18
console.log(rob([3,9,9,1])); // 12
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([1,2,3,1])); // 4
console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142]));
console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]));


  // let rNums = nums.slice().reverse();
  // let output = 0;
  // let rOutput = 0;
  // for (let i = 0; i < nums.length; i += 2) {
  //   if (nums[i + 1] > nums[i]) {
  //     i++;
  //   }
  //   output += nums[i];
  // }
  // for (let i = 0; i < rNums.length; i += 2) {
  //   if (rNums[i + 1] > rNums[i]) {
  //     i++;
  //   }
  //   rOutput += rNums[i];
  // }
  // return Math.max(output, rOutput);

  // need to make a recursive function that tries 0248, 0249, 0257, 0259
    // TOO SLOW
  // let perms = [];
  // let output = 0;
  // let count = 0;
  // var recurse = function(prevVal, i) {
  //   // if (i >= nums.length) return perms.push(prevVal);
  //   if (i >= nums.length) {
  //     count++;
  //     return output = Math.max(output, prevVal);
  //   }
  //   recurse(prevVal + nums[i], i + 2);
  //   if (i + 1 < nums.length) recurse(prevVal + nums[i + 1], i + 3);
  // }
  // recurse(0, 0);
  // return [output, count];
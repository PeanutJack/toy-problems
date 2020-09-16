/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let output = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      output = Math.max(nums[i] ^ nums[j], output);
      // output.push(nums[i] ^ nums[j]);
    }
    // output.push(nums[i].toString(2));
  }
  return output;
};

let test = [3, 10, 5, 25, 2, 8];
console.log(findMaximumXOR(test));
console.log(5 ^ 3)
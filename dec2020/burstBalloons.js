// input: array representing coins (in balloons)
// output: maximum number of coins you can get by carefully popping balloons
// note: taking a balloon of coins gets you equal to it multiplied by surrounding balloons

// Strategy:
  // Something I noticed about the given example makes me wonder if this is true:
    // Hit all the smallest ones in order unless they are on the edges
    // Ex: [2,8,1,2,9,2] what is best?
      // [2,8,2,9,2] => 16
      // [2,8,9,2] => 144 + 16
      // [2,9,2] => 144 + 144 + 16
      // [2,2] => 36 + 144 + 144 + 16
      // +4, +2 => 346 total? is there a better way? bad edge case maybe? let's just try

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 0) return 0;
  // going to go for super long time complexity
  let output = 0;
  let max = -Infinity;
  let maxInd = 0;
  while(nums.length > 2) {
    // iterate over nums except for edges to find max adjacent product
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i - 1] * nums[i + 1] > max) {
        max = nums[i - 1] * nums[i + 1];
        maxInd = i;
      }
    }
    console.log(nums, output)
    output += nums[maxInd - 1] * nums[maxInd] * nums[maxInd + 1];
    nums.splice(maxInd, 1);
    max = -Infinity;
    maxInd = 0;
  }
  output += nums[0] * nums[1];
  output += Math.max(nums[0], nums[1]);
  return output;
};

// console.log(maxCoins([9,76,64,21,97,60]));
// this does not pass because when there are 4 items left [9,76,97,60] the optimal selection is 97
  // I don't know how to come to that conclusion from a blanket statement
  // I KNOW that you have to take the edges last
  // It's not "the lower/higher edge"
  // it MIGHT be some special calculations when there are 4 things left, but my blanket of taking the smallest might also be wrong for other tests

console.log(maxCoins([35,16,83,87,84,59,48,41,20])); // 1611332
// changed algorithm to instead of picking min, it picks whichever has greatest product of adjacent numbers
  // passed previous test, but now fails this one
  // REALLY not sure where this one fails, I'm only off by about 22k out of 1.6M
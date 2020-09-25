// non-negative integers (no decimals)

// split each number into digits
  // or, multiply the smaller one by 10 until they are same length
  // then just compare the numbers after that
// sort by priority of digits

// THIS WHOLE THING IS WAY MORE COMPLICATED THAN NEEDED
// the easy way to find if you get a bigger number sorted one way compared to another is to just try it

// /**
//  * @param {number[]} nums
//  * @return {string}
//  */
// var largestNumber = function(nums) {
//   if (nums.reduce((a, c) => a + c) === 0) return '0';
//   nums.sort((a, b) => {
//     let orig = [a, b];
//     let diff = String(a).length - String(b).length;
//     // if diff is positive, a is longer
//     let longer = diff > 0 ? a : b;
//     let prio = diff;
//     while (diff > 0) {
//       a = Math.floor(a / 10);
//       diff--;
//     }
//     while (diff < 0) {
//       b = Math.floor(b / 10);
//       diff++;
//     }
//     if (b === a) {
//       console.log(orig, a, b, longer, prio)
//       while (a >= 10) a = Math.floor(a / 10);
//       if (prio > 0) return a - longer % 10 || prio;
//       if (prio < 0) return longer % 10 - a || prio;
//     }
// need to compare lsd of one to msd of both
  // if lsd of longer number is bigger than msd, it goes first
  // otherwise, shorter number goes first
//     return b - a;
//   });
//   return nums.join('');
// };

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (nums.reduce((a, c) => a + c) === 0) return '0';
  // nums.sort((a, b) => {
  //   return Number(`${b}${a}`) - Number(`${a}${b}`);
  // });
  nums.sort((a, b) => +(''+b+a) - +(''+a+b));
  return nums.join('');
};



console.log(largestNumber([30, 3, 34, 5, 9]));
console.log(largestNumber([10,2]));
console.log(largestNumber([121,12]));
console.log(largestNumber([20, 1]));
console.log(largestNumber([824,938,1399,5607,6973,5703,9609,4398,8247]));

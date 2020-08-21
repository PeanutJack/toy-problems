/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  // the first one works when running with Node, but not in leetcode because of inconsistencies with 0
  // return A.sort((p, c) => p % 2 > c % 2);
  return A.sort((p, c) => p % 2 > c % 2 ? 1 : -1);
};

var test = Array(9).fill(0).map((int, index) => index);
console.log(sortArrayByParity(test));

var test2 = [3, 1, 2, 4];
console.log(sortArrayByParity(test2), test2);
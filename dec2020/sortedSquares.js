// input: sorted Array of integers (can be negative)
// output: sorted array of the squares of all input integers
// the catch: negatives will move to a new spot

// Strategy:
  // Could just literally map is squaring everything, then run .sort
    // This actually works: return nums.map(num => num * num).sort((a, b) => a - b);
  // Other ideas are reducing time by sorting as you go
    // One way of doing this would be start at 0, then move either left or right depending on which one squares bigger

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let squared = nums.map(num => num * num);
  // find the index of the lowest square number
  let min = Infinity;
  let minInd = 0
  for (let i = 0; i < squared.length; i++) {
    if (squared[i] < min) {
      min = squared[i];
      minInd = i;
    }
  }
  let output = [min];
  let leftInd = minInd - 1;
  let rightInd = minInd + 1;
  // starting from the lowest number (which is in the middle) add either left or right one, whichever is smaller
  while (squared[leftInd] !== undefined || squared[rightInd] !== undefined) {
    if (squared[leftInd] === undefined || squared[rightInd] < squared[leftInd]) {
      output.push(squared[rightInd]);
      rightInd++;
    } else {
      output.push(squared[leftInd]);
      leftInd--;
    }
  }
  return output;
};

// Time complexity of original solution: n for map + n log n for sort
  // O(n log n)
// Time complexity of new solution: n for map + n to find min + n to gather numbers in proper order
  // O(n)

// But leetcode had them run at the same speed, whatever
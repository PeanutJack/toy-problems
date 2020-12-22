// input: array of integers
// output: it's complicated

// Iterate through the array, either adding or subtracting K to each number
// This should be done in such a way that the difference between the new largest number in the array and the new smallest number in the array, is as small as possible
// return this difference

// This solution is almost directly pasted from a googled solution

var smallestRangeII = function(A, K) {
  A.sort((a, b) => a - b);
  let min = A[0] + K;
  let max = A[A.length - 1] - K;
  let diff = A[A.length - 1] - A[0];
  for (let i = 0; i < A.length - 1; i++) {
    let newMin = Math.min(min, A[i + 1] - K);
    let newMax = Math.max(max, A[i] + K);
    let newDiff = newMax - newMin;
    if (newDiff < diff) {
      console.log(diff, A[i], A[i + 1], newMin, newMax, i);
      diff = newDiff
    }
  }
  return diff;
};

console.log(smallestRangeII([8038,9111,5458,8483,5052,9161,8368,2094,8366,9164,53,7222,9284,5059,4375,2667,2243,5329,3111,5678,5958,815,6841,1377,2752,8569,1483,9191,4675,6230,1169,9833,5366,502,1591,5113,2706,8515,3710,7272,1596,5114,3620,2911,8378,8012,4586,9610,8361,1646,2025,1323,5176,1832,7321,1900,1926,5518,8801,679,3368,2086,7486,575,9221,2993,421,1202,1845,9767,4533,1505,820,967,2811,5603,574,6920,5493,9490,9303,4648,281,2947,4117,2848,7395,930,1023,1439,8045,5161,2315,5705,7596,5854,1835,6591,2553,8628], 4643));


// Still don't really know why the stuff below here didn't work

// Strategy:
  // find min and max of array to get the midpoint
  // iterate over array, either adding or subtracting K to get it closer to midpoint
    // while doing this, keep track of min and max number I get
  // return difference of new min and max
  // Not quite, because

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var smallestRangeII = function(A, K) {
//   let oldMin = Math.min(...A);
//   let oldMax = Math.max(...A);
//   let mid = (oldMax - oldMin) / 2 + oldMin;
//   let B = A.map(num => num < mid ? num + K : num - K);
//   A.forEach(num => num === mid ? B.push(num + K) : null);
//   return Math.min(Math.max(...B) - Math.min(...B), oldMax - oldMin);
// };




// Ignore everything below here, I misunderstood what was being asked for


// Iterate through the array, either adding or subtracting K from them
// After this, find the smallest difference between two numbers
// [0,10] with K = 2
// Add 2 to 0, subtract 2 from 10 to get new array [2,8]
// Return difference of 6
// The other options would have been subtracting from 0 or adding to 10, but that would have resulted in a larger difference

// Strategy:
  // Go over once adjusting numbers in pairs (0+1, 2+3, 4+5)
  // Go over again adjusting other pairs (1+2, 3+4, 5+6)
  // Iterate over both new arrays, returning smallest range
  // Alternative:
    // Don't make any actually adjustments, don't use new space
    // Look at possibilities of adjusting current with neighbors
      // I only need to compare to future neighbor, because past neighbor compare with current
    // [4,5,7,10] K = 2
      // 4 + 5 compare, difference is less than K, so keep that in mind
      // 5 + 7 compare, difference is K, so that could be smallest
      // 7 + 10 compare, add K to 7, subtract from 10, 9->8, difference is 1

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// var smallestRangeII = function(A, K) {
//   if (A.length === 1) return 0; // maybe + K, not sure what they want here
//   let minDiff = Infinity;
//   for (let i = 0; i < A.length - 1; i++) {
//     if (Math.abs(A[i] - A[i + 1]) <= K) {
//       minDiff = Math.min(Math.abs(A[i] - A[i + 1]), minDiff);
//     } else if (A[i] < A[i + 1]) {
//       minDiff = Math.min((A[i + 1] - K) - (A[i] + K), minDiff);
//     } else {
//       minDiff = Math.min((A[i] + K) - (A[i + 1] - K), minDiff);
//     }
//   }
//   return minDiff;
// };
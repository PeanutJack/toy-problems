// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
//              received 3, 0, 6, 1, 5 citations respectively.
//              Since the researcher has 3 papers with at least 3 citations each and the remaining
//              two with no more than 3 citations each, her h-index is 3.

// basically 50% or more of numbers in array are equal to or greater than a number

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  var output = null;
  citations.forEach((item, index) => {
    if (index + 1 <= item) {
      output = index + 1;
    }
  });
  return output;
};

var test = [3,0,6,1,5];
console.log(hIndex(test)); // 3

var test2 = [10, 8, 5, 4, 3];
console.log(hIndex(test2)); // 4

var test2 = [10, 8, 5, 3, 3];
console.log(hIndex(test2)); // 3

var test3 = [100];
console.log(hIndex(test3)); // 1??
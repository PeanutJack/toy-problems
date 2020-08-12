// Pascal's triangle is where each number is the sum of the two numbers above it, starting with 1
//    1
//   1 1
//  1 2 1
// 1 3 3 1
//1 4 6 4 1

// Given index k (<= 33), return the row at the given index
// ex: input 3, output [1, 3, 3, 1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // first thought is iterate through creating each row
  // optimization thought is it's symetrical so only do first half (rounded up)
  // if odd length, then next row is complete mirror
  // if even length, next row is mirror, but last number is x2 and inserted mid
  // each row is index + 1 length
  // first and last numbers are always 1
  var output = [1];
  for (let i = 1; i <= rowIndex; i++) {
    var nextArr = [];
    var first = 0;
    var end = i;
    while (first <= end) {
      var temp = output[first] + (output[first - 1] || 0);
      nextArr[first] = temp;
      nextArr[end] = temp;
      first++;
      end--;
    }
    output = nextArr;
  }
  return output;
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
console.log(getRow(6));
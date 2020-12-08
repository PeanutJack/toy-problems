// input: n
// output: n x n matrix filled with integers in a spiral starting from 1

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = Array(n).fill(0).map(() => []);
  n--;
  let curr = 1;
  let offset = 0;
  let fill = function() {
    // fill top row
    for (let i = offset; i < n - offset; i++) {
      matrix[offset][i] = curr++;
    }
    // fill right column
    for (let i = offset; i < n - offset; i++) {
      matrix[i][n - offset] = curr++;
    }
    // fill bottom row backwards
    for (let i = n - offset; i > offset; i--) {
      matrix[n - offset][i] = curr++;
    }
    // fill left side from bottom
    for (let i = n - offset; i > offset; i--) {
      matrix[i][offset] = curr++;
    }
  }
  // do the spiral fill enough times
  while (offset + 1 <= (n + 1) / 2) {
    fill(offset);
    offset++;
  }
  // if n is even now (since I subtracted 1 earlier) then there is one empty square left
  if (n % 2 === 0) matrix[offset][offset] = curr;
  return matrix;
};

console.log(generateMatrix(4))
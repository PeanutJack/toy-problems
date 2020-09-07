// all squares are either 1 or 0
// matrixes are the same size and square
// no rotations allowed

// prior to attempts, can count up total of each matrix, max possible answer is the lower of the two, and if we hit it we could break loop immediately and return it

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  // a row or column of all 0s can be effectively removed/ignored
  // may trim each one, and try to find where the smaller one best fits inside the larger one
  // what if they trim to be 2x3 and 3x2?, looks like trimming may be useless
  let trimMatrix = function(matrix) {
    // remove all empty rows
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].reduce((a, c) => a + c) === 0) {
        matrix.splice(i, 1);
        i--;
      }
    }
    let changed = true;
    while (changed) {
      changed = false;
      // remove empty right column
      if (matrix.reduce(((acc, row) => acc + row[row.length - 1]), 0) === 0) {
        matrix.forEach((row) => row.pop());
        changed = true;
      }
      // remove empty left column
      if (matrix.reduce(((acc, row) => acc + row[0]), 0) === 0) {
        matrix.forEach((row) => row.shift());
        changed = true;
      }
    }
    return matrix;
  }
  // really long way (just a thought) is to try all permutations shifting up/down by up to height - 1 and shifting left/right by up to width - 1
  // if I shift the one I'm comparing too down 1, that's the same as shifting the first one up 1 right?
  // probably better to shift up/left by using .pop()
  let totalMatrix = function(matrixA, matrixB) {
    let count = 0;
    for (let i = 0; i < matrixA.length; i++) {
      for (let j = 0; j < matrixA[i].length; j++) {
        if (matrixA[i][j] && matrixB[i][j]) {
          count++;
        }
      }
    }
    return count;
  }
  let max = totalMatrix(A, B);
  // current pattern only checks straight movements like a +
  // thinking about trying to go for the following checks
  // - - | - -
  // - - | - -
  // - - | - -
  // - - | - -
  // - - | - -
  let perms = 0;
  for (let vertShift = 0; vertShift < A.length; vertShift++) {
    let upA = A.slice(vertShift);
    let downA = A.slice(0, A.length - vertShift);
    for (let add = 0; add < vertShift; add++) downA.unshift([]);
    for (let horShift = 0; horShift < A.length; horShift++) {
      let leftA1 = upA.map((row) => row.slice(horShift));
      let leftA2 = downA.map((row) => row.slice(horShift));
      // console.log(leftA);
      let rightA1 = upA.map((row) => row.slice(0, A.length - horShift));
      rightA1.forEach((row) => {
        for (let add = 0; add < horShift; add++) row.unshift(0);
      });
      let rightA2 = downA.map((row) => row.slice(0, A.length - horShift));
      rightA2.forEach((row) => {
        for (let add = 0; add < horShift; add++) row.unshift(0);
      });
      perms += 4;
      let temp = max;
      max = Math.max(max, totalMatrix(leftA1, B), totalMatrix(leftA2, B), totalMatrix(rightA1, B), totalMatrix(rightA2, B));
      console.log(max, vertShift, horShift, totalMatrix(leftA1, B), totalMatrix(leftA2, B), totalMatrix(rightA1, B), totalMatrix(rightA2, B));
    }
    // console.log(upA, downA);
    // console.log(totalMatrix(upA, B), totalMatrix(downA, B))
    // console.log(rightA);
    // max = Math.max(max, totalMatrix(upA, B), totalMatrix(downA, B), totalMatrix(leftA, B), totalMatrix(rightA, B));
  }
  console.log(perms);
  return max;
};

let testA1 = [[1, 1, 0],
[0, 1, 0],
[0, 1, 0]];
let testB1 = [[0, 0, 0], [0, 1, 1], [0, 0, 1]];
let testA2 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
let testA3 = [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 1, 1, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 0]]
// console.log(largestOverlap(testA1, testB1));
// console.log(largestOverlap(test2));
// console.log(largestOverlap(test3));

let testFull1 = [[1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
[0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0],
[1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0],
[1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1],
[0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0],
[0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1],
[1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
[0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
[0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0],
[0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0],
[0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0],
[1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1],
[0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0],
[1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
[0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],
[0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0],
[1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
[0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1],
[0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0],
[1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1],
[1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1],
[1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
[1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1],
[1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
[0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0],
[1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0]];

let testFull2 = [[0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0],
[0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1],
[0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1],
[0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0],
[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],
[0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0],
[1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1],
[0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0],
[0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0],
[0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
[0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0],
[0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0],
[0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0],
[0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0],
[0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
[0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0],
[0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1],
[1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0],
[0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0],
[0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0],
[0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]];

console.log(largestOverlap(testFull1, testFull2));
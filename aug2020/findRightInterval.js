/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  let output = [];
  for (let i = 0; i < intervals.length; i++) {
    // for each i, check if there is an interval that has a bigger 'start' than i's 'end'
    let right = -1;
    let diff = Infinity;
    for (let j = 0; j < intervals.length; j++) {
      if (intervals[j][0] >= intervals[i][1] && intervals[j][0] < diff) {
        diff = intervals[j][0];
        right = j;
      }
    }
    output.push(right);
  }
  return output;
};

let test1 = [[1,2]];
console.log(findRightInterval(test1));
let test2 = [[3, 4], [2, 3], [1, 2]];
console.log(findRightInterval(test2));
let test3 = [[1, 4], [2, 3], [3, 4]];
console.log(findRightInterval(test3));
let test4 = [[1,2],[2,3],[0,1],[3,4]];
console.log(findRightInterval(test4));
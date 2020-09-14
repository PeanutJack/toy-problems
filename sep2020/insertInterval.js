// makes more sense to me to call them ranges
// 1-3, 5-8 // insert 3-6 // output 1-8
// while iterating over prev intervals, if end is less than new start or if start is more than new end, it can be skipped

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  let start = false;
  let startVal;
  let end = false;
  let endVal;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) continue; // if we haven't hit new interval start, just go
    if (intervals[i][0] > newInterval[1]) break; // if we passed new interval end, ignore the rest
    if (start === false) {
      start = i;
      startVal = Math.min(intervals[i][0], newInterval[0]);
    }
    end = i + 1;
    endVal = Math.max(intervals[i][1], newInterval[1]);
  }
  if (!start && !end) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
  } else {
    intervals.splice(start, end - start, [startVal, endVal]);
  }
  return intervals;
};

console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
console.log(insert([[1,5]], [6,8]));
console.log(insert([[1,5],[6,8]], [5,6]));
console.log(insert([[0,4],[7,12]], [0,5]));
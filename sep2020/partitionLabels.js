// A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  // find first and last occurences of each letter
  let first = {};
  let last = {};
  for (let i = 0; i < S.length; i++) {
    if (first[S[i]] === undefined) {
      first[S[i]] = i;
    } else {
      last[S[i]] = i;
    }
  }
  // if ranges of two letters overlap, combine them
  let ranges = [];
  for (var key in first) {
    ranges.push([first[key], last[key] || first[key]]);
  }
  let changed = true;
  while (changed) {
    changed = false;
    let newRanges = [];
    for (let j = 0; j < ranges.length; j++) {
      if (ranges[j + 1] === undefined) {
        newRanges.push(ranges[j]);
      } else if (ranges[j][1] > ranges[j + 1][0]) {
        newRanges.push([ranges[j][0], Math.max(ranges[j + 1][1], ranges[j][1])]);
        j++;
        changed = true;
      } else {
        newRanges.push(ranges[j]);
      }
    }
    ranges = newRanges;
  }
  // return lengths of the ranges after repeatedly checking for overlaps
  return ranges.map((range) => range[1] - range[0] + 1);
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
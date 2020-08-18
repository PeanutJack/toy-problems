/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  let output = [];
  var addChar = function(s, prev) {
    let results = [];
    // stop building onto string once the desired length is achieved
    if (s.length === N) {
      return [Number(s)];
    }
    for (let i = 0; i < 10; i++) {
      // only continue building the string if the difference is correct
      if (Math.abs(prev - i) === K) {
        results = results.concat(addChar(s + String(i), i));
      }
    }
    return results;
  };
  // the only time 0 is a valid start is when N = 1
  if (N === 1) output.push(0);
  // loop 1 through 9, the only other valid starts
  for (let i = 1; i < 10; i++) {
    output = output.concat(addChar(String(i), i));
  }
  return output;
};

console.log(numsSameConsecDiff(3, 7));
console.log(numsSameConsecDiff(1, 0));
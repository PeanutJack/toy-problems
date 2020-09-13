// k number of unique numbers from 1-9 add up to n
// return array of all possible combo arrays
// n is never negative or 0, no duplicate combos

// check combos 1,2,3 => 1,2,4 => 1,2,5 etc
  // first/second/... number cannot be greater than the last number of first valid combo

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let stop = 9;
  let combos = [];
  let addNum = function(arr, prev) {
    if (arr.length === k) {
      console.log('combo: ', arr);
      if (arr.reduce((a, c) => a + c) === n) {
        combos.push(arr.slice());
        combos.length === 1 ? stop = prev : null;
        console.log('combo was good');
        return true;
      }
      return false;
    }
    for (let i = prev + 1; i <= stop; i++) {
      arr.push(i);
      addNum(arr, i);
      arr.pop();
    }
  }
  addNum([], 0);
  return combos;
};


// console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
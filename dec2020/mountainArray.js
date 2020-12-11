// input: array of integers
// output: boolean: is it a mountain array
  // mountain means every step is greater than the last until the peak, after the peak every step is less than the last

// Strategy: Single loop iteration
  // start with first number as "prev"
    // if curr is greater (not equal) than prev, and we are still ascending, continue
      // if we stopped ascending, then return false
    // if curr is equal to prev, return false
    // if curr is less than prev, stop ascending then continue
  // if the loop completes without returning false, return true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  // if given nothing, an array less than 3 length, or an array that immediately descends return false
  if (!arr || arr.length < 3 || arr[0] > arr[1]) return false;
  // start with ascending
  let asc = true;
  for (let i = 1; i < arr.length; i++) {
    // if we are ascending, and we have not started descent, then just keep going
    if (arr[i] > arr[i - 1]) {
      if (!asc) return false;
    } else if (arr[i] ===  arr[i - 1]) {
      // if we have a flat spot, it's not a mountain
      return false;
    } else {
      // if it's lower, start descent
      asc = false;
    }
  }
  // if we never descended, return false
  return !asc;
};
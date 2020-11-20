// input: sorted + rotated array of nums (non-unique) and a target num
// output: bool if target is in array

// The obvious solution: indexOf or iterate through the array
  // This would be an O(n) solution, but surely there must be better or this wouldn't be a problem

// Faster solution would be to use binary search
  // the only question is how to do that considering it's rotated
  // even just finding the spot where the start and end should be would be an O(n) process
  // I think I have to do two binary searchs somehow
    // maybe one on the array as it is, and the other on the array rotated halfway
    // let's give it a shot


// [2,5,6,0,0,1,2] target 1
// midpoint = 0
// go up from 0, midpoint 1, it's fine

// [2,5,6,0,0,1,2] target 2
// midpoint 0, go up from 0, nothing found, wait no it finds 2, disregard next lines
// so I rotate it to look like [0,1,2,2,5,6,0]
// then I find 2 in the middle
// coincedence? maybe, maybe not

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let binSearch = function(arr, tar) {
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start < end) {
      mid = Math.ceil((end - start) / 2) + start;
      console.log(start, end, mid);
      if (tar < arr[mid]) {
        end = mid - 1;
        // if (arr[end] > arr[mid]) return false;
      } else if (tar > arr[mid]) {
        start = mid + 1;
        // if (arr[start] < arr[mid]) return false;
      } else {
        console.log(start, end, mid);
        return true;
      }
    }
    return false;
  }
  let midpoint = Math.ceil((nums.length - 1) / 2);
  return binSearch(nums, target) || binSearch(nums.slice(midpoint).concat(nums.slice(0, midpoint)), target);
};

console.log(search([2,5,6,0,0,1,2], 3));

console.log(search([2,2,2,0,1], 0));
console.log(search([1,1,1,3,1], 3));

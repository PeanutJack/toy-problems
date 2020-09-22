// must be o(n) time, seems easy enough
// must also be o(1) space, interesting, I normally would consider using an object to store data but that would be o(n) space
// given array is not sorted at all

// find elements that take up more than 1/3rd of the array
  // max 2 items returned

// sort would take too long
// object would take too much memory
// using a set number of variables
  // [2,2,3,3,3,4,4,4] how would I know to ignore 2?
  // [3,3,2,2,4,3,4,4] how would I know 4 is important when I already have 2 2s and 2 3s?
    // 3 is also important, how would I know when to drop 2
// dynamic programming is an extra array, too much space

// I guess technically o(2n) is still o(n), just find the most occurences twice
  // how do I find the singular most often one in o(1) space?

// what if I take out the element, and do indexOf to find the next occurence
  // indexOf worst case take n time, and I would need to do indexOf n times, o(n^2)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  // slow/large solution, does not meet specifications
  let output = [];
  let stor = {};
  for (let i = 0; i < nums.length; i++) {
    stor[nums[i]] ? stor[nums[i]]++ : stor[nums[i]] = 1;
  }
  for (var key in stor) {
    if (stor[key] > nums.length / 3) output.push(key);
  }
  return output;
};

// looked at other answers, just writing it out here to be sure I understand how it works
var majorityElement = function(nums) {
  let maj1;
  let maj2;
  let count1 = 0;
  let count2 = 0;
  nums.forEach((num) => {
    // if one of the maj is undefined and the num is not the other maj, assign it
    if (maj1 === undefined && num !== maj2) return (maj1 = num) && (count1 = 1);
    if (maj2 === undefined && num !== maj1) return (maj2 = num) && (count2 = 1);
    // if num is one of the majs, increase their count
    if (num === maj1) return count1++;
    if (num === maj2) return count2++;
    // if num is not one the majs, and both majs were defined, decrement both counts
    count1--;
    count2--;
    // if that brings them to 0, they have lost majority
      // this works because if 2 elements have more than 1/3rd, there should be less than 1/3rd of 'other' elements
    if (count1 === 0) maj1 = undefined;
    if (count2 === 0) maj2 = undefined;
  });
  // now I know which ones are the majorities, but not how many and if there are enough
  count1 = 0;
  count2 = 0;
  nums.forEach((num) => {
    if (num === maj1) return count1++;
    if (num === maj2) return count2++;
  });
  // now I have the elements and their counts, push to output if sufficient
  let output = [];
  if (count1 > nums.length / 3) output.push(maj1);
  if (count2 > nums.length / 3) output.push(maj2);
  return output;
};

// exactly 2 forEach loops, so o(2n) time, (o(n)), nothing nested
// 4 basic variables declared and 1 array of max lenght 2, should be o(1) space

console.log(majorityElement([6,5,5]));
console.log(majorityElement([3,3,2,2,4,3,4,4]));
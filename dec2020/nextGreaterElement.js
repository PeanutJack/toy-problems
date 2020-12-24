// input: integer
// output: next greater integer that uses the same digits
// edge cases: Some numbers are already arranged in their greatest possible way, return -1

// Strategy:
  // Check if number is greatest possible by making sure that every digit is less than or equal to the last
  // How do I get every digit into something iterable?
    // Convert to string first
  // Now that's handled, how do I find the next greatest digit? Possibilities:
    // increment by 1 until I get a number that has all the same digits
      // extremely slow
    // The last instance of a digit being larger than it's predecessor needs to be swapped with the previous
    // the remaining part after the swap needs to be sorted ascending
    // okay, not exactly....
    // after a digit is larger than last, the smallest number after it is what needs to replace it

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  let s = String(n);
  let greatest = true;
  let last = 0;
  let small = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] > s[i]) {
      greatest = false;
      last = i;
    }
  }
  if (greatest) return -1;
  let firstHalf = s.slice(0, last);
  let secondHalf = s.slice(last).split('');
  secondHalf.forEach(digit => digit < small && digit > s[last] ? small = digit : null);
  secondHalf.splice(secondHalf.indexOf(small), 1);
  secondHalf.sort();
  let next = Number(firstHalf + String(small) + secondHalf.join(''));
  return next < 2147483647 && next || -1;
};

console.log(nextGreaterElement(230241));
console.log(nextGreaterElement(12443322));
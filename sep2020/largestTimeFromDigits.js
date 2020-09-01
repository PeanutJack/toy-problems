/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let time = [];
  // first digit is most important, has to be biggest number <= 2
  // second digit second most important, depends on first, if first === 2, this is 0-3, otherwise, 0-9
  // third is third, always 0-5
  // fourth is last, always 0-9
  A.sort((a, b) => b - a);
  // get first digit first, then put others whereever they fit
  let first = A.indexOf(2);
  if (first === -1 || A[1] > 5) first = A.indexOf(1);
  if (first === -1) first = A.indexOf(0);
  if (first === -1) return '';
  time[0] = A[first];
  A = A.slice(0, first).concat(A.slice(first + 1));
  // I can't just jam the biggest thing first, because it might make the other numbers not fit
  // maybe just jam in a check at first to avoid putting a 2 at start if 2 numbers are bigger than 5 (because that means there is no room for them since digits 2 and 3 have constraints)
  while (A.length > 0) {
    let digit = A.shift();
    if (time[1] === undefined && time[0] === 2 && digit <= 3) {
      time[1] = digit;
    } else if (time[1] === undefined && time[0] < 2) {
      time[1] = digit;
    } else if (digit <= 5 && time[2] === undefined) {
      time[2] = digit;
    } else if (time[3] === undefined) {
      time[3] = digit;
    } else {
      return '';
    }
  }
  return `${time[0]}${time[1]}:${time[2]}${time[3]}`;
};

console.log(largestTimeFromDigits([1,3,2,4]));
console.log(largestTimeFromDigits([2,0,6,6]));
console.log(largestTimeFromDigits([2,0,4,4]));
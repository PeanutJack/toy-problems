/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  let output = [];
  let runs = 0;
  while (runs < A.length) {
    // find index of last number in order
    let index = A.indexOf(A.length - runs) + 1;
    // if it's already in the right spot, move to next number
    if (index === A.length - runs) {
      runs++;
      continue;
    }
    // flip on that index
    A = A.slice(0, index).reverse().concat(A.slice(index));
    // flip on (end - finished section)
    A = A.slice(0, A.length - runs).reverse().concat(A.slice(A.length - runs));
    output.push(index, A.length - runs);
    runs++;
  }
  return output;
};

console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([3, 2, 1, 4]));
console.log(pancakeSort([1, 2, 3]));
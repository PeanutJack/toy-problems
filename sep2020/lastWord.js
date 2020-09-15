/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let a = s.split(' ');
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i].length) {
      return a[i].length;
    }
  }
  return 0;
};


// alternate solution
// let a = s.trim().split(' ');
// return a[a.length - 1].length;
console.log(lengthOfLastWord('a '));
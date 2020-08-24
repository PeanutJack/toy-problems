/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  // this.storage = {};
  // words.forEach((word) => {
  //   this.storage[word[word.length - 1]] = true;
  // });
  this.words = words;
  this.queryHist = '';
  this.longest = 0;
  words.forEach((word) => {
    if (word.length > this.longest) {
      this.longest = word.length;
    }
  });
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  var { words, queryHist } = this;
  this.queryHist += letter;
  if (this.queryHist.length > this.longest) {
    this.queryHist = this.queryHist.slice(1);
  }
  for (let i = 0; i < words.length; i++) {
    var left = this.queryHist.slice(this.queryHist.length - words[i].length);
    var right = words[i];
    // console.log(left, right, count);
    if (left === right) {
      // console.log(words[i], words[i].slice(words[i].length - count), this.queryHist);
      return true;
    }
  }
  return false;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

// streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
// console.log(streamChecker.query('a'), 'a');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('c'), 'c');          // return false
// console.log(streamChecker.query('d'), 'd');          // return true, because 'cd' is in the wordlist
// console.log(streamChecker.query('e'), 'e');          // return false
// console.log(streamChecker.query('f'), 'f');          // return true, because 'f' is in the wordlist
// console.log(streamChecker.query('g'), 'g');          // return false
// console.log(streamChecker.query('h'), 'h');          // return false
// console.log(streamChecker.query('i'), 'i');          // return false
// console.log(streamChecker.query('j'), 'j');          // return false
// console.log(streamChecker.query('k'), 'k');          // return false
// console.log(streamChecker.query('l'), 'l');          // return true, because 'kl' is in the wordlist

streamChecker = new StreamChecker(["ab","ba","aaab", "abab", "baa"]); // init the dictionary.
console.log(streamChecker.query('a'), 'a');          // return false
console.log(streamChecker.query('a'), 'a');          // return false
console.log(streamChecker.query('a'), 'a');          // return false
console.log(streamChecker.query('a'), 'a');          // return true, because 'c
console.log(streamChecker.query('a'), 'a');          // return false
console.log(streamChecker.query('b'), 'b');          // return true, because 'f'
console.log(streamChecker.query('a'), 'a');          // return false
console.log(streamChecker.query('b'), 'b');          // return false
console.log(streamChecker.query('a'), 'a');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('b'), 'b');          // return true, because 'kl' is
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
// console.log(streamChecker.query('b'), 'b');          // return false
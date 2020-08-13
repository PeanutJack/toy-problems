/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.characters = characters;
  this.comboIndex = Array(combinationLength).fill(null).map((c, i) => i);
  this.comboIndex[this.comboIndex.length - 1]--;
  this.last = this.comboIndex.join('');
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
  if (!this.hasNext()) return null;
  let { comboIndex, characters } = this;
  let end = comboIndex.length - 1;
  let max = characters.length - 1;
  let iteration = 0;
  comboIndex[end]++;
  while (comboIndex[end] > max - iteration) {
    comboIndex[end - 1]++;
    comboIndex[end] = comboIndex[end - 1] + 1;
    let i = 1;
    while (comboIndex[end + i]) {
      comboIndex[end + i] = comboIndex[end] + i;
      i++;
    }
    end--;
    iteration++;
  }
  this.last = comboIndex.map((c) => characters[c]).join('');
  return this.last;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
  return !(this.characters.indexOf(this.last) === this.characters.length - this.comboIndex.length);
};

var iterator = new CombinationIterator("abcequx", 4); // creates the iterator.
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "ab"
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "ac"
console.log(iterator.hasNext()); // returns true
console.log(iterator.next()); // returns "ad"
console.log(iterator.next()); // returns "ae"
console.log(iterator.next()); // returns "bc"
console.log(iterator.next()); // returns "bd"
console.log(iterator.next()); // returns "be"
console.log(iterator.next()); // returns "cd"
console.log(iterator.next()); // returns "ce"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"
console.log(iterator.next()); // returns "de"


// var iterator = new CombinationIterator("abcde", 2); // creates the iterator.
// console.log(iterator.next()); // returns "ab"
// console.log(iterator.next()); // returns "ac"
// console.log(iterator.next()); // returns "ad"
// console.log(iterator.next()); // returns "ae"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bd"
// console.log(iterator.next()); // returns "be"
// console.log(iterator.next()); // returns "cd"
// console.log(iterator.hasNext()); // returns true
// console.log(iterator.next()); // returns "ce"
// console.log(iterator.hasNext()); // returns true
// console.log(iterator.next()); // returns "de"
// console.log(iterator.hasNext()); // returns false

// var iterator = new CombinationIterator("abcde", 3); // creates the iterator.
// console.log(iterator.next()); // returns "ab"
// console.log(iterator.next()); // returns "ac"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.next()); // returns "bc"

// var iterator = new CombinationIterator("abc", 2); // creates the iterator.
// console.log(iterator.next()); // returns "ab"
// console.log(iterator.hasNext()); // returns true
// console.log(iterator.next()); // returns "ac"
// console.log(iterator.hasNext()); // returns true
// console.log(iterator.next()); // returns "bc"
// console.log(iterator.hasNext()); // returns false

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
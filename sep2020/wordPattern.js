// I don't know if pattern and str have to be the same length, or if pattern could be 4 and str be 8 words, going to assume yes unless shown otherwise
// each pattern can only have one word and each word can only have 1 pattern

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr = str.split(' ');
  if (pattern.length !== arr.length) return false;
  let patts = {};
  let words = {};
  for (let i = 0; i < arr.length; i++) {
    if (patts[pattern[i]] === undefined && words[arr[i]] === undefined) {
      patts[pattern[i]] = arr[i];
      words[arr[i]] = pattern[i];
    } else if (patts[pattern[i]] === arr[i] && words[arr[i]] === pattern[i]) {
    } else {
      return false;
    }
  }
  return true;
};

console.log(wordPattern('aba', 'cat cat cat dog'));
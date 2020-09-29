// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// only return true if you can combine a combination of words in the dict to make the input string
  // dict cannot be modified (dog !== og)
  // words in dict can be used multiple times

// start with one of the words in the dict
// check if the word chosen matches the start of the input s
  // if so, add another word from dict, and check again
  // if not, end recursion

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // avoid majority of work if s has a letter not in wordDict
  // let stor = {};
  // for (let k = 0; k < wordDict.length; k++) {
  //   for (let l = 0; l < wordDict[k].length; l++) {
  //     stor[wordDict[k][l]] ? stor[wordDict[k][l]]++ : stor[wordDict[k][l]] = 1;
  //   }
  // }
  // for (let j = 0; j < s.length; j++) {
  //   if (!stor[s[j]]) return false;
  // }

  let output = false;
  let newDict = [];
  let successfullyHitIndex = {};
  let addWord = function(str, dict) {
    // try adding all words from dict to previous string
    for (let i = 0; i < dict.length; i++) {
      let newStr = str + dict[i];
      if (newStr === s.substring(0, newStr.length)) {
        if (successfullyHitIndex[newStr.length]) continue;
        // console.log(newStr, s.substring(0, newStr.length));
        successfullyHitIndex[newStr.length] = true;
        // console.log(newStr.length, s.length);
        if (newStr.length === s.length) {
          // console.log('found solution')
          return true;
        } else if (addWord(newStr, dict)) {
          return true;
        }
      }
    }
    return false;
  }
  // remove words from dict if they are another word, repeated
  wordDict.sort((a, b) => b.length - a.length);
  // for (let m = 0; m < wordDict.length; m++) {
    // for (let n = wordDict.length - 1; n > m; n--) {
    //   let testWord = wordDict[n];
    //   // console.log(testWord, wordDict[m], m, n)
    //   while (testWord.length < wordDict[m].length) {
    //     testWord += wordDict[n];
    //   }
    //   if (testWord === wordDict[m]) {
    //     wordDict.splice(m, 1);
    //     m--;
    //     break;
    //   }
    // }
    // let tempDict = wordDict.slice(0, m).concat(wordDict.slice(m + 1));
    // console.log(addWord(wordDict[m], tempDict));
  // }
  return addWord('', wordDict);
  // console.log(wordDict);
  // return addWord('', wordDict);
};

// FINAL SOLUTION
var wordBreak = function(s, wordDict) {
  let successfullyHitIndex = {};
  let addWord = function(str, dict) {
    // try adding all words from dict to previous string
    for (let i = 0; i < dict.length; i++) {
      let newStr = str + dict[i];
      if (newStr === s.substring(0, newStr.length)) {
        if (successfullyHitIndex[newStr.length]) continue;
        successfullyHitIndex[newStr.length] = true;
        if (newStr.length === s.length) return true;
        if (addWord(newStr, dict)) return true;
      }
    }
    return false;
  }
  return addWord('', wordDict);
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['pen', 'apple']));
console.log(wordBreak('catsandogs', ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"]));


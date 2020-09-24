// t is the string s but with an extra letter and shuffled
// indexOf would take more time, but an object would take space
  // indexOf sounded simple at first, but it would actually fail if the letter added is a duplicate

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// time: O(n), space: O(1)
  // thought it was O(n) space, but there are only so many characters
  // a 1000 length and 10000 length string of all lowercase would still only take 26 key/value pairs max
// could save a bit of time by definining all lowercase letters in the object beforehand so I don't have to do the key existence check all the time
var findTheDifference = function(s, t) {
  let stor = {};
  for (let i = 0; i < t.length; i++) {
    stor[t[i]] ? stor[t[i]]++ : stor[t[i]] = 1;
    stor[s[i]] ? stor[s[i]]++ : stor[s[i]] = 1;
  }
  for (var key in stor) {
    if (stor[key] % 2 === 1) return key;
  }
};

console.log(findTheDifference('abcd', 'abcde'));
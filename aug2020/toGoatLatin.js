/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // let words = S.split(' ');
  // for (let i = 0; i < words.length; i++) {
  //   // if the first letter is not a vowel
  //   if (vowels.indexOf(words[i][0].toLowerCase()) === -1) {
  //     words[i] = words[i].slice(1) + words[i][0];
  //   }
  //   words[i] += 'ma' + 'a'.repeat(i + 1);
  // }
  return S.split(' ').map((w, i) => (vowels.includes(w[0]) ? w : w.slice(1) + w[0]) + 'ma' + 'a'.repeat(i + 1)).join(' ');
};

console.log(toGoatLatin('I speak Goat Latin'));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))
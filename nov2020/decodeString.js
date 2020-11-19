// input: string with numbers for how many times to repeat, and a string in [] to be repeated
  // they can be nested "3[a2[c]]" = "accaccacc"
// output: decoded string
// things to consider:
  // integers in string are 1 - 300 (multiple digits)

// First thought: recursive function
  // iterate over input string
    // if char is a number
      // find the matching end bracket for the one right after the number
      // recurse function on that portion, and add result to output
      // increment iteration to after the end bracket
    // if char is string
      // add to output then move one
  // return output


/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let output = '';
  for (let i = 0; i < s.length; i++) {
    // if it's just a character, move on
    if (!(s[i] < 10)) {
      output += s[i];
      continue;
    }
    // otherwise, it has to be a number
    let num = 0;
    while (s[i] < 10) {
      // build up the number to get all the digits
      num = num * 10 + Number(s[i]);
      i++;
    }
    // after while loop, s[i] should be [
    let startBracket = i;
    let bracketCount = 1;
    while (bracketCount > 0) {
      i++;
      if (s[i] === ']') bracketCount--;
      if (s[i] === '[') bracketCount++;
    }
    // after this while loop, i should be the matching bracket
    let endBracket = i;
    let segment = decodeString(s.slice(startBracket + 1, endBracket));
    console.log(segment.repeat(5), num)
    output += segment.repeat(num);
  }
  return output;
};

console.log(decodeString("30[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("30[a]2[bc]"));
// console.log(decodeString("30[a]2[bc]"));
// console.log(decodeString("30[a]2[bc]"));
// low will not be less than 10, don't have to worry about single digits

// thinking about doing a lot of string/number conversion
// nah, just need to multiply by factors of 10
// only attempt to make the number if first digit + length < 9

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let output = [];
  let start = low;
  let pad = 0;
  while (start >= 10) {
    start = start / 10;
    pad++;
  }
  let i = Math.floor(start) - 1;
  while (true) {
    i++;
    if (i === 10) {
      i = 1;
      pad++;
    };
    if (pad > 9) break;
    if (i + pad > 9) continue;
    let newNum = i;
    let digit = i % 10;
    let toAdd = pad;
    while (toAdd > 0) {
      toAdd--;
      digit++;
      newNum = newNum * 10 + digit;
    }
    if (digit > 10) continue;
    if (newNum < low) continue;
    if (newNum > high) break;
    output.push(newNum);
  }
  return output;
};

console.log(sequentialDigits(58, 155));
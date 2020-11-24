// input: string of numbers, basic operators (+,-,/,*), and spaces
// output: result of calculating the string

// notes:
  // Order of operations is important
  // Spaces don't mean anything (just trim at certain points I guess, or convert to numbers)
  // No parentheses

// First idea: String.split() on different operators, in a proper order
  // split on +, split each of those on -
  // use helper function to solve the remaining * and / segments
  // join the - splits with subtraction
  // join the + splits with addition

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  return s.split('+')
    .map(addStr => {
      return addStr.split('-')
        .map(subStr => subStr.split('*')
          .map(multStr => multStr.split('/')
            .reduce((a, c) => Math.trunc(a / c)))
          .reduce((a, c) => a * c))
        .reduce((a, c) => a - c)
    })
    .reduce((a, c) => Number(a) + Number(c));
};

console.log(calculate("1+2*5/3+6/4*2"));

// 2*5/3 it wants me to 2*5 = 10, 10/3 = 3 (trunc)
// currently I do 5/3 = 1 (trunc) * 2 = 2

// welp, maybe I'll get it another day, got to go
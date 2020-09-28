// all inputs are valid, no dividing by 0

// Input: equations = [["a","b"],["b","c"],["bc","cd"]],
// values = [1.5,2.5,5.0],
// queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]

// a / b === 1.5;
// b / c === 2.5;
// b * c / c * d === 5;

// for a = 3, b = 2, c = 0.8, d = 1.6;
// which mean a/c = 3.75, c/b = 0.4, bc/cd = b/d = 5, cd/bc = d/b = 0.8;


/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let output = [];
  // first get values of each number
  let stor = {};
  let fullUnknown = true;
  while (fullUnknown) {
    fullUnknown = false;
    // for each of the equations in the list
    equations.forEach((equation, k) => {
      if (Object.keys(stor).length === 0) stor[equation[0][0]] = 60;
      // for both sides of the equation
      let top = 1;
      let bot = 1;
      let unknown = [];
      if (stor[equation[0]]) {
        top = top * stor[equation[0]];
      } else {
        unknown.push(['top', equation[0]]);
      }
      if (stor[equation[1]]) {
        bot = bot * stor[equation[1]];
      } else {
        unknown.push(['bot', equation[1]]);
      }
      // for (let i = 0; i < equation[0].length; i++) {
      //   if (stor[equation[0][i]]) {
      //     top = top * stor[equation[0][i]];
      //   } else {
      //     unknown.push(['top', equation[0][i]]);
      //   }
      // }
      // for (let j = 0; j < equation[1].length; j++) {
      //   if (stor[equation[1][j]]) {
      //     bot = bot * stor[equation[1][j]];
      //   } else {
      //     unknown.push(['bot', equation[1][j]]);
      //   }
      // }
      if (unknown.length === equation[0].length + equation[1].length) {
        fullUnknown = true;
        return;
      }
      // maybe put in a check if no new/unknown letters were introduced?
      // a / aa = 9 || 1 / a = 9 || 1 = 9a || a = 1 / 9
      // I think this is a hardcoded solution, but maybe it works?
      // if (unknown.length === 0) {
      //   stor[equation[0][0]] = values[k] ** equation[0].length / values[k] ** equation[1].length;
      // }
      unknown.forEach((letter) => {
        if (letter[0] === 'top') {
          stor[letter[1]] = values[k] * bot;
          top = top * values[k] * bot;
        } else {
          stor[letter[1]] = top / (bot * values[k]);
        }
      });
      console.log(stor);
    });
  }
  queries.forEach((query) => {
    let top = stor[query[0]];
    let bot = stor[query[1]];
    // let top = 1;
    // let bot = 1;
    // for (let i = 0; i < query[0].length; i++) {
    //   top = top * stor[query[0][i]];
    // }
    // for (let j = 0; j < query[1].length; j++) {
    //   bot = bot * stor[query[1][j]];
    // }
    if (!top || !bot) {
      output.push(-1);
    } else {
      output.push(top / bot);
    }
  });
  return output;
};

// console.log(calcEquation([["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]));

// console.log(calcEquation([["a","e"],["b","e"]], [4.0,3.0], [["a","b"],["e","e"],["x","x"]]));

console.log(calcEquation([["a","aa"]], [9.0], [["aa","a"],["aa","aa"]]));

// console.log(calcEquation([["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]], [3.0,4.0,5.0,6.0], [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]));

console.log(calcEquation([["a","b"],["e","f"],["b","e"]], [3.4,1.4,2.3], [["b","a"],["a","f"],["f","f"],["e","e"],["c","c"],["a","c"],["f","e"]]))
var rand7 = () => Math.ceil(Math.random() * 7);


  // first solution is to run it 10 times then divide the answer by 10
  // let output = 0;
  // for (let i = 0; i < 10; i++) {
  //   output += rand7();
  // }
  // console.log(output);
  // return Math.ceil(output / 10); // this created mid-bias
  // next solution is divide by 7 to get the source random number, then multiply by 10
    // no because there are only 7 different options and I need 10 different results
    // the ceil in the rand7 source can't be undone
  // next idea, look at one call divided by second number, should be a good number of different results
  // let output = {};
  // let array = [];
  // for (let i = 1; i <= 7; i++) {
  //   for (let j = 1; j <= 2; j++) {
  //     output[i * j] = true;
  //     array.push(i * j);
  //   }
  // }
  // console.log(output);
  // console.log(array.sort());
  // return output;

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  if (coinFlip()) {
    return rand5();
  } else {
    return 5 + rand5();
  }
};

var coinFlip = function() {
  let coin;
  while (coin === undefined) {
    let flip = rand7();
    if (flip > 4) {
      coin = true;
    } else if (flip < 4) {
      coin = false;
    }
  }
  return coin;
}

var rand5 = function() {
  let output;
  while (output === undefined) {
    let temp = rand7();
    if (temp < 6) output = temp;
  }
  return output;
}

rand10();

var output = [];
for (var i = 0; i < 20; i++) {
  output.push(rand10());
}
console.log(output);
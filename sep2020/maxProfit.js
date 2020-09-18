// is this maybe DP?
// You don't know if the low you chose to buy on is the best one until you go through everything

// could do n^2 iterations but finding all possible permutations and returning largest gain

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let gains = [0];
//   let low = prices[0];
//   // if a number during iteration is lower that previous low, we might want to buy there, if we can find a high large enough later on to justify it
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < low) {
//       low = prices[i];
//     }
//     gains[i] = Math.max(gains[i - 1], prices[i] - low);
//   }
//   return gains[gains.length - 1];
// };

var maxProfit = function(prices) {
  let max = 0;
  let low = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) low = prices[i];
    max = Math.max(max, prices[i] - low);
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let total = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i + 1] < timeSeries[i] + duration) {
      total += timeSeries[i + 1] - timeSeries[i];
    } else {
      total += duration;
    }
  }
  return total;
};


console.log(findPoisonedDuration([1,3],3));
console.log(findPoisonedDuration([1,2,3,4,5],5));
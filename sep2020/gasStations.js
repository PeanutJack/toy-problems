// each number in the gas array is the amount of gas that station(index) has
// the cost array is the amount of gas it takes to leave the currend index and go to next
// last number of cost array directs to first station, it's a circular path
// car has unlimited gas capacity, starts empty (or amount of gas at first station)

// if it is possible to make a circle, return the index of the starting station
  // can start from any station, only have to make 1 complete circle

// if the total cost is greater than the total gas, there is no way to make a loop
  // could implement this as an early break
// if the total cost is LESS than the total gas, it MIGHT be possible for a loop
  // knowing that a loop is possible is not enough, I need to return the start point

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    let station = i;
    while (true) {
      tank += gas[station] - cost[station];
      station++;
      if (station >= gas.length) station = 0;
      if (tank < 0 || station === i) break;
    }
    if (station === i && tank >= 0) return station;
    tank = 0;
  }
  return -1;
};

// above is my O(n^2) solution, below is O(n) solution based on Tom Gower's solution

var canCompleteCircuit = function(gas, cost) {
  // first, immediately reject any non-loops, as identified by total gas less than total cost
  if (gas.reduce(((a, c, i) => a + c - cost[i]), 0) < 0) return -1;
  // then, find where the loop starts
  let start = 0;
  let tank = 0;
  // the first starting point is whereever everything after it totals to a net gain/neutral
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return tank >= 0 ? start : -1;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));
console.log(canCompleteCircuit([1,1,3,3], [2,2,2,3]));
console.log(canCompleteCircuit([3,1,1], [1,2,2]));
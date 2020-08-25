/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  // default to 1 day passes for everything
  // if 4 or more days in a 7 day period, swap to a 7 day pass
  // if 9 or more days in a 30 day period, swap to 30 day pass
    // these numbers only work for costs 2/7/15, need to make them based on the costs
  // 7 day cost / 1 day cost rounded up = number of days for it to be more worth
  // 30 day cost / 7 day cost * previous number then rounded up
  // maybe also compare to 1 day costs in case of 1/3/4 costs or something
  let weekWorth = 4; // filled in to make sure given example passes before calcing
  let monthWorth = 9;
  let total = 0;
  let currDay = 0;
  for (let i = 0; i < days.length; i++) {
    let day = days[i];
    if (day < currDay) continue;
    if (days[i + monthWorth] - day <= 30) {
      console.log('month pass gotten from', day, days[i + monthWorth]);
      total += costs[2];
      currDay = day + 30;
    } else if (days[i + weekWorth] - day <= 7) {
      console.log('week pass gotten from', day, days[i + weekWorth]);
      total += costs[1];
      currDay = day + 7;
    } else {
      console.log('day pass gotten for', day, days[i + weekWorth] - day, days[i + monthWorth] - day);
      total += costs[0];
      currDay = day;
    }
  }
  return total;
};

var test1Days = [1, 4, 6, 7, 8, 20];
var test1Costs = [2, 7, 15];
console.log(mincostTickets(test1Days, test1Costs));
var test2Days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
var test2Costs = [2, 7, 15];
console.log(mincostTickets(test2Days, test2Costs));
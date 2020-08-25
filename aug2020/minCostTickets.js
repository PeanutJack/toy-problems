/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// var mincostTickets = function(days, costs) {
//   // default to 1 day passes for everything
//   // if 4 or more days in a 7 day period, swap to a 7 day pass
//   // if 9 or more days in a 30 day period, swap to 30 day pass
//     // these numbers only work for costs 2/7/15, need to make them based on the costs
//   // 7 day cost / 1 day cost rounded up = number of days for it to be more worth
//   // 30 day cost / 7 day cost * previous number then rounded up
//   // maybe also compare to 1 day costs in case of 1/3/4 costs or something
//   let weekWorth = Math.ceil(costs[1] / costs[0]);
//   let monthWorth = Math.ceil(costs[2] / costs[1] * weekWorth) + 1;
//   console.log(weekWorth, monthWorth);
//   let total = 0;
//   let currDay = 0;
//   let totals = [];
//   for (let i = 0; i < days.length; i++) {
//     let day = days[i];
//     if (day < currDay) continue;
//     if (days[i + monthWorth] - day <= 30) {
//       console.log('month pass gotten from', day, days[i + monthWorth]);
//       total += costs[2];
//       currDay = day + 30;
//     } else if (days[i + weekWorth] - day <= 7) {
//       console.log('week pass gotten from', day, days[i + weekWorth]);
//       total += costs[1];
//       currDay = day + 7;
//     } else {
//       console.log('day pass gotten for', day, days[i + weekWorth] - day, days[i + monthWorth] - day);
//       total += costs[0];
//       currDay = day;
//     }
//   }
//   return total;
// };

// the other thought is assume every day is the last (can only look at previous)
var mincostTickets = function(days, costs) {
  var calendar = Array(days[days.length - 1]).fill(0);
  days.forEach((day) => calendar[day] = 1);
  var totals = [0];
  for (let i = 1; i < calendar.length; i++) {
    if (calendar[i] === 0) {
      totals[i] = totals[i - 1];
    } else {
      totals[i] = Math.min(
        // the total for all days up until now is based on the minimum of trying to either add a single day pass, adding a week pass a week ago, or adding a month pass a month ago
        totals[i - 1] + costs[0],
        totals[i > 7 ? i - 7 : 0] + costs[1],
        totals[i > 30 ? i - 30: 0] + costs[2]
      )
    }
  }
  return totals.pop();
};

var test1Days = [1, 4, 6, 7, 8, 20];
var test1Costs = [2, 7, 15];
console.log(mincostTickets(test1Days, test1Costs));
var test2Days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
var test2Costs = [2, 7, 15];
console.log(mincostTickets(test2Days, test2Costs));
var test3Days = [6, 8, 9, 18, 20, 21, 23, 25];
var test3Costs = [2, 10, 42];
console.log(mincostTickets(test3Days, test3Costs));
var test4Days = [1,4,6,9,10,11,12,13,14,15,16,17,18,20,21,22,23,27,28];
var test4Costs = [3, 13, 45];
console.log(mincostTickets(test4Days, test4Costs));

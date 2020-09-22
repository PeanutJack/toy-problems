// single trip [#people, startLoc, endLoc]
// trips are not sorted by start location

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  // sort trips by start location
  trips.sort((a, b) => a[1] - b[1]);
  let stops = {};
  // iterate over trips
  for (let i = 0; i < trips.length; i++) {
    let trip = trips[i];
    // keep track of how many people get dropped off at a location
    stops[trip[2]] ? stops[trip[2]] += trip[0] : stops[trip[2]] = trip[0];
    // drop off anyone that we are at or passed their stop
    for (var key in stops) {
      if (trip[1] >= key) {
        capacity += stops[key];
        delete stops[key];
      }
    }
    // take on the new people
    capacity -= trip[0];
    if (capacity < 0) return false;
  }
  return true;
};

console.log(carPooling([[2,1,5],[3,3,7]], 4))
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11));

let start = Date.now();
console.log(start - Date.now());
for (let i = 0; i < 100000000; i++) {

}
console.log(start - Date.now());
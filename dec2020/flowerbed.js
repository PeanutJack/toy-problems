// input: array of 0/1 representing existence of flower
  // also, a number of new flowers to be placed
// output: boolean on if the given number of new flowers can be placed

// keep in mind: flowers cannot be adjacent: [1,0,1] is good, [1,1,0] is not

// Strategy:
  // Can this be mathematically derived with a simple reduce function?
    // Not in all cases. There is a certain breakpoint where if the are x flowers in the flowerbed, then n new flowers could be placed regardless of where the x flowers are. This also assumes we're given an acceptable bed.
  // Traverse array looking for the following conditions:
    // if previous, current, and next are all 0
      // place flower(1) at current and decrement n
      // if n === 0, return true
    // at end of loop, if true has not been returned, return false

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 1; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      n--;
    }
    if (n < 1) return true;
  }
  return false;
};
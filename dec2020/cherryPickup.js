// input: grid (array of arrays) of integers
// output: number of cherries picked up by robots at top left and right corners going down

// They can only move straight down, or diagonal by 1 and down
// Cherries can only be collected by twice, a square visited by both is only counted once

// Strategy:
  // All permutations: 3 ^ rows, O(3^n) seems too long
  // Maybe some sort of dynamic programming?
  // idk, gonna try all perms first
  // Really hard to generate all perms correctly because I have to keep in mind only one can take from a square, and either one might have to take a lesser square because it's better than the other robot taking a lesser one
  // Alright, let's try and get some info for DP
    // A robot can only go as far away from the edge as it is down

/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  let maxes = {};
  let path = [];
  let maxPermPath = [];
  let gather = function(startRow, startCol, current, robot) {
    if (startRow >= grid.length) {
      if (current > maxes[robot]) {
        maxes[robot] = current;
        maxPermPath = path.slice();
      }
      return null;
    }
    path.push(startCol);
    current += grid[startRow][startCol];
    startRow++;
    if (startCol > 0) gather(startRow, startCol - 1, current, robot);
    gather(startRow, startCol, current, robot);
    if (startCol < grid[0].length - 1) gather(startRow, startCol + 1, current, robot);
    path.pop();
  }
  gather(0, 0, 0, 'left');
  for (let i = 0; i < maxPermPath.length; i++) {
    grid[i][maxPermPath[i]] = 0;
  }
  gather(0, grid[0].length - 1, 0, 'right');
  return maxes.left + maxes.right;
};
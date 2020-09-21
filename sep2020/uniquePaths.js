// if there are squares to move to, recurse in those directions
// if there are no squares left, check for no more 0s in matrix
  // if no 0s, that path was a win, increment counter

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let count = 0;
  let go = function(y, x) {
    if (grid[y][x] === 2) {
      return checkWin();
    }
    grid[y][x] = 1;
    if (y < grid.length - 1 && grid[y + 1][x] % 2 === 0) go(y + 1, x);
    if (y > 0 && grid[y - 1][x] % 2 === 0) go(y - 1, x);
    if (x < grid[y].length - 1 && grid[y][x + 1] % 2 === 0) go(y, x + 1);
    if (x > 0 && grid[y][x - 1] % 2 === 0) go(y, x - 1);
    grid[y][x] = 0;
  };
  let checkWin = function() {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 0) return false;
      }
    }
    count++;
  }
  // find starting point
  for (let i = 0; i < grid.length; i++) {
    let start = grid[i].indexOf(1);
    if (start !== -1) {
      go(i, start);
      break;
    }
  }
  // console.log(grid);
  return count;
};

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]]));
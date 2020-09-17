// instructions are (G)o, (L)eft turn, and (R)ight turn
// if the robot follows the instructions forever, are they in a circle?
  // instruction list might be small and require up to 4 iterations to result in circle
  // cannot break out of instructions in the middle of a set (false positives)
// could implement break checking between sets, done

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let direction = 0; // 0 north, 1 east, 2 south, 3 west
  let vertPos = 0;
  let horPos = 0;
  let sets = 0;
  while (sets < 4) {
    for (let i = 0; i < instructions.length; i++) {
      console.log(sets, direction, vertPos, horPos)
      if (instructions[i] === 'G') {
        if (direction === 0) vertPos--;
        if (direction === 1) horPos++;
        if (direction === 2) vertPos++;
        if (direction === 3) horPos--;
      }
      if (instructions[i] === 'R') direction++;
      if (instructions[i] === 'L') direction--;
      if (direction === 4) direction = 0;
      if (direction === -1) direction = 3;
    }
    // if after completing a set of instructions, they are at original point and direction, it's a circle
    if (direction === 0 && vertPos === 0 && horPos === 0) {
      return true;
    }
    sets++;
  }
  // if after completing 4 sets, they have not been back to original spot, it's not a circle
  return false;
};

console.log(isRobotBounded("GGLLGG"));
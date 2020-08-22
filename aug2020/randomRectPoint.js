/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  // first idea: create array of all possible points when instantiated
    // pick would just select a random one from that array
    // probably terrible on memory, but must keep in mind: MVP
    // did this ^ and leetcode tried throwing numbers in millions, not good
  // this.points = [];
  // rects.forEach(rect => {
  //   for (let x = rect[0]; x <= rect[2]; x++) {
  //     for (let y = rect[1]; y <= rect[3]; y++) {
  //       this.points.push([x, y]);
  //     }
  //   }
  // });
  // to ensure uniform distribution I need to make the odds of picking a rectangle
  // equal to the space it takes up
  this.rects = rects;
  this.sizes = [];
  rects.forEach(rect => {
    // need to add one to these dimensions because they are inclusive rectangles
    let width = Math.abs(rect[0] - rect[2]) + 1;
    let height = Math.abs(rect[1] - rect[3]) + 1;
    // console.log(width, height);
    this.sizes.push(width * height);
  });
  // console.log('sizes: ', this.sizes)
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  // return this.points[Math.floor(Math.random() * this.points.length)];
  // to ensure uniform distribution I need to make the odds of picking a rectangle
  // equal to the space it takes up
  let totalArea = this.sizes.reduce((a, c) => a + c);
  let selectedPoint = Math.floor(Math.random() * totalArea);
  let rect;
  for (let i = 0; i < this.sizes.length; i++) {
    // console.log('comparing: ', this.sizes[i], selectedPoint, rect);
    if (this.sizes[i] > selectedPoint) {
      rect = this.rects[i];
      break;
    } else {
      selectedPoint -= this.sizes[i];
    }
  }
  let width = Math.abs(rect[0] - rect[2]) + 1;
  let height = Math.abs(rect[1] - rect[3]) + 1;
  // console.log('dims: ',rect, width, height);
  let x = rect[0] + Math.floor(Math.random() * width);
  let y = rect[1] + Math.floor(Math.random() * height);
  return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

var rects = [[-2,-2,-1,-1],[1,0,3,0]];
var test = new Solution(rects);
console.log(test.pick());
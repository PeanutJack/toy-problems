/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var start = Date.now();
var distributeCandies = function(candies, num_people) {
  const output = Array(num_people).fill(0);
  let count = 0;
  while(candies > 0) {
    let person = count % num_people;
    count++;
    const candiesToGive = Math.min(count, candies);
    output[person] += candiesToGive;
    candies -= candiesToGive;
  }
  return output;
};


console.log(distributeCandies(99, 3))
console.log(Date.now() - start);
console.log(distributeCandies(99, 5))
console.log(Date.now() - start);
console.log(distributeCandies(98411923481296, 5))
console.log(Date.now() - start);

// input: integers n and k, between 1 and 1000
// output: kth factor of n

// for n = 12 factors would be
  // 1, 2, 3, 4, 6, 12
  // k = 4 would mean the 4th item, which is 4

// strategy:
  // push list of factors into array
  // get k - 1 index from array
  // generating list of factors could take O(n) time, maybe something better

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let factors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors++;
    if (factors === k) return i;
  }
  return -1;
};
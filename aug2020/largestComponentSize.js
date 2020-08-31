/**
 * @param {number[]} A
 * @return {number}
 */
// var largestComponentSize = function(A) {
//   // for each number of the array
//     // add to another array
//     // find all connections and add them to new array
//     // repeat until array length stops changing
//     // remove numbers from original array
//     // put new array somewhere
//   // return longest sub array
//   A = A.slice(); // new array to avoid mutating original
//   let subArrs = [];
//   while (A.length > 0) {
//     let newArr = [A.shift()];
//     let oldArr = [];
//     // for (let i = 0; i < A.length; i++) {
//     //   let added = false;
//     //   for (let j = 0; j < newArr.length; j++) {
//     //     console.log(newArr, j, A[i], newArr[j]);
//     //     if ((A[i] % newArr[j] === 0) || (newArr[j] % A[i] === 0)) {
//     //       newArr.push(A[i]);
//     //       added = true;
//     //       break;
//     //     }
//     //   }
//     //   if (!added) oldArr.push(A[i]);
//     // }
//     // subArrs.push(newArr);
//     // A = oldArr;
//     let newAdd = true;
//     while (newAdd === true) {
//       newAdd = false;
//       for (let i = 0; i < A.length; i++) {
//         let added = false;
//         for (let j = 0; j < newArr.length; j++) {
//           if ((A[i] % newArr[j] === 0) || (newArr[j] % A[i] === 0)) {
//             newArr.push(A[i]);
//             added = true;
//             newAdd = true;
//             A = A.slice(0, i).concat(A.slice(i + 1));
//             break;
//           }
//         }
//         if (!added) oldArr.push(A[i]);
//       }
//     }
//     subArrs.push(newArr);
//     A = oldArr;
//   }
//   return subArrs;
// };

/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
  let largest = A.sort((a, b) => b - a)[0];
  let subArrs = [];
  for (let i = 2; i < largest; i++) {
    let newArr = [];
    for (let j = 0; j < A.length; j++) {
      let connected = false;
      if (A[j] % i === 0) {
        newArr.push(A[j]);
      }
    }
    if (newArr.length > 1) subArrs.push(newArr); // tuple of array of numbers with common factor, and the factor
  }
  // look for subarrays that connect, combine until it stops changed
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 1; i < subArrs.length; i++) {
      changed = false;
      subArrs[i].forEach(sub => {
        if (subArrs[0].includes(sub)) {
          changed = true;
        }
      });
      if (changed) {
        subArrs[i].forEach(sub => {
          if (!subArrs[0].includes(sub)) subArrs[0].push(sub);
        });
        subArrs = subArrs.slice(0, i).concat(subArrs.slice(i + 1));
        i--;
      }
    }
  }
  return subArrs[0].length;
};

console.log(largestComponentSize([2, 3, 4, 6]));
console.log(largestComponentSize([4,6,15,35]));
console.log(largestComponentSize([20,50,9,63]));
console.log(largestComponentSize([2,3,6,7,4,12,21,39]));
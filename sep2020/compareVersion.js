// versions are not empty and contain only numbers and periods
// 1 > 2  return 1, 1 < 2 return -1, 1 = 2 return 0
// 0 directly after . is ignored/removed
// not existent = 0 (1.0 === 1.0.0)

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  while (v1.length < v2.length) v1.push('0');
  while (v1.length > v2.length) v2.push('0');
  for (let i = 0; i < v1.length; i++) {
    if (Number(v1[i]) > Number(v2[i])) return 1;
    if (Number(v1[i]) < Number(v2[i])) return -1;
  }
  return 0;
};

console.log(compareVersion('0.1', '1.1')); // -1
console.log(compareVersion('1.0.1', '1')); // 1
console.log(compareVersion('7.5.2.4', '7.5.3')); // -1
console.log(compareVersion('1.01', '1.001')); // 0
console.log(compareVersion('1.0', '1.0.0')); // 0
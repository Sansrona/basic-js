const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let getObj = (str) => {
    let obj = {};
    str.split('').forEach(l => obj[l] ? obj[l]++ : obj[l] = 1);
    return obj;
  }
  let count = 0;
  let s1obj = getObj(s1);
  let s2obj = getObj(s2);
  for (let key in s1obj) {
    if (s2obj[key]) {
      count += Math.min(s1obj[key], s2obj[key]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

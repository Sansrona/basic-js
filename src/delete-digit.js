const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = String(n).split('');
  let arr = [];

  let removeDigit = function (d){
    let newNumber = [...numbers];
    newNumber.splice(d, 1);
    return +newNumber.join('');
  }
  numbers.forEach((n, i)=> arr.push(removeDigit(i)));
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};

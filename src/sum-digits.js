const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = n;
  let sum = 0;
  for (let i = `${res}`.length; i >= 1; i--) {
    if (res < 10) {
      sum += res;
      break;
    }
    sum += Math.floor(res / (10 ** (i - 1)));
    res -= (Math.floor(res / (10 ** (i - 1))) * (10 ** (i - 1)));
  }
  return sum >= 10 ? getSumOfDigits(sum) : sum;
}

module.exports = {
  getSumOfDigits
};

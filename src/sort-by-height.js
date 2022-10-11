const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = new Array(arr.length);
  if (arr.every(x => x === -1)) return arr;
  res = [...arr];
  let is = [];
  res.forEach((x, i) => {
    if (x === -1) is.push(i);
  });
  res = res.filter(x => x !== -1);
  res.sort((a, b) => a - b);
  is.forEach(x => { res.forEach((item, i, arr) => { if (x === i) arr.splice(i, 0, -1) }) })


  return res;
}

module.exports = {
  sortByHeight
};

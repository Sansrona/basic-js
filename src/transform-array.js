const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = [];
  let last = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next": if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') { i += 2; break; } i++; break;
      case "--discard-prev": newArr.pop(); break;
      case "--double-next": if (i < last) { newArr.push(arr[i + 1]); } break;
      case "--double-prev": if (i > 0) { newArr.push(arr[i - 1]); } break;
      default: newArr.push(arr[i]); break;
    }
  }
  return newArr;
}

module.exports = {
  transform
};

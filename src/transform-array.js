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
  let newArr = [...arr];
  let last = newArr.length - 1;
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case '--discard-prev': i === 0 || i === last ? newArr.splice(i, 1) : newArr.splice(--i, 2);continue;
      case '--double-next':  i === last ? newArr.splice(i, 1) : newArr.splice(i, 1, arr[++i]);continue
      case '--double-prev':  i === 0 || i === last ? newArr.splice(i, 1) : newArr.splice(i, 1, arr[--i]);continue;
      case '--discard-next': if(newArr[i+2] ==='--double-prev' || newArr[i+2]==='--discard-prev') {newArr.splice(i, 3);continue} i === last ? newArr.splice(i, 1) : newArr.splice(i, 2);  continue;
      default: continue;
    }
  }
  // for (let i = 0; i < newArr.length; i++) {
  //   switch (newArr[i]) {
  //     case '--discard-prev':
  //       if (i > 0) {
  //         newArr.splice(i - 1, 1);
  //         i--;
  //       }
  //       isCommand = true;
  //       break;
  //     case '--double-next':
  //       if (i < newArr.length - 1) newArr.splice(i + 1, 0, arr[i + 1]);
  //       isCommand = true;
  //       break;
  //     case '--double-prev':
  //       if (i > 0) {
  //         newArr.splice(i - 1, 0, arr[i - 1]);
  //         i++;
  //       }
  //       isCommand = true;
  //       break;
  //     case '--discard-next':
  //       if (i < arr.length - 1) newArr.splice(i + 1, 1);
  //       isCommand = true;
  //       break;
  //   }
  //   if (isCommand) {
  //     newArr.splice(i, 1);
  //     i--;
  //     isCommand = false;
  //   }
  // }
  return newArr;
}

module.exports = {
  transform
};

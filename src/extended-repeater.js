const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let myStr = String(str);
  let myAddition = String(addition);
  let myAdd;
  let res = str;
  let lastIndexOfSep = 0;
  if (addition !== undefined) {
    myAdd = myAddition.repeat(additionRepeatTimes);
    myAdd = myAdd.replaceAll(myAddition, `${myAddition}${additionSeparator}`);
    lastIndexOfSep = myAdd.lastIndexOf(additionSeparator);
    myAdd = myAdd.slice(0, lastIndexOfSep);
    res = `${str}${myAdd}`;
  }
  myStr = myStr.repeat(repeatTimes);
  let result = myStr.replaceAll(str, res).replaceAll(res, `${res}${separator}`);

  let index = result.lastIndexOf(separator);
  return result.slice(0, index);
}

module.exports = {
  repeater
};

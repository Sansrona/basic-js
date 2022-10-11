const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = domains.map(x => x.split('.')).map(function (x) {
    let text = `.${x.at(-1)}`;
    let res = [...x];
    for (let i = x.length - 2; i >= 0; i--) {
      res[i] = `${text}.${x[i]}`;
      text = res[i];
    }

    return [...res.splice(0, res.length-1), `.${x.at(-1)}`];
  });
  let acc = {};
  res.forEach(y => y.forEach(x => { acc[x] = acc[x] ? acc[x] + 1 : 1 }))
  return acc;

}

module.exports = {
  getDNSStats
};

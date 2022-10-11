const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    let spaces = [];
    let myKey = key.toLowerCase();
    let res = [];
    [...msg].forEach((x, i) => { x === ' ' && spaces.push(i) });
    let myMsg = msg.replaceAll(' ', '');
    myMsg = myMsg.toLowerCase();

    while (myKey.length < myMsg.length) {
      myKey += key.toLowerCase();
    }
    myKey = myKey.substring(0, myMsg.length);
    for (let i = 0; i < myMsg.length; i++) {
      if (!this.alphabet.includes(myMsg[i])) {
        res.push(myMsg[i]);
        continue;
      }
      let newLetterIndex = this.alphabet.indexOf(myMsg[i]) + this.alphabet.indexOf(myKey[i]);
      newLetterIndex = newLetterIndex > 25 ? Math.abs(26 - newLetterIndex) : newLetterIndex;
      res.push(this.alphabet[newLetterIndex].toUpperCase());
    }
    spaces.forEach((x) => { res.forEach((lt, i) => { if (x === i) res.splice(i, 0, ' ') }) })
    if (this.type === true || this.type) {
      return res.join('');
    }
    return res.reverse().join('');
  }
  decrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    let spaces = [];
    let myKey = key.toLowerCase();
    let res = [];
    [...msg].forEach((x, i) => { x === ' ' && spaces.push(i) });
    let myMsg = msg.replaceAll(' ', '');
    myMsg = myMsg.toLowerCase();
    while (myKey.length < myMsg.length) {
      myKey += key.toLowerCase();
    }
    myKey = myKey.substring(0, myMsg.length);
    for (let i = 0; i < myMsg.length; i++) {
      if (!this.alphabet.includes(myMsg[i])) {
        res.push(myMsg[i]);
        continue;
      }
      let newLetterIndex = this.alphabet.indexOf(myMsg[i]) - this.alphabet.indexOf(myKey[i]);
      newLetterIndex = newLetterIndex < 0 ? 26 + newLetterIndex : newLetterIndex;
      if (newLetterIndex > 25 || newLetterIndex < 0) return 'ahtung';
      res.push(this.alphabet[newLetterIndex].toUpperCase());

    }
    spaces.forEach((x) => { res.forEach((lt, i) => { if (x === i) res.splice(i, 0, ' ') }) })

    if (this.type === true || this.type) {
      return res.join('');
    }

    return res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

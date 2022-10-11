const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value = `( ${value} )`;
    this.arr.push(value);

    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position < this.arr.length + 1 && position > 0) {
      this.arr.splice(position - 1, 1);
      return this;
    }
    this.arr = [];
    throw new Error("You can\'t remove incorrect link!");

  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let newArr = [...this.arr];
    this.arr = [];
    return newArr.join(`~~`);
  }
};

module.exports = {
  chainMaker
};

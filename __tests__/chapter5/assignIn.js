const assignIn = require('lodash/assignIn');

function A() {
  this.v1 = 1;
}

A.prototype.v2 = 'a';

describe('assignIn', () => {
  it('should assign inherited properties', () => {
    let result = assignIn({a: 0}, new A());
    expect(result).toEqual({a: 0, v1: 1, v2: 'a'});
  });
});
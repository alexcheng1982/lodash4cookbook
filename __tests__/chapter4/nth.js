const nth = require('lodash/nth');

describe('nth', () => {
  it('should get the nth element', () => {
    let array = ['a', 'b', 'c'];
    expect(nth(array, 1)).toEqual('b');
    expect(nth(array, -1)).toEqual('c');
  });
});
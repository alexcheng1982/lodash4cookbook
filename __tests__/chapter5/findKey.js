const findKey = require('lodash/findKey');
const findLastKey = require('lodash/findLastKey');

describe('findKey', () => {
  it('should find the key', () => {
    let object = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(findKey(object, val => val > 1)).toEqual('b');
    expect(findLastKey(object, val => val > 1)).toEqual('c');
  });
});
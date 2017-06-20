const join = require('lodash/join');

describe('join', () => {
  it('should create strings', () => {
    expect(join([1, 2, 3])).toEqual('1,2,3');
    expect(join([1, 2, 3], '#')).toEqual('1#2#3');
  });
});
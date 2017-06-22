const lowerCase = require('lodash/lowerCase');

describe('lowerCase', () => {
  it('should convert strings to lower case', () => {
    expect(lowerCase('AB CD EF')).toEqual('ab cd ef');
    expect(lowerCase('AB#CD_EF')).toEqual('ab cd ef');
    expect(lowerCase('AbcDeF')).toEqual('abc de f');
  });
});
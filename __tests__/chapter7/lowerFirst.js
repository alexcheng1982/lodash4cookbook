const lowerFirst = require('lodash/lowerFirst');

describe('lowerFirst', () => {
  it('should convert the first character to lower case', () => {
    expect(lowerFirst('AB CD EF')).toEqual('aB CD EF');
  });
});
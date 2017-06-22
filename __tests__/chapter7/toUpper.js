const toUpper = require('lodash/toUpper');

describe('toUpper', () => {
  it('should convert strings to upper case', () => {
    expect(toUpper('ab cd ef')).toEqual('AB CD EF');
    expect(toUpper('ab#cd_ef')).toEqual('AB#CD_EF');
    expect(toUpper('abCdEf')).toEqual('ABCDEF');
  });
});
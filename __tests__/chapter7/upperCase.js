const upperCase = require('lodash/upperCase');

describe('upperCase', () => {
  it('should convert strings to upper case', () => {
    expect(upperCase('ab cd ef')).toEqual('AB CD EF');
    expect(upperCase('ab#cd_ef')).toEqual('AB CD EF');
    expect(upperCase('abCdEf')).toEqual('AB CD EF');
  });
});
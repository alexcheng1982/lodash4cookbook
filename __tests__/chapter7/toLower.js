const toLower = require('lodash/toLower');

describe('toLower', () => {
  it('should convert strings to lower case', () => {
    expect(toLower('AB CD EF')).toEqual('ab cd ef');
    expect(toLower('AB#CD_EF')).toEqual('ab#cd_ef');
    expect(toLower('abCdEf')).toEqual('abcdef');
  });
});
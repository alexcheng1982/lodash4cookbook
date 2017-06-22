const upperFirst = require('lodash/upperFirst');

describe('upperFirst', () => {
  it('should convert the first character to upper case', () => {
    expect(upperFirst('ab cd ef')).toEqual('Ab cd ef');
  });
});
const pick = require('lodash/pick');
const pickBy = require('lodash/pickBy');
const isNumber = require('lodash/isNumber');

describe('pick', () => {
  it('should pick object properties', () => {
    let result = pick({a: 1, b: 2}, 'a');
    expect(result).toEqual({a: 1});

    result = pickBy({a: 'hello', b: 2}, isNumber);
    expect(result).toEqual({b: 2});
  });
});
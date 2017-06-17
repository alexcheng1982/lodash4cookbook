const reduceRight = require('lodash/reduceRight');
const reduce = require('lodash/reduce');

describe('reduceRight', () => {
  it('should support strings', () => {
    let result = reduceRight('hello',
      (accumulator, value) => accumulator.toUpperCase() + value);
    expect(result).toEqual('OLLEh');

    result = reduce('hello',
      (accumulator, value) => accumulator.toUpperCase() + value);
    expect(result).toEqual('HELLo');
  });
});
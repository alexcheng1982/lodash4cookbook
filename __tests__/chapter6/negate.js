const negate = require('lodash/negate');
const filter = require('lodash/filter');

describe('negate', () => {
  it('should negate predicates', () => {
    let predicate = n => n > 2;
    let result = filter([1, 2, 3, 4, 5], predicate);
    expect(result).toEqual([3, 4, 5]);
    result = filter([1, 2, 3, 4, 5], negate(predicate));
    expect(result).toEqual([1, 2]);
  });
});
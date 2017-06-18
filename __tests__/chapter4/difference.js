const difference = require('lodash/difference');
const differenceBy = require('lodash/differenceBy');
const differenceWith = require('lodash/differenceWith');

describe('difference', () => {
  it('should support difference', () => {
    let result = difference([1, 2, 3], [3]);
    expect(result).toEqual([1, 2]);

    result = difference([1, 2, 3], [2], [1]);
    expect(result).toEqual([3]);
  });

  it('should support differenceBy', () => {
    let result = differenceBy(
      [{'name': 'Alex'}, {'name': 'Bob'}], [{'name': 'Alex'}],
      'name');
    expect(result).toEqual([{'name': 'Bob'}]);  
  });

  it('should support differenceWith', () => {
    let result = differenceWith(
      [{'name': 'Bob'}], [{'name': 'Tim'}],
      (v1, v2) => v1.name.length == v2.name.length);
    expect(result).toEqual([]);  
  });
});
const xor = require('lodash/xor');
const xorBy = require('lodash/xorBy');
const xorWith = require('lodash/xorWith');

describe('xor', () => {
  it('should support xor', () => {
    let result = xor([1, 2, 3], [3, 4, 5]);
    expect(result).toEqual([1, 2, 4, 5]);

    result = xor([1, 2, 3], [2, 4, 5], [3, 4, 5]);
    expect(result).toEqual([1]);
  });

  it('should support xorBy', () => {
    let result = xorBy(
      [{'name': 'Alex'}, {'name': 'Bob'}], [{'name': 'Alex'}],
      'name');
    expect(result).toEqual([{'name': 'Bob'}]);
  });

  it('should support xorWith', () => {
    let result = xorWith(
      [{'name': 'Bob'}], [{'name': 'Tim'}],
      (v1, v2) => v1.name.length == v2.name.length);
    expect(result).toEqual([]);  
  });
});
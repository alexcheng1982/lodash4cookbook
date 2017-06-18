const union = require('lodash/union');
const unionBy = require('lodash/unionBy');
const unionWith = require('lodash/unionWith');

describe('union', () => {
  it('should support union', () => {
    let result = union([1, 2, 3], [4, 3, 5], [1, 4]);
    expect(result).toEqual([1, 2, 3, 4, 5]);

    result = union([1], 2, 3);
    expect(result).toEqual([1]);
  });

  it('should support unionBy', () => {
    let result = unionBy(
      [{'name': 'Alex'}], [{'name': 'Bob'}, {'name': 'Alex'}],
      'name');
    expect(result).toEqual([{'name': 'Alex'}, {'name': 'Bob'}]);  
  });

  it('should support unionWith', () => {
    let result = unionWith(
      [{'name': 'Alex'}], [{'name': 'David'}, {'name': 'Marry'}],
      (v1, v2) => v1.name.length === v2.name.length);
    expect(result).toEqual([{'name': 'Alex'}, {'name': 'David'}]);  
  });
});
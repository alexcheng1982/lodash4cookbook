const flatMap = require('lodash/flatMap');
const flatMapDeep = require('lodash/flatMapDeep');

describe('flatMap', () => {
  it('should support basic operation', () => {
    const map = value => [value + 1, value - 1];
    let result = flatMap([1, 2], map);
    expect(result).toEqual([2, 0, 3, 1]);
  });

  it('should support recursion', () => {
    const map = value => [[value + 1], [value - 1]];
    let result = flatMap([1, 2], map);
    expect(result).toEqual([[2], [0], [3], [1]]);
    
    result = flatMapDeep([1, 2], map);
    expect(result).toEqual([2, 0, 3, 1]);
  });
});
const partition = require('lodash/partition');
const fruits = require('./fruits.json');

describe('partition', () => {
  it('should support arrays', () => {
    let result = partition(['a', 'b', 'c'], char => char > 'a');
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(['b', 'c']);
    expect(result[1]).toEqual(['a']);
  });

  it('should support predicate syntax', () => {
    let result = partition(fruits, 'onSale');
    expect(result.length).toBe(2);
    expect(result[0].length).toBe(1);
    expect(result[1].length).toBe(2);
  });

  it('should support strings', () => {
    let result = partition('hello', char => char > 'l');
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(['o']);
    expect(result[1]).toEqual(['h', 'e', 'l', 'l']);
  });
});
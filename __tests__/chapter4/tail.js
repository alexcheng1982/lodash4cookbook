const tail = require('lodash/tail');

describe('tail', () => {
  it('should support arrays with more than one elements', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  it('should support arrays with one element', () => {
    expect(tail([1])).toEqual([]);
  });

  it('should support empty arrays', () => {
    expect(tail([])).toEqual([]);
  });
});
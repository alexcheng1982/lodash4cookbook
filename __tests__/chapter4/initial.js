const initial = require('lodash/initial');

describe('initial', () => {
  it('should support arrays with more than one elements', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  it('should support arrays with one element', () => {
    expect(initial([1])).toEqual([]);
  });

  it('should support empty arrays', () => {
    expect(initial([])).toEqual([]);
  });
});
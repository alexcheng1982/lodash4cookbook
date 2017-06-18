const pull = require('lodash/pull');

describe('pull', () => {
  it('should remove elements', () => {
    let array = [1, 2, 3, 4, 5];
    let result = pull(array, 1, 2);
    expect(result).toEqual([3, 4, 5]);
    expect(array).toEqual([3, 4, 5]);
  });
});
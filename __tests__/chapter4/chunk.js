const chunk = require('lodash/chunk');

describe('chunk', () => {
  it('should split arrays into groups', () => {
    let result = chunk([1, 2, 3]);
    expect(result).toEqual([[1], [2], [3]]);

    result = chunk([1, 2, 3], 2);
    expect(result).toEqual([[1, 2], [3]]);
  });
});
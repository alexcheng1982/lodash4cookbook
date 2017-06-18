const fill = require('lodash/fill');

describe('fill', () => {
  it('should fill values', () => {
    let array = Array(5);
    fill(array, 3);
    expect(array).toEqual([3, 3, 3, 3, 3]);

    fill(array, 4, 2, 4);
    expect(array).toEqual([3, 3, 4, 4, 3]);
  });
});
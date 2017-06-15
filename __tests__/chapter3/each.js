const each = require('lodash/each');

describe('each', () => {
  it('should support basic iteration', () => {
    let sum = 0;
    each([1, 2, 3], val => sum += val);
    expect(sum).toEqual(6);
  });
});
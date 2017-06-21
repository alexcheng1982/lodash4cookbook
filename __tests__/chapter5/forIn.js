const forIn = require('lodash/forIn');

describe('forIn', () => {
  it('should iterate object properties', () => {
    let object = {
      a: 1,
      b: 2,
      c: 3,
    };
    let sum = 0;
    forIn(object, value => sum += value);
    expect(sum).toEqual(6);
  });
});
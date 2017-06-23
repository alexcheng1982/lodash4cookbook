const castArray = require('lodash/castArray');

describe('castArray', () => {
  it('should convert to arrays', () => {
    expect(castArray(0)).toEqual([0]);
    expect(castArray(null)).toEqual([null]);
    expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
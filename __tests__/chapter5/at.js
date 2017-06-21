const at = require('lodash/at');

describe('at', () => {
  it('should get property values as array', () => {
    let object = {a: 1, b: 2};
    expect(at(object, 'a', 'b')).toEqual([1, 2]);
  });
});
const has = require('lodash/has');

describe('has', () => {
  it('should check existence of properties', () => {
    let object = {a: 1};
    expect(has(object, 'a')).toBe(true);
  });
});
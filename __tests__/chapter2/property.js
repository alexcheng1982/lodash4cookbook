const property = require('lodash/property');

describe('property', () => {
  it('should extract property value', () => {
    let f = property('name');
    expect(f({name: 'Alex'})).toBe('Alex');
  });
});
const matchesProperty = require('lodash/matchesProperty');

describe('matchesProperty', () => {
  it('should match property name', () => {
    let f = matchesProperty('name', 'Alex');
    expect(f({name: 'Alex'})).toBe(true);
  });

  it('should match built-in property', () => {
    let f = matchesProperty('length', 5);
    expect(f('hello')).toBe(true);
  });

  it('should match nested path', () => {
    let f = matchesProperty('user.name', 'Alex');
    expect(f({user: {name: 'Alex'}})).toBe(true);
  });
});
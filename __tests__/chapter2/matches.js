const matches = require('lodash/matches');

describe('matches', () => {
  it('should match strings', () => {
    let f = matches('hello');
    expect(f('world')).toBe(false);
    expect(f('hello')).toBe(true);
  });

  it('should match objects', () => {
    let f = matches([{a: 1}, {b: 2}]);
    expect(f([{a: 1}, {b: 3}])).toBe(false);
  });
});
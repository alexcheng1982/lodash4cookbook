const overSome = require('lodash/overSome');
const matchesProperty = require('lodash/matchesProperty');

describe('overSome', () => {
  it('should check if any predicate matches', () => {
    let func = overSome(
      matchesProperty('name', 'Alex'),
      matchesProperty('age', 30),
    );
    expect(func({
      name: 'Alex',
      age: 28,
    })).toBe(true);
  });
});
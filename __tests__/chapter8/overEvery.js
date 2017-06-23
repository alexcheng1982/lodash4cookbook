const overEvery = require('lodash/overEvery');
const matchesProperty = require('lodash/matchesProperty');

describe('overEvery', () => {
  it('should check if all predicates match', () => {
    let func = overEvery(
      matchesProperty('name', 'Alex'),
      matchesProperty('age', 30),
    );
    expect(func({
      name: 'Alex',
      age: 30,
    })).toBe(true);
  });
});
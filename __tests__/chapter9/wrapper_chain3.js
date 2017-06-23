const _ = require('lodash');
const users = require('./users.json');

describe('chain', () => {
  it('should chain operations', () => {
    expect(
      _(users)
        .filter(user => user.age >= 18)
        .map('age')
        .first()
    ).toEqual(30);
  });

  it('should chain operations explicitly', () => {
    expect(
      _.chain(users)
        .filter(user => user.age >= 18)
        .map('age')
        .first()
        .value()
      ).toBe(30);
  });
});
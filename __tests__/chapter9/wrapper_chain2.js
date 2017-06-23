const _ = require('lodash');
const users = require('./users.json');

describe('chain', () => {
  it('should chain operations', () => {
    expect(
      _(users)
        .filter(user => user.age >= 18)
        .map('age')
        .reduce((total, val) => total + val)
    ).toEqual(57);
  });
});
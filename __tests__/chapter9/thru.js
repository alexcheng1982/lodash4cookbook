const _ = require('lodash');
const users = require('./users.json');

describe('thru', () => {
  it('should return the intercepted result', () => {
    expect(
      _(users)
        .filter(user => user.age >= 18)
        .thru(users => [users.pop()])
        .map('name')
        .value()
    ).toEqual(['David']);
  });
});
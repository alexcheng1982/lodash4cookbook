const _ = require('lodash');
const users = require('./users.json');

describe('tap', () => {
  it('should tap into the chain', () => {
    expect(
      _(users)
        .filter(user => user.age >= 18)
        .tap(users => users.pop())
        .map('name')
        .value()
    ).toEqual(['Alex']);
  });
});
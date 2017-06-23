const _ = require('lodash');
const users = require('./users.json');

describe('chain', () => {
  it('should chain operations using array methods', () => {
    expect(
      _(users)
        .filter(user => user.age >= 18)
        .map('name')
        .join(',')
    ).toEqual('Alex,David');
  });
});
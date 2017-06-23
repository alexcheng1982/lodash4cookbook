const filter = require('lodash/filter');
const map = require('lodash/map');
const users = require('./users.json');

describe('chain', () => {
  it('should chain operations', () => {
    expect(map(
      filter(users, user => user.age >= 18),
      'name')
    ).toEqual(['Alex', 'David']);
  });
});
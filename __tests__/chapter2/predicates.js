const find = require('lodash/find');
const users = require('./users.json');

describe('find with different predicates', () => {
  it('should find with a function', () => {
    let user = find(users, function(user) {
      return user.age > 18;
    });
    expect(user).toBeDefined();
    expect(user.name).toBe('Alex');
  });

  it('should find with a property value', () => {
    let user = find(users, 'is_premium');
    expect(user).toBeDefined();
    expect(user.name).toBe('Bob');
  });

  it('should find with an object', () => {
    let user = find(users, { name: 'Alex' });
    expect(user).toBeDefined();
    expect(user.name).toBe('Alex');
  });
});
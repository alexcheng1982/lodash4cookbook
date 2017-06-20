const zipObjectDeep = require('lodash/zipObjectDeep');

describe('zipObjectDeep', () => {
  it('should support property paths', () => {
    let result = zipObjectDeep(
      ['user.name', 'user.email'], 
      ['alex', 'alex@example.com']);
    expect(result).toEqual(
      {user: {name: 'alex', email: 'alex@example.com'}});  
  });
});
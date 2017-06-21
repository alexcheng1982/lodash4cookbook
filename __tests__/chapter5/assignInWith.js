const assignInWith = require('lodash/assignInWith');
const isString = require('lodash/isString');

describe('assignInWith', () => {
  it('should customize the assigned value', () => {
    let result = assignInWith(
      {'v1': 'Alex', 'v2': 20},
      {'v1': 30, 'v2': 'Bob'},
      (objValue, srcValue) => isString(objValue) ? objValue : srcValue);
    expect(result).toEqual({'v1': 'Alex', 'v2': 'Bob'});  
  });
});
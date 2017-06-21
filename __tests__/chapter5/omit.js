const omit = require('lodash/omit');
const omitBy = require('lodash/omitBy');
const isNumber = require('lodash/isNumber');

describe('omit', () => {
  it('should omit object properties', () => {
    let result = omit({a: 1, b: 2}, 'a');
    expect(result).toEqual({b: 2});

    result = omitBy({a: 'hello', b: 2}, isNumber);
    expect(result).toEqual({a: 'hello'});
  });
});
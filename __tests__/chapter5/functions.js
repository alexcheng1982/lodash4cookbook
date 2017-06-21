const functions = require('lodash/functions');

describe('functions', () => {
  it('should list function names', () => {
    let obj = {
      func1: function() {},
      func2: function() {},
    };

    expect(functions(obj)).toEqual(['func1', 'func2']);
  });
});
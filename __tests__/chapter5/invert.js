const invert = require('lodash/invert');

describe('invert', () => {
  it('should invert properties and values', () => {
    let object = {'a': true, 'b': false, 'c': true};
    expect(invert(object)).toEqual({true: 'c', false: 'b'});
  });
});
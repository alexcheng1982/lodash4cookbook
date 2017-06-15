const findLast = require('lodash/findLast');

describe('findLast', () => {
  it('should support strings', () => {
    expect(findLast('hello', char => char < 'f')).toEqual('e');
  });
});
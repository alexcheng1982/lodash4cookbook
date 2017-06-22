const escape = require('lodash/escape');

describe('escape', () => {
  it('should escape special HTML characters', () => {
    expect(escape('3 > 2')).toEqual('3 &gt; 2');
  });
});
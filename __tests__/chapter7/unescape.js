const unescape = require('lodash/unescape');

describe('unescape', () => {
  it('should unescape special HTML characters', () => {
    expect(unescape('3 &gt; 2')).toEqual('3 > 2');
  });
});
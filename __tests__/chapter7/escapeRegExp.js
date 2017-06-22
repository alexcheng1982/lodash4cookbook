const escapeRegExp = require('lodash/escapeRegExp');

describe('escapeRegExp', () => {
  it('should escape special regular expression characters', () => {
    expect(escapeRegExp('[hello]')).toEqual('\\[hello\\]');
  });
});
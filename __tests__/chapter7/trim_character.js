const trim = require('lodash/trim');
const trimStart = require('lodash/trimStart');
const trimEnd = require('lodash/trimEnd');

describe('trim characters', () => {
  it('should trim strings using characters', () => {
    expect(trim('hello world', 'hi')).toEqual('ello world');
    expect(trimStart('hello world', 'hi')).toEqual('ello world');
    expect(trimEnd('hello world', 'old')).toEqual('hello wor');
  });
});
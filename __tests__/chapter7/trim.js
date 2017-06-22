const trim = require('lodash/trim');
const trimStart = require('lodash/trimStart');
const trimEnd = require('lodash/trimEnd');

describe('trim', () => {
  it('should trim strings', () => {
    expect(trim(' hello ')).toEqual('hello');
    expect(trim('*hello*', '*')).toEqual('hello');
    expect(trimStart('*hello*', '*')).toEqual('hello*');
    expect(trimEnd('*hello*', '*')).toEqual('*hello');
  });
});
const pad = require('lodash/pad');
const padStart = require('lodash/padStart');
const padEnd = require('lodash/padEnd');

describe('pad', () => {
  it('should pad strings', () => {
    expect(pad('hello', 8, '*')).toEqual('*hello**');
    expect(pad('hello', 9, '+-+')).toEqual('+-hello+-');
    expect(padStart('hello', 9, '+-+')).toEqual('+-++hello');
    expect(padEnd('hello', 9, '+-+')).toEqual('hello+-++');
  });
});
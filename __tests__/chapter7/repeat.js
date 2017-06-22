const repeat = require('lodash/repeat');

describe('repeat', () => {
  it('should repeat strings', () => {
    expect(repeat('hello')).toEqual('hello');
    expect(repeat('hello', 2)).toEqual('hellohello');
  });
});
const words = require('lodash/words');

describe('words', () => {
  it('should split strings into words', () => {
    expect(words('hello world')).toEqual(['hello', 'world']);
    expect(words('hello world', 'w')[0]).toEqual('w');
  });
});
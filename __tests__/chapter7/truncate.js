const truncate = require('lodash/truncate');

describe('truncate', () => {
  it('should truncate strings', () => {
    let result = truncate('The quick brown fox jumps over the lazy dog');
    expect(result).toEqual('The quick brown fox jumps o...');

    result = truncate('The quick brown fox jumps over the lazy dog', {
      length: 10,
    });
    expect(result).toEqual('The qui...');

    result = truncate('The quick brown fox jumps over the lazy dog', {
      length: 20,
      omission: ' [more]',
    });
    expect(result).toEqual('The quick bro [more]');

    result = truncate('The quick brown fox jumps over the lazy dog', {
      length: 20,
      omission: ' [more]',
      separator: ' '
    });
    expect(result).toEqual('The quick [more]');

    result = truncate('The quick brown fox jumps over the lazy dog', {
      omission: ' [more]',
      separator: /\W/
    });
    expect(result).toEqual('The quick brown fox [more]');
  });
});
const reject = require('lodash/reject');

describe('reject', () => {
  it('should support arrays', () => {
    let result = reject(['a', 'b', 'c'], c => c > 'b');
    expect(result).toEqual(['a', 'b']);
  });
});
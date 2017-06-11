const some = require('lodash/some');

describe('some', () => {
  it('should support arrays', () => {
    let result = some([1, 2, 3, 4], n => n % 2 === 0);
    expect(result).toBe(true);
  });

  it('should support strings', () => {
    let result = some('hello', c => c === 'x');
    expect(result).toBe(false);
  });
});
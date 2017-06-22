const startsWith = require('lodash/startsWith');
const endsWith = require('lodash/endsWith');

describe('startsWith & endsWith', () => {
  it('should search from the start of strings', () => {
    expect(startsWith('hello', 'he')).toBe(true);
    expect(startsWith('hello', 'he', 1)).toBe(false);
  });

  it('should search from the end of strings', () => {
    expect(endsWith('hello', 'o')).toBe(true);
    expect(endsWith('hello', 'he')).toBe(false);
  });
});
const toPath = require('lodash/toPath');

describe('toPath', () => {
  it('should convert to property paths', () => {
    expect(toPath('x.y.z')).toEqual(['x', 'y', 'z']);
    expect(toPath('a[0].b')).toEqual(['a', '0', 'b']);
  });
});
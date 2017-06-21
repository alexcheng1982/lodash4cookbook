const once = require('lodash/once');

describe('once', () => {
  it('should invoke functions once', () => {
    let i = 0;
    let getId = () => i++;
    let func = once(getId);
    expect(func()).toEqual(0);
    expect(func()).toEqual(0);
  });
});
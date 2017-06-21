const before = require('lodash/before');

describe('before', () => {
  it('should limit the function invocation times', () => {
    let countdown = num => () => num--;
    let func = before(4, countdown(3));
    expect(func()).toEqual(3);
    expect(func()).toEqual(2);
    expect(func()).toEqual(1);
    expect(func()).toEqual(1);
    expect(func()).toEqual(1);
  });
});
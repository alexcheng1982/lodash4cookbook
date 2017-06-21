const flow = require('lodash/flow');
const flowRight = require('lodash/flowRight');

describe('flow', () => {
  it('should invoke functions in sequence', () => {
    let addBy10 = a => a + 10;
    let multiplyBy10 = a => a * 10;

    let func = flow(addBy10, multiplyBy10);
    expect(func(1)).toEqual(110);
    
    func = flowRight(addBy10, multiplyBy10);
    expect(func(1)).toEqual(20);
  });
});
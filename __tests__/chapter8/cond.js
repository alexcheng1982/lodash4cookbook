const cond = require('lodash/cond');
const matchesProperty = require('lodash/matchesProperty');
const constant = require('lodash/constant');

describe('cond', () => {
  it('should check the condition before invoking functions', () => {
    let func = cond([
      [v => v == 1, () => 'Hello!'],
      [matchesProperty('name', 'Alex'), () => 'Alex'],
      [constant(true), () => 'Always match']
    ]);

    expect(func(1)).toEqual('Hello!');
    expect(func({name: 'Alex'})).toEqual('Alex');
    expect(func('Hello')).toEqual('Always match');
  });
});
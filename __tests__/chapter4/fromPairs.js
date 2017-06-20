const fromPairs = require('lodash/fromPairs');

describe('fromPairs', () => {
  it('should create objects from key-value pairs', () => {
    let result = fromPairs([['name', 'Alex'], ['age', 30]]);
    expect(result).toEqual({'name': 'Alex', 'age': 30});
  });
});
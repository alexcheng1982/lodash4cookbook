const uniqBy = require('lodash/uniqBy');

describe('uniqBy', () => {
  it('should remove duplicates', () => {
    let result = uniqBy(
      [{'name': 'Alex'}, {'name': 'Bob'}, {'name': 'Alex'}],
      'name'
    );
    expect(result.length).toEqual(2);
  });
});
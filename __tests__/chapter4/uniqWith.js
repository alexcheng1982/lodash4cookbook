const uniqWith = require('lodash/uniqWith');

describe('uniqWith', () => {
  it('should remove duplicates', () => {
    let result = uniqWith(
      [{'name': 'Alex'}, {'name': 'David'}, {'name': 'Marry'}],
      (v1, v2) => v1.name.length === v2.name.length  
    );
    expect(result.length).toEqual(2);
  });
});
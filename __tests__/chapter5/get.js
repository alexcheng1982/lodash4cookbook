const get = require('lodash/get');

describe('get', () => {
  it('should get property value by path', () => {
    let obj = {
      a: 1,
      b: {
        c: ['alex', 'bob'],
        d: [
          {
            e: 1,
            f: 'hello',
          }
        ],
      }
    };
    expect(get(obj, 'a')).toEqual(1);
    expect(get(obj, 'b.c[1]')).toEqual('bob');
    expect(get(obj, 'b.d.g', 'empty')).toEqual('empty');
  });
});
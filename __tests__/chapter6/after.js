const after = require('lodash/after');

describe('after', () => {
  it('should invoke the target function', () => {
    let done = false;
    let markAsDone = () => done = true;
    let completeTask = after(3, markAsDone);
    completeTask();
    expect(done).toBe(false);
    completeTask();
    completeTask();
    expect(done).toBe(true);
  });
});
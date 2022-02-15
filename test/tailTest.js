const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    const arr = [1, 2, 3];
    assert.deepEqual(tail(arr), [2, 3]);
  });
  it("returns [6, 7] for [5, 6, 7]", () => {
    const arr = [5, 6, 7]
    assert.deepEqual(tail(arr), [6, 7]);
  });
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(arr), ["Lighthouse", "Labs"]);
  });
});

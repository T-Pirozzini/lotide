const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key of Object.keys(obj1)) {    
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual([1, 2, 3], [1, 2, 3]); // --> true
assertObjectsEqual([1, 2, 3], [2, 3, 3]); // --> false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual((ab, ba), { b: '2', a: '1' }); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual((ab, abc), { a: '1', b: '2', c: '3' }); // => false
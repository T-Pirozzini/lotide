const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {  
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  if (itemsToRemove.length === 0) return source;
  let newArray = [];
  source.forEach((item) => {
    itemsToRemove.forEach((itemToRemove) => {
      if (item === itemToRemove) {
        item = null;
      }
    });
    if (item !== null) newArray.push(item);
  });
  return newArray;
};

assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], ['fifty-two']), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [3, 1, 2]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);





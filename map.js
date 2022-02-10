const eqArrays = function(arr1, arr2) {
  //check if arrays are the same length
  if (arr1.length !== arr2.length) return false;
  // check if array index's match
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(arr, callback) {  
  const results = [];
  for (let item of arr) { 
    results.push(callback(item));   
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word.length -1), [5,6,1,4,2]);
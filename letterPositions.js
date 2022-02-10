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


const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (!Array.isArray(result[letter])) {
        result[letter] = [i];
      } else {
        result[letter].push(i);
      }
    }
  }
  console.log(result);
};

letterPositions("hello");
letterPositions("hello my friends at lighthouse");

// assertArraysEqual(letterPositions("hello").e, [1]);
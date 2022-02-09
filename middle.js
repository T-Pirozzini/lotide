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

const middle = function(arr) {
// initiate a new empty array
  let middleArr = [];
  let middleElements = Math.floor(arr.length / 2)
  // if an array has one or two elements, no middle - return empty array []
  if (arr.length <= 2) {
    return middleArr;
  }  
  // if an array has an even number of items, return middle two elements
  if (arr.length % 2 === 0) {
    middleArr[0] = arr[middleElements - 1];
    middleArr[1] = arr[middleElements];    
  }  
  // if array has an odd number of elements, one single element should be returned
  if (arr.length % 2 === 1) {
    middleArr[0] = arr[middleElements];
  }
  return middleArr;
};  


// TEST CODE
// write test assertions - use assertArraysEqual
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,8,9]), [4,5]);

console.log(middle([1,2]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5,6,8,9]));
//Does not work with strings
// console.log(middle(['hi','hello','hiyo','hiya','yo','sup','whats-up','pal','ciao']));
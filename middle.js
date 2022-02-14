const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let middleArr = [];
  let middleElements = Math.floor(arr.length / 2)  
  if (arr.length <= 2) {
    return middleArr;
  }    
  if (arr.length % 2 === 0) {
    middleArr[0] = arr[middleElements - 1];
    middleArr[1] = arr[middleElements];    
  }    
  if (arr.length % 2 === 1) {
    middleArr[0] = arr[middleElements];
  }
  return middleArr;
};  

module.exports = middle;
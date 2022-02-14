const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

// TEST CASES
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case 1: Check the returned array elements
const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result2[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// Test Case: Check the original array
const words2 = [];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// Test Case: Check the original array
const words3 = ["Yo Yo"];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const words4 = ["Yo Yo", "luigi", "mario", "link", "chun-li"];
tail(words4); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

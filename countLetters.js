const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  let result = {};
  for (const letter of str) {    
    if (letter !== " ") { // won't count spaces    
      if (result[letter]) { // if result already contains the letter        
        result[letter] += 1;
      } else { // if the result doesn;t contain the letter, create it
        result[letter] = 1;
      }
    }
  }  
  console.log(result);
};

countLetters("lighthouse in the house");


// assertEqual(countLetters("hello"));
// // assertEqual(result1["Karima"], undefined);
// // assertEqual(result1["Fang"], 2);
// // assertEqual(result1["Agouhanna"], undefined);




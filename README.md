# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @t.pirozzini/lotide`

**Require it:**

`const _ = require('@t.pirozzini/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual(actual, expected))`: asserts arrays
* `function2(assertEqual(actual, expected))`: asserts values
* `function3(assertObjectsEqual(actual, expected))`: asserts objects
* `function4(countLetters(str))`: counts letters in a string
* `function5(countOnly(allItems, itemsToCount))`: counts objects
* `function6(eqArrays(arr1, arr2))`: compares arrays
* `function7(eqObjects(obj1, obj2))`: compares objects
* `function8(findKeyByValue(object, value))`: returns object key value
* `function9(findKey(object, callback))`: return first key of object
* `function10(head(arr))`: returns first element of an array
* `function11(letterPositions(sentence))`: returns index of characters
* `function12(map(arr, callback))`: applies callback to each element
* `function13(middle(arr))`: returns middle element in an array
* `function14(tail(arr))`: returns the array without the first element
* `function15(takeUntil(array, callback))`: returns elementss until callback element
* `function16(withoutfunction(source, itemsToRemove))`: returns an array without the filtered items
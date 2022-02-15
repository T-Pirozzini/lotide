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

* `function1(assertArraysEqual(actual, expected))`: description
* `function2(...)`: description
* `function3(...)`: description
const assertArraysEqual = function(actual, expected):
const assertEqual = function(actual, expected):
const assertObjectsEqual = function(actual, expected):
const countLetters = function(str) {
const countOnly = function(allItems, itemsToCount) {
  const eqArrays = function(arr1, arr2) {
    const eqObjects = function(obj1, obj2) {
      const findKeyByValue = function(object, value) {
const findKey = (object, callback) => {
  const head = function(arr) {
  const letterPositions = function(sentence) {
    const map = function(arr, callback) { 
    const middle = function(arr) {
      const tail = function(arr) {
        const takeUntil = function(array, callback) {
    const without = function(source, itemsToRemove) {

  

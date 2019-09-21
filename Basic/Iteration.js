/**
  The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
  The for...of statement iterates over values that the iterable object defines to be iterated over.
 */

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

// for...in is built for iterating enumerable properties, not recommended for use with arrays
// applicable for Array, Map, String, Set, arguments
for (let i in iterable) {
  console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}


// Use for...of to iterate array instead
for (let i of iterable) {
  console.log(i); // 3, 5, 7
}

var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (let [key, value] of this.components) {
    console.log(key + " = " + value);
}
// 0 = zero
// 1 = one

// iterate each char in String, in ES6
for (const c of text) {
    console.log(c)
}

// iterate each char in String, in ES5
for (var i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
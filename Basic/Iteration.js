/**
  for...in iterates over the enumerable properties of an object, including inherited properties, in an arbitrary order.
    use obj.hasOwnProperty(property) to check if property is inherited 

  for...of iterates over values that the iterable object defines to be iterated over, e.g.. Array, String, Map, Set
    
 */

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let array = [3, 5, 7];
array.foo = 'hello';

// for...in is built for iterating enumerable properties, not recommended to use with arrays
// applicable for Array, Map, String, Set, arguments
for (let i in array) {
  console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in array) {
  if (array.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}


// Use for...of to iterate array instead
for (let i of array) {
  console.log(i); // 3, 5, 7
}

for (let [index, value] of array.entries()) {
  console.log(index, " : ", value);
}


var map = new Map();
map.set(0, "zero");
map.set(1, "one");

for (let [key, value] of map.entries()) {
    console.log(key + " = " + value);
}


const text = "test";

// iterate each char in String, in ES6
for (let c of text) {
    console.log(c)
}

// iterate each char in String, in ES5
for (var i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}
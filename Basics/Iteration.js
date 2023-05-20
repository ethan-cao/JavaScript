/**
  for...in iterates over the enumerable properties of an object, including inherited properties, in an arbitrary order.
    use obj.hasOwnProperty(property) to check if property is inherited 

  for...of iterates over values that the iterable object defines to be iterated over, e.g.. Array, String, Map, Set
    
 */

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let array = [3, 5, 7];
array.foo = 'hello';

// NOT FOR ARRAY!!! for...in is built for iterating enumerable properties
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

let set = new Set();
set.add("one")
   .add("two")
   .add("one");
   
for (let key of set.values()) {
    console.log(key); // insertion order. ["one", "two"]
}
// map is the same


const text = "test";

// iterate each char in String, in ES6
for (let c of text) {
    console.log(c)
}

// iterate each char in String, in ES5
for (var i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}


// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}



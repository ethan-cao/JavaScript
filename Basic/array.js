// deconstructing, array matching
// extract data[0] to a, data[2] to b
var data = [1, 2, 3, 4, 5];
// we can also var a, b outside
var [a, , b = 3, rest] = data; // b has default value
// a = 1, b = 3, rest = [4, 5]
console.log("before : " + a + " - " + b);



// Array deconstructing 
var [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

var [, , third] = ["foo", "bar", "baz"];
console.log(third); // "baz"

[b, a] = [a, b]; // swap a, b



// Array spread
const numbers = [1, 2, 3];
console.log("spread: ", ...numbers);
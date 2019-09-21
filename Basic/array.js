// deconstructing, array matching
// extract data[0] to a, data[2] to b
var data = [ 1, 2, 3, 4, 5];
// we can also var a, b outside
var [a, , b=3, rest] = data;  // b has default value
// a = 1, b = 3, rest = [4, 5]
console.log("before : " + a + " - " + b);

[ b, a ] = [ a, b ];  // exchange value of a and b
console.log("after: " + a + " - " + b);
// a = 3, b = 1


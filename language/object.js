var x = 0;
var f = x => x;

const s1 = Symbol("s1"); // returns a value of type symbol
const s2 = Symbol("s1"); 

// Every symbol value returned from Symbol() is unique
s1 === s2 // false
// used as an identifier for object properties; this is the data type's only purpose

let obj = { 
    a : 1,
    s1 : "symbol",
    x, // // Shorter syntax to assign x to same name property
    ["a" + f("b")] : 1,   // computed names, use [] to compute new key name
    foo (a) { // Support for method notation, foo : function(a)
        return a;
    },
    sub : {
        number : "number0"
    }
};  

console.log(obj);

// Object destructuring
var {a, x, sub:{number:N}, y=1, z} = obj; // y has default value, z is undefined
console.log("a : " + a + ", x : " + x + ", N: " + N +", y: " + y + ", z : "+ z);


var {a: A, x: X, y:Y=1} = obj;  // renaming, Y with default value
console.log("A : " + A + ", X : " + X + ", Y: " + Y);
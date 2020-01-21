const o = {
    a: 1,
    b: 2,
    c: 3
};

// Object destructuring, define variable a, b,c and their value equals to value that has the same key in object o;
const {a, b, c} = o;
// a = 1,  b = 2, c = 3;

// Object spread
const person = {
  name: 'Todd',
  age: 29,
};
const copyOfTodd = { ...person };  //  copyOfTodd = {name: "Todd", age: 29}

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
// var {a, x, sub:{number:N}, y=1, z} = obj; // y has default value, z is undefined
// console.log("a : " + a + ", x : " + x + ", N: " + N +", y: " + y + ", z : "+ z);


var {a: A, x: X, y:Y=1} = obj;  // renaming, Y with default value
console.log("A : " + A + ", X : " + X + ", Y: " + Y);


var dest = { quux: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };
Object.assign(dest, src1, src2);
dest.quux === 0
dest.foo  === 3;
dest.bar  === 2;
dest.baz  === 4;


/*
 * Immutability
 */

// obj1.number cannot be changed and cannont be deleted
let obj1 = {};
Object.defineProperty(obj1, "number", {
    value: 42,
    writable: false,      // true: allows the property's value to change
    configurable: false   // true: allows the property to be deleted, and type of this property descriptor can be changed 
});
console.log(obj1.number);  // 42

// cannot add new property to obj1, but can update obj1's existing proprety value
obj1 = {a:1};
Object.preventExtensions(obj1);
obj1.a = 2
obj1.b = 2;
console.log(obj1.a); // 2
console.log(obj1.b); // undefined

// can only update existing property's value
obj1 = {a:1};
Object.seal(obj1);   // equals to Object.preventExtensions(obj1) + make existing property configurable: false (canont be deleted)

// immutable, cannot add new property, cannot delete property, cannot udpate existing property
obj1 = {a:1};
Object.freeze(obj1);
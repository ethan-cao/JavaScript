const person = {
  name: 'Todd',
  age: 29,
};

console.log("name in person : " + ("name" in person)); // true

// Object spread
const copyOfTodd = { ...person };  //  copyOfTodd = {name: "Todd", age: 29}, shadow copy



var x = 0;
var f = x => x;

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

var { a: A, x: X, y: Y = 1 } = obj;  // assign a to A, x to X, y to Y with default value 1
console.log("A : " + A + ", X : " + X + ", Y: " + Y);


var dest = { quux: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };
Object.assign(dest, src1, src2);  
// dest.bar is 2, dest.baz is 4, dest.foo is 3, dest.quux is 0, // the later one takes precendence 


/*
 * Immutability
 */
// obj1.number cannot be changed and cannot be deleted
let obj1 = {};
Object.defineProperty(obj1, "number", {
    value: 42,
    writable: false,      // true: allows the property's value to change
    configurable: false   // true: allows the property to be deleted, and type of this property descriptor can be changed 
});
console.log(obj1.number);  // 42

// can update / remove existing property value
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
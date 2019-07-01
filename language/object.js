
var x = 0;
var f = x => x;

obj = { 
    a : 1,
    x, // // Shorter syntax to assign x to same name property
    ["a" + f("b")] : 1,   // computed names, use [] to compute new key name
    foo (a) { // Support for method notation
        return a;
    },
    sub : {
        number : "number0"
    }
};  

console.log(obj);

// Object destructuring
var {a, x, sub:{number:N}, y=1, z} = obj; // y has default value, z is undefined
console.log("a : " + a + ", x : " + x + ", N: " + N +", y: " + y + ", z : "+ z );


var {a: A, x: X, y:Y=1} = obj;  // renaming, Y with default value
console.log("A : " + A + ", X : " + X + ", Y: " + Y);
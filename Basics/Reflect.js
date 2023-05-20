/*
Reflect is a built-in object (just like Math object) that provides methods to
call methods, construct objects, getting and setting prototypes, manipulating and extending properties.

The methods are the same as those of proxy handlers
*/

// invoke a function
// Reflect.apply(target, thisArgument, argumentsList)
const f = (x) => console.log(x);

// equivalent 
f(2); 
Reflect.apply(f, null, [2]);  


// instantiate an object
// Reflect.construct(target, argumentsList[, newTarget])
function constructFX(a, b, c) {
  this.sum = a + b + c;
}

// equivalent
const obj1 = new constructFX(1,2,3);
const obj2 = Reflect.construct(constructFX, [1,2,3]);
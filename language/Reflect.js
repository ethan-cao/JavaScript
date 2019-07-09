/*
Reflect is a built-in object (just like Math object) that provides methods to
call methods, construct objects, getting and setting prototypes, manipulating and extending properties.

The methods are the same as those of proxy handlers
*/



// Reflect.apply(target, thisArgument, argumentsList)
var f = (x) => console.log(x);
Reflect.apply(f, null, [2]);


// Reflect.construct(target, argumentsList[, newTarget])
function constructFX(a, b, c) {
  this.sum = a + b + c;
}

const obj1 = new constructFX(1,2,3);
console.log(obj1);

const obj2 = Reflect.construct(constructFX, [1,2,3]);
console.log(obj2);

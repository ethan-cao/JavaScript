// How do you clone an object 


/**
 * Shallow copy
 */

// Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object.
// prototypes are ignored. and, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }


 
/**
 * Deep copy
 */

// deep-clone a simple object, CPU-intensive and only accepts valid JSON
JSON.parse(JSON.stringify(obj));

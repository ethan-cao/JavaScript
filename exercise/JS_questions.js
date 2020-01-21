/*--------------------------------------------------------------------------------------------
Create a function bind that is functionally equivalent to the method Function.prototype.bind.

const boundExample = bind(example, {a: true});
boundExample.call({b: true});  // logs { a: true }
*/
const bind = (fn, context) => (...args) => fn.apply(context, args);

let f = function() { console.log(this.name); }
let newF = bind(f, {name: "Ethan"});
newF();  // Ethan


/*--------------------------------------------------------------------------------------------
Create a function pipe that performs left-to-right function composition by returning a function that accepts 1 argument
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19;   addOne(double(square(3)))
*/

const pipe = (...fxs) => (result = 0) => fxs.reduce((accumulator, fx) => fx(accumulator), result);

// reduce( (accumulator, currentValue, currentIndex, array) => {}, initialValue);


/*--------------------------------------------------------------------------------------------
make this work : duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
*/

const duplicate1 = function(arr) {
	return arr.concat(arr);
}

const duplicate2 = arr => [...arr, ...arr];


/*--------------------------------------------------------------------------------------------
 Create a for loop that iterates up to 100 while outputting 
  "fizz" at multiples of 3, 
  "buzz" at multiples of 5 
  "fizzbuzz" at multiples of 3 and 5
*/
const fizzbuzz = () => {
  const FIZZ = "fizz";
  const BUZZ = "buzz";

  for (let i = 1; i <= 100; ++i) {
	  const fizz = (i % 3 === 0);
    const buzz = (i % 5 === 0);

    let output = null;

    if (fizz && buzz) {
      output = FIZZ + BUZZ;
    } else if (fizz ) {
      output = FIZZ;
    } else if (buzz) {
      output = BUZZ;
    }

    if (output !== null) {
      console.log(i + " : " + output);
    }
  }
}


/*--------------------------------------------------------------------------------------------
create a function which can currry a function
*/
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return function(newArgument) {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]o


/*--------------------------------------------------------------------------------------------
Shallow copy
*/
// Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object.
// prototypes are ignored. and, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.
const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }


/*--------------------------------------------------------------------------------------------
Deep copy
 */
// deep-clone a simple object, CPU-intensive and only accepts valid JSON
JSON.parse(JSON.stringify(obj));


/*--------------------------------------------------------------------------------------------
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.

`batches(recipe, available)`

// 0 batches can be made
batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  )
  batches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
  )
  
  // 1 batch can be made
  batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  )
  
  // 2 batches can be made
  batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  )
*/

const batches = (recipe, available) =>
  Math.floor(
    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))
  )

/*--------------------------------------------------------------------------------------------
Debounce
 */


/*--------------------------------------------------------------------------------------------
Throttle
 */


/*--------------------------------------------------------------------------------------------
Pomise 
 */
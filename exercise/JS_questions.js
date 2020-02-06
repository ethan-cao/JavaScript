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

// reduce( (accumulator, currentValue, currentIndex, array) => {}, initialValue);
const pipe = (...fxs) => (result = 0) => fxs.reduce((accumulator, fx) => fx(accumulator), result);



/*--------------------------------------------------------------------------------------------
make this work : duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
*/

const duplicate1 = arr => arr.concat(arr);
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
create a function which can curry a function
*/
const add = (a, b) => a + b;

function curry(fx) {
	if (fx.length === 0){
		return;
	} 

	/* ...rest parameter */		
	const __curry = function(arity, ...args) {
		return function(__arg) {
			if (arity === 1) {
				/* ...spread */					
				return fx(...args, __arg);
			} else {
				/* ...spread */				
				return __curry(arity-1, ...args, __arg);
			}
		}
	}

	return __curry(fx.length);
}

// simplied version
function curry(fx) {
	if (fx.length === 0) return;

	const __curry = (arity, ...args) => (__arg) => arity === 1 ? fx(...args, __arg): __curry(arity - 1, ...args, __arg);

	return __curry(fx.length);
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);

addFive(3); // 8
[0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]



function curry1(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

var curriedAdd1 = curry1(add, 3, 4);
curriedAdd1(); // 7




/*--------------------------------------------------------------------------------------------
Shallow copy
*/

// Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. 
// prototypes are ignored. and, nested objects are not cloned, but rather their references get copied, 
// so nested objects still refer to the same objects as the original. 
const obj = {a: 1, b: 2};
const shallowClone1 = {...obj};
const shallowClone2 = Object.assign({}, obj); 



/*--------------------------------------------------------------------------------------------
Deep copy
*/

// deep-clone a simple object (without complex type like Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays)
// CPU-intensive and only accepts valid JSON
JSON.parse(JSON.stringify(obj));

// external lib
_.cloneDeep(obj);



/*--------------------------------------------------------------------------------------------
Create a batches function  `batches(recipe, available)`
1st param is the recipe for the food, 2nd param is the available ingredients.
Each ingredient's value is a number representing how many units there are.

// 0 batches can be made
batches( { milk: 100, butter: 50, flour: 5 }, { milk: 132, butter: 48, flour: 51 } )
// 2 batches can be made
batches(  { milk: 2, sugar: 40, butter: 20 }, { milk: 5, sugar: 120, butter: 500 } )
*/

const batches = (recipe, available) => Math.floor(Math.min(
  ... Object.keys(recipe).map(k => available[k]/recipe[k])
));



/*--------------------------------------------------------------------------------------------
Throttle: within a time scope, invoke a function at most once (0 or 1)
*/
function throttle1(fx, timeScope) {
	return function(){
		let lastInvocation = null;
		let invoked = false;

		return (function(...args) {
			let now = Date.now();
			let elapse = lastInvocation === null ? Number.MAX_VALUE : now - lastInvocation;
			
			if (elapse <= timeScope){
				if (!invoked) {
					fx(...args);
					lastInvocation = now;
					invoked = true;
				}
			} else {
				fx(...args);
				lastInvocation = now;
				invoked = true;
			}
		})()
	}
}	

const throttle = (fx, timeScope) => {
	let lastFunc;
	let lastInvocation;

	return function() {
	  const context = this
	  const args = arguments

	  if (!lastInvocation) {
		fx(args);
		lastInvocation = Date.now()
	  } else {
		clearTimeout(lastFunc)

		lastFunc = setTimeout(function() {
		  if ((Date.nw() - lastInvocation) >= timeScope) {
			fx(args);
			lastInvocation = Date.now()
		  }
		}, timeScope - (Date.now() - lastInvocation))
	  }
	}
  }
	
const fx = function() {return "called";}   // CANNOT USE rambda
const newFx = throttle(fx, 5000); // 5000 milisecond, 5s

newFx(); // called
newFx();


/*--------------------------------------------------------------------------------------------
Debounce: within a time scope, invoke a function only once  (1)
*/
function debounce(fx, time) {
    let now = Date.now();

    return 
}





/*--------------------------------------------------------------------------------------------
Promise
*/




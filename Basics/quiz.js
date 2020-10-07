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

// simplified version
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
Shallow copy object
*/

// Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. 
// prototypes are ignored. and, nested objects are not cloned, but rather their references get copied, 
// so nested objects still refer to the same objects as the original. 
const obj = {a: 1, b: 2};
const shallowClone1 = {...obj};
const shallowClone2 = Object.assign({}, obj); 



/*--------------------------------------------------------------------------------------------
Deep copy object
*/

// deep-clone a simple object (without complex type like Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays)
// CPU-intensive and only accepts valid JSON
JSON.parse(JSON.stringify(obj));
// JSON.Stringify() can only convert 1023 characters, s

// external lib
//_.cloneDeep(obj);



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
Debounce: within a time scope, invoke a function only once  (1)
*/

// Lodash 4.17.15 implementation 
function debounce(func, wait, options) {
	var lastArgs,
		lastThis,
		maxWait,
		result,
		timerId,
		lastCallTime,        // the actual call
		lastInvokeTime = 0,  // the actual call
		leading = false,
		maxing = false,
		trailing = true;

	if (typeof func != "function") {
		throw new TypeError(FUNC_ERROR_TEXT);
	}

	wait = toNumber(wait) || 0;

	if (isObject(options)) {
		leading = !!options.leading;
		maxing = "maxWait" in options;
		maxWait = maxing
			? nativeMax(toNumber(options.maxWait) || 0, wait)
			: maxWait;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}

	function invokeFunc(time) {
		var args = lastArgs,
			thisArg = lastThis;

		lastArgs = lastThis = undefined;
		lastInvokeTime = time;
		result = func.apply(thisArg, args);
		return result;
	}

	function leadingEdge(time) {
		// Reset any `maxWait` timer.
		lastInvokeTime = time;
		// Start the timer for the trailing edge.
		timerId = setTimeout(timerExpired, wait);
		// Invoke the leading edge.
		return leading ? invokeFunc(time) : result;
	}

	function remainingWait(time) {
		var timeSinceLastCall = time - lastCallTime,
			timeSinceLastInvoke = time - lastInvokeTime,
			timeWaiting = wait - timeSinceLastCall;

		return maxing
			? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
			: timeWaiting;
	}

	function shouldInvoke(time) {
		var timeSinceLastCall = time - lastCallTime,
			timeSinceLastInvoke = time - lastInvokeTime;

		// Either this is the first call, activity has stopped and we're at the
		// trailing edge, the system time has gone backwards and we're treating
		// it as the trailing edge, or we've hit the `maxWait` limit.
		return (
			lastCallTime === undefined ||
			timeSinceLastCall >= wait ||
			timeSinceLastCall < 0 ||
			(maxing && timeSinceLastInvoke >= maxWait)
		);
		// (maxing && timeSinceLastInvoke >= maxWait) this is the difference between throttle and debounce
	}

	function timerExpired() {
		var time = now();

		if (shouldInvoke(time)) {
			return trailingEdge(time);
		}

		// Restart the timer.
		timerId = setTimeout(timerExpired, remainingWait(time));
	}

	function trailingEdge(time) {
		timerId = undefined;

		// Only invoke if we have `lastArgs` which means `func` has been
		// debounced at least once.
		if (trailing && lastArgs) {
			return invokeFunc(time);
		}
		lastArgs = lastThis = undefined;
		return result;
	}

	function cancel() {
		if (timerId !== undefined) {
			clearTimeout(timerId);
		}
		lastInvokeTime = 0;
		lastArgs = lastCallTime = lastThis = timerId = undefined;
	}

	function flush() {
		return timerId === undefined ? result : trailingEdge(now());
	}

	function debounced() {
		var time = now(),
			isInvoking = shouldInvoke(time);

		lastArgs = arguments;
		lastThis = this;
		lastCallTime = time;

		if (isInvoking) {
			if (timerId === undefined) {
				return leadingEdge(lastCallTime);
			}

			// for throttle 
			if (maxing) {
				// Handle invocations in a tight loop.
				clearTimeout(timerId);
				timerId = setTimeout(timerExpired, wait);
				return invokeFunc(lastCallTime);
			}
		}

		if (timerId === undefined) {
			timerId = setTimeout(timerExpired, wait);
		}

		return result;
	}

	debounced.cancel = cancel;
	debounced.flush = flush;

	return debounced;
}


// {leading: false, trailing: true}
function debounce(fx, timeout) {
	let timer = null;

	let context = this
	let args = arguments

	const execute = function () {
		fx.apply(context, args);
	}
  
	return function () {
	  context = this
	  args = arguments
  
	  clearTimeout(timer)
  
	  timer = setTimeout(execute, timeout)
	}
  }

// immediate:false - {leading: false, trailing: true}
// immediate:true -  {leading: true, trailing: false}
function debounce(fx, timeout, immediate) {
	let timer = null;

	let context = null;
	let args = null;

	const execute = function () {
		fx.apply(context, args);
	}
	
	return function() {
		context = this;
		args = arguments;

		const callNow = immediate || !timer; // leading or 1st call

		clearTimeout(timer);

		timer = setTimeout(function() {
			timer = null;

			if (!immediate) {
				execute();
			}
		}, timeout);

		if (callNow) {
			execute();
		}
	};
}


/*--------------------------------------------------------------------------------------------
Throttle: within a time scope, invoke a function at most once (0 or 1)
*/
// Lodash 4.17.15 implementation 
function throttle(func, wait, options) {
	var leading = true,
		trailing = true;

	if (typeof func != "function") {
		throw new TypeError(FUNC_ERROR_TEXT);
	}

	if (isObject(options)) {
		leading = "leading" in options ? !!options.leading : leading;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}

	// Lodash debounce 
	return debounce(func, wait, {
		leading: leading,
		maxWait: wait,   // !!! this ensures 2 invocations has at least wait(ms) interval  
		trailing: trailing
	});
}

// {leading: false, trailing: true}
function throttle(fx, timeout) {
	let timer;
	let lastCall;

	let context = this;
	let args = arguments;

	const execute = function () {
		lastCall = Date.now();
		fx.apply(context, args);
	}

	return function() {
		context = this;
		args = arguments;

		const now = Date.now();
		const remaining = lastCall ? lastCall + timeout - now : 0;

		if (remaining > 0) {
			clearTimeout(timer);
			timer = setTimeout(execute, remaining);
		} else {
			execute();
		}
	};
}


/*--------------------------------------------------------------------------------------------
1: 写一个function，实现：sum(3)(4)(5)(6)( ) = 18. 最后的空参（）必须有。
tips：返回函数自身。但是这道题其实相当有难道。实现sum(3)(4)(5)(6)( ) // console.log 18 
比较容易，但是sum实现多次，这还是很难的。因为return自身所以无法用闭包。tips，用函数的object属性。
*/

function sum(val) {
	if (sum.total === undefined) {
		sum.total = 0;
	}

	if (val) {
		sum.total += val;
		return sum;
	} else {
		var result = sum.total;
		sum.total = 0;
		return result;
	}
}

console.log(sum(3)(4)(5)(6)()); //18
console.log(sum(1)(2)(3)()); // 6


/*--------------------------------------------------------------------------------------------
*/





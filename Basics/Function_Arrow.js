// Arrow function context is set during function creation only
// Arrow function cannot set this using bind / call / apply
// Arrow function cannot be called with new

// Expression, it returns value implicitly
let f1 = (x) => x + 1;
console.log(f1(1)); // 2

f1 = (_) => 1; // equals to () => 1;
console.log(f1(1)); // 1

f1 = (x, y) => 1; // () is only required for multiple params
console.log(f1(1)); // 1

// rest parameter ... represent an indefinite number of arguments as an array
// args.__proto__ === Array.prototype  true
f1 = (...args) => args.length;
console.log(f1.length); // 0

// Statement, it does not return value implicitly, it must have {}
let f2 = x => {
	x *= 2;
	return x + 1; // use return explicitly if need return value
};
console.log(f2(1)); // 3

// Lexical this, arguments
// value of this gets set at the time of the function creation and can't change afterwards
// the context always stays the same for an arrow function
function f() {
	this.name = "ethan";

	let ff = () => {
		// inside arrow function, this/arguments refer to this/arguments in the environment the arrow function is defined
		console.log("this.name: " + this.name); // ethan
		console.log("1st arguments: " + arguments[0]); // 1 when invoke with f(1)
	};

	ff();
}

const f3 = a => b => c => a + b + c
f3(1)          // returns b => c => a + b + c
f3(1)(2)       // returns c => a + b + c
f3(1)(2)(3)    // returns 6
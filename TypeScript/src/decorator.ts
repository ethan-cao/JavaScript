/**
 * Decorator is just a function, called with @, apply metadata to the target, which can be
 * class, method, accessor, property or parameter.
 * 
 * Decorator is executed when its target is defined
 */


// Log() is a decorator factory, it returns a decorator
function Log(msg: string) {
	console.log('Log LOGGER FACTORY');

	// return a decorator
	return function (constructor: Function) {
		console.log(msg);
		console.log(constructor);
	};
}
		
// Log0 is a decorator function, a class decorator
// A Class Decorator is declared just before a class declaration. The class decorator is applied to class constructor
// parameter: constructor, return: new constructor 
function Log0(constructor: Function) {
	console.log("Log0");
}

@Log("Log")
@Log0
class Person {
	name = 'Max';

	constructor() {
		console.log('Creating person object...');
	}
}

// prints: Log LOGGER FACTORY, Log0, Log
// Decorator is executed from bottom to up, that is why Log0 is printed before Log
// Decorator Factory is executed from top to bottom, so Log LOGGER FACTORY is printed first

//---------------------------------------------------------

/**
 * Decorator function gets parameter and returns value
 * its parameter and return depends on where it is used
 * 
 * targe is either the constructor function of the class for a static member, or the prototype of the class for an instance member
 */

// Property decorator
// no return
function Log1(target: object, name: string) {
	console.log(`Log1 - ${name} `);
}

// Accessor decorator
// the return value will be used as the PropertyDescriptor 
function Log2(target: object, name: string, descriptor: PropertyDescriptor) {
	console.log(`Log2 - ${name} `);
}

// Method decorator
// the return value will be used as the PropertyDescriptor 
function Log3(target: object, name: string, descriptor: PropertyDescriptor) {
	console.log(`Log3 - ${name} `);
}

// Parameter decorator
// no return
function Log4(target: object, name: string, position: number) { 
	console.log(`Log4 - ${name} `);
}

class Product {
	@Log1
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive!');
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}

const product1 = new Product('Book', 19);
const product2 = new Product('Book 2', 29);


//---------------------------------------------------------

// use method decorator to bind automatically

function Autobind(target: object, name: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	const newDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		
		get() {
			// this refers to the object invokes get() 
			return originalMethod.bind(this);
		}
	};

	return newDescriptor;
}

class Printer {
	message = 'This works!';

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();
const fx = p.showMessage; // p.showMessage: p access showMessage, p invokes get() from PropertyDescriptor

fx();


//--------------------------------------------

// use decorator to validate 

interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]; // ['required', 'positive']
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['required']
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ['positive']
	};
}

function validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];

	if (!objValidatorConfig) {
		return true;
	}

	let isValid = true;

	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}

	return isValid;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}
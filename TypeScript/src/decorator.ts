/**
 * Decorator is just a function, it can be apply to class, class property, class method
 * or a function can be used as a decorator
 * 
 * Decorator is executed when its target is defined
 */


function Log(msg: string) {
	console.log('Log LOGGER FACTORY');

	// Log0 is a decorator factory, it returns a decorator
	return function (constructor: Function) {
		console.log(msg);
		console.log(constructor);
	};
}
		
// Log1 is a decorator function
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

// logs: Log LOGGER FACTORY, Log0, Log
// Decorator is executed from bottom to up, that is why Log0 is printed before Log
// Decorator Factory is executed from top to bottom, so Log LOGGER FACTORY is printed first

//---------------------------------------------------------

/**
 * Decorator function gets parameter and returns value
 * its parameter and return depends on where it is used
 */

function Log1(target: any, name: string) {
	console.log('Property decorator!');
	console.log(target, name);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator!');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Method decorator!');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
	console.log('Parameter decorator!');
	console.log(target);
	console.log(name);
	console.log(position);
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


function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	};

	return adjDescriptor;
}

class Printer {
	message = 'This works!';

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();
const fx = p.showMessage;

fx();

// --------------------------------------------

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
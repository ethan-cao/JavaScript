/*
	Implement extends ES6 keyword using ES5, with some extra capacity similar in Java inheritance	
	Essentially, child.prototype.[[Prototype]]  === parent.prototype
 
    let F1 = function(){}
    F1.prototype.a = 1;
    
    let F2 = function(){}
    
    extend(F2, F1)
    
	let o = new F2
	o instanceof F1; // true
	o instanceof F2; // true
 */


// inheritance with extra prototype and static property
var extend1 = function() {
	// to make child.prototype.[[Prototype]]  === parent.prototype
	// we need to use child.prototype = new Parent, since we cannot use __proto__ explicitly (the name varies in different browsers)
	// if so, whenever initiate child instance, we invoke parent constructor, which is not good
	// to avoid duplicate constructor invoke, use Surrogate instead.
	// create Surrogate only once in closure
	var Surrogate = function() {};

	return function(child, parent, protoProps, staticProps) {
		if (staticProps) {
			_.defaultsDeep(child, parent, staticProps);
		}

		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;
		child.prototype.constructor = child;

		if (protoProps) {
			_.extend(child.prototype, protoProps);
		}

		child.superclass = parent.prototype;

		return child;
	};
};


// Return a new type without mutating the child, eval is for setting child's name at runtime
var extend2 = (function() {
	var Surrogate = function() {};

	//separate prototype chain
	return function(child, parent) {
		var derivedChild; // strict mode prevents introducing new variable
		eval(
			"derivedChild = function " +
				child.name +
				// invoking the parent can be moved to the child constructor instead of here
				"() {derivedChild.superclass.constructor.apply(this, arguments); child.apply(this, arguments); } "
		);

		Surrogate.prototype = parent.prototype;
		derivedChild.prototype = new Surrogate();
		derivedChild.prototype.constructor = derivedChild;

		// Add child original prototype back
		_.assignIn(derivedChild.prototype, child.prototype);

		// Add parent static
		_.defaultsDeep(derivedChild, child, parent);

		// Superclass is a static member
		derivedChild.superclass = parent.prototype;

		return derivedChild;
	};
})();
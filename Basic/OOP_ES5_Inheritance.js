/*
	Implement extends ES6 keyword using ES5, with some extra capacity similar in Java inheritance	
	Essentially, child.prototype.__proto__ === parent.prototype
 
    let F1 = function(){}
    F1.prototype.a = 1;
    
    let F2 = function(){}
    
    extend(F2, F1)
    
    let o = new F2
    o.a === 1; // true
   
 */


// mutate the child, separate prototype chain
var extend1 = (function() {
	// Create Surrogate only once
	var Surrogate = function() {};

	return function extend(child, parent) {
		Surrogate.prototype = parent.prototype;
		child.prototype.__proto__ = new Surrogate().__proto__;

		// Add parent static
		_.defaultsDeep(child, parent);

		// Superclass is a static member, for convience
		child.superclass = parent.prototype;

		return child;
	};
})();

// extend1 enhanced version, with extra prototype and static property
var extend2 = function() {
	var Surrogate = function() {};

	return function(child, parent, protoProps, staticProps) {
		if (staticProps) {
			_.extend(child, parent, staticProps);
		}

        Surrogate.prototype = parent.prototype;
		child.prototype.__proto__ = new Surrogate().__proto__;

		if (protoProps) {
			_.extend(child.prototype, protoProps);
		}

		child.superclass = parent.prototype;

		return child;
	};
};


// mutate the child, merge parent prototype to child prototype
var extend3 = (function() {
	return function extend(child, parent) {
		_.defaultsDeep(child.prototype, parent.prototype);

		// Add parent static
		_.defaultsDeep(child, parent);

		// Superclass is a static member
		child.superclass = parent.prototype;

		return child;
	};
})();


// Return a new type without mutating the child, eval is for setting child's name at runtime
var extend4 = (function() {
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


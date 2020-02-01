function curry(fx) {
	if (fx.length === 0){
		return;
	} 

	/* ...rest parameter */		
	/* ...spread */				
	const __curry = (arity, ...args) => 
					(__arg) => arity === 1 ? fx(...args): __curry(arity - 1, ...args, __arg);

	return __curry(fx.length);
}


var add = (a, b) => a+b;
var curriedAdd = curry(add);
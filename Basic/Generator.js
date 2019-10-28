/**
The function* declaration defines a generator function, which returns a generator object {value: value, done: true/false}
A generator object is iterator and also iterable. 
Generator fx can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

Invoking generator fx does not execute its body immediately, an iterator object is returned instead. 

executing generator: When iterator's next() is called, the generator fx body is executed until 
    the first yield expression finish
    or with yield*, delegates to another generator function

yield ___ is called a "yield expression", when restart generator, a value back in will be the computed result of that yield ___ expression.

pass value in  : paramater in next(), replace the pausing yield expression
pass value out : yield expression

A return statement in generator fx, when executed, will make the generator finished {done: true, value: value_after_return}
when used with for..of loops, the final returned value would be thrown away.

Error thrown inside the generator will make the generator finished -- unless caught within the generator's body
*/

function* generator1(x) {
    let y = 2 * x;
    yield 1 + y;
    yield 2 + y;
    yield 3 + y;
}

let g1 = generator1(0);

console.log(g1.next()); // execution paused after 1st yield
console.log(g1.next()); // execution paused after 2nd yield
console.log(g1.next()); // execution paused after 3rd yield
console.log(g1.next()); // no yield anymore, return { value:undefined, done:true }

/**
 * Calling the next() method with an argument will resume the generator function execution, 
 * replacing the yield expression where execution was paused with the argument from next().   
 */
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo( 5 );

console.log("\n============= calling next() with arguments"); // 0
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // replace the pausing yield expression with parameter and execute until next yield, {value:8, done:false}
console.log( it.next( 13 ) );   // { value:42, done:true }, in for..of loops, value is dropped


function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;   // dropped in for...of
}

console.log("Iteration 1\n" ); 
for (var v of foo()) {
    console.log( v );
} 
// 1 2 3 4 5

console.log(v); // still `5`, not `6` 


let obj = {
    [Symbol.iterator]() { // a property with a Symbol.iterator key, then the object is iterable
        return {
            i: 0,
            next() {
                return this.i < 5 ? {
                    value: this.i++,
                    done: false
                } : {
                    value: this.i,
                    done: true
                };
            }
        }
    }
}

console.log("Iteration 2\n" ); 
for (let value of obj) {
    console.log(" each value : " + value);
}
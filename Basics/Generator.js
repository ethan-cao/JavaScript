/**
Generator can achieve the same effect as async/await, writing async code in sync way
generator can do more than async/await, async/await is more concise to make code in sync 

function* defines a generator function, which returns a generator object {value: value, done: boolean}
Invoking generator does not execute its body immediately, it just returns an iterator object.

A generator object is an iterator and it is also iterable. 

generator is pausable function that can be exited and later re-entered. The call stack is persisted across re-entrances.
generator has locally pause-able stack,
    inside generator, yield stops the execution
    outside generator, everything continues 

use iterator.next() to continue generator execution til
    the next first yield expression finish
    or with yield*, delegates to another generator function

yield XXX; is called a "yield expression", when restart generator, a value back in will be the computed result of that yield ___ expression.

generator allows for a back-and-forth communication between generator and its caller
pass value in  : paramter in next(), replace the pausing yield expression
pass value out : yield expression

when a generator reaches return statement, the generator is finished {done: true, value: returned_value}
error thrown inside the generator will make the generator finished -- unless caught within the generator's body

when used with for..of loops, the final returned value would be thrown away.

*/


function* generator1(x) {
    let y = 2 * x;
    yield 1 + y;
    yield 2 + y;
    yield 3 + y;
}

let g1 = generator1(0);

console.log("1st call: ", g1.next()); // { value: 1, done: false }, execution paused after 1st yield
console.log("2nd call: ", g1.next()); // { value: 2, done: false }, execution paused after 2nd yield
console.log("3rd call: ", g1.next()); // { value: 3, done: false }, execution paused after 3rd yield
console.log("4th call: ", g1.next()); // { value: undefined, done: true }


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
console.log( it.next() );     // { value:6, done:false }
console.log( it.next( 12 ) ); // { value:8, done:false } replace the pausing yield expression with parameter and execute until next yield
console.log( it.next( 13 ) ); // { value:42, done:true }, in for..of loops, value is dropped


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
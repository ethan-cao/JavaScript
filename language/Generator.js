/**
The function* declaration defines a generator function, which returns a generator object {value: value, done: true/false}
A generator object is iterator and also iterable

Generator fx can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.


Invoking generator fx does not execute its body immediately, an iterator object is returned instead. 
When the iterator's next() is called, the generator fx body is executed until 
    the first yield expression
    or with yield*, delegates to another generator function



 A return statement in generator fx, when executed, will make the generator finished,
 marking the done property of the returned object to true

 an error thrown inside the generator will make the generator finished -- unless caught within the generator's body
 */


function* generator1(){
    yield 1;
    yield 2;
    yield 3;
    yield
    yield 5;
}
let g1 = generator1();

console.log(g1.next());  // execution paused after 1st yield
console.log(g1.next());  // execution paused after 2nd yield
console.log(g1.next());  // execution paused after 3rd yield
console.log(g1.next("s"));
console.log(g1.next("s"));


 // Calling the next() method with an argument will resume the generator function execution, 
 // replacing the yield expression where execution was paused with the argument from next().   

function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}
var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
// gen.next();             // 0
// gen.next();             // 0
// gen.next();             // 0
// gen.next('pretzel');    // 1 pretzel
// gen.next('california'); // 2 california
// gen.next('mayonnaise'); // 3 mayonnaise


let obj ={
    data: [1,2,3,4,5],
    [Symbol.iterator](){  // a property with a Symbol.iterator key, then this is iterable
        return {
            i : 0,
            // next return an object  { value: value, done: true/false }
            next(){
                return this.i < 5 ? {value: this.i++, done: false} : {value: this.i, done: true};
            }
        }
    }
}


for (let value of obj){
    // console.log(" each value : " + value);
}
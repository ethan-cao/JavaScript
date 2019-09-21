/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation

A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: meaning that the operation failed.

Promise construtor takes a paramater one executor function.
executor normally initiates asynchronous work, once completes, either calls resolve to resolve the promise or rejects if an error occurred. 

If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored

A promise can only succeed(resolved) or fail(reject) once.

If a promise has succeeded or failed and you later add a success/failure callback (i.e a .then),
the correct callback will be called, even though the event took place earlier.

promise caches the result, and will give the same result next time.

Promise object is immutable

*/


// Promise constructor takes a executor function with the arguments resolve and reject
// executor is invoked right now. wrap executor in functions if need to be invoked later 
const promise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        resolve('Hello, Promises!');
    }

    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});


//then() accepts two callbacks, and returns a promise
// 1st callback is invoked when the promise is resolved. 2nd callback is executed when the promise is rejected or an error was thrown
promise.then(
    (resolvedValue) => {console.log(resolvedValue);}, 
    (error) => {console.log(error);
});


// wrap executor in functions if need to be invoked later 
const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);

delay(2000)
  .then(() => {
    console.log('Resolved after 2 seconds')
    return delay(1500);
  })
  .then(() => {
    console.log('Resolved after 1.5 seconds');
    return delay(3000);
  }).then(() => {
    console.log('Resolved after 3 seconds');
    throw new Error();
  }).catch(() => {  // .catch is just a syntactical sugar for .then(undefined, onRejected).
    console.log('Caught an error.');
  }).then(() => {
    console.log('Done.');
  });





/*
Create a standalone function bind that is functionally equivalent to the method Function.prototype.bind.
function example() {
  console.log(this)
}

const boundExample = bind(example, { a: true })
boundExample.call({ b: true }) // logs { a: true }

*/
const bind = (fn, context) => (...args) => fn.apply(context, args)
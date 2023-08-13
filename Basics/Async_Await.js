// Async/await is just syntax sugar for Promise, making asynchronous code look and behave like synchronous code

// async function always returns a promise. non-promise value is wrapped in a resolved promise automatically.
// async is like creating a promise
const f1 = () => 1
const f2 = async () => 1

console.log(f1() instanceof Promise) // false
console.log(f2() instanceof Promise) // true

// await can ONLY be used inside async function
// await pauses the execution of the async function in which the await is used, until the promise is resolved
// it returns the resolved value of the promise

const f3 = async () => {
  try {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

console.log(await f3())





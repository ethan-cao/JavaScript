// Async/await is just syntax sugar for Promise, making asynchronous code look and behave like synchronous code

// async function always returns a promise. non-promise value is wrapped in a resolved promise automatically.
const f1 = () => 1
const f2 = async () => 1

console.log(f1() instanceof Promise) // false
console.log(f2() instanceof Promise) // true

// await can only be used inside async function

// await pause async function execution until the promise is resolved,
// it returns the resolved value of the promise

const f3 = async () => {
  try {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

async function f4 () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 2000)
  })

  console.log('before')
  let result = await promise // wait until the promise resolves (*)
  console.log('after')

  alert(result) // "done!"
}

f4()
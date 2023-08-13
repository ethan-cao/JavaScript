// Callback  version
const callbackTest = (onSuccess, onFail) => {
  if (Math.random() * 100 < 80) {
    onSuccess('80% callback')
    return
  }

  onFail('20% callback')
  return
}

callbackTest(
  (successValue) => console.log(successValue),
  (failedValue) => console.log(failedValue)
)



// ---------------------------------------------------
// Promise version
console.log("before")

const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() * 100 < 80) {
      resolve('80% promise')
    }

    reject('20% promise')
  })
}

asyncOperation().then(
  successValue => console.log("resolved: ", successValue),
  failedValue => console.log("rejected: ", failedValue)
)

console.log("after")



// ---------------------------------------------------
// Async/Await version
console.log("before")

// wrap asyncOperation() in a async function and call it with await
// then call the wrapper function without await
async function awaitTest() {
  try {
    // call async function with await, this pause the async function execution until primose resolved
    const result = await asyncOperation()
    console.log(result)
  } catch (e) {
    console.error(e)
  }
}

// call async function without await, the function executes and returns a Promise immediately without waiting promise getting resolved
awaitTest()

console.log("after")


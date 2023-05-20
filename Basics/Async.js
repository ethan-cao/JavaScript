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
  successValue => console.log(successValue),
  failedValue => console.log(failedValue)
)

// Promise version
const promiseTest = () =>
  new Promise((resolve, reject) => {
    if (Math.random() * 100 < 80) {
      resolve('80% promise')
    }

    reject('20% promise')
  })

promiseTest().then(
  successValue => console.log(successValue),
  failedValue => console.log(failedValue)
)

// Async/Await version
const awaitTest = async function () {
  try {
    const result = await promiseTest()
    console.log(result)
  } catch (e) {
    console.error(e)
  }
}

awaitTest()

// Observable version

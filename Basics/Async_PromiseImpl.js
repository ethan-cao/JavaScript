const STATE_PENDING = 'pending'
const STATE_RESOLVED = 'resolved'
const STATE_REJECTED = 'rejected'

// reference: https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a
class PromiseImpl {
  #status = STATE_PENDING
  #value = undefined
  #onResolveCallbacks = []
  #onRejectCallbacks = []

  constructor (executor) {
    const resolve = value => {
      if (this.#status !== STATE_PENDING) {
        return
      }

      this.#status = STATE_RESOLVED
      this.#value = value
      this.#onResolveCallbacks.forEach(callback => callback(this.#value))
    }

    const reject = error => {
      if (this.#status !== STATE_PENDING) {
        return
      }

      this.#status = STATE_REJECTED
      this.#value = error
      this.#onRejectCallbacks.forEach(callback => callback(this.#value))
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

    return this
  }

  then (onResolve, onReject) {
    return new PromiseImpl((resolve, reject) => {
      if (this.#status === STATE_RESOLVED) {
        try {
          const originalResolved = onResolve(this.#value)

          if (originalResolved instanceof PromiseImpl) {
            originalResolved.then(resolve, reject)
          } else {
            resolve(originalResolved)
          }
        } catch (e) {
          reject(e)
        }
      } else if (this.#status === STATE_REJECTED) {
        try {
          const originalRejected = onReject(this.#value)

          if (originalRejected instanceof PromiseImpl) {
            originalRejected.then(resolve, reject)
          } else {
            reject(originalRejected)
          }
        } catch (e) {
          reject(e)
        }
      } else {
        this.#onResolveCallbacks.push(() => {
          try {
            const originalResolved = onResolve(this.#value)

            if (originalResolved instanceof PromiseImpl) {
              originalResolved.then(resolve, reject)
            } else {
              resolve(originalResolved)
            }
          } catch (e) {
            reject(e)
          }
        })
        this.#onRejectCallbacks.push(() => {
          try {
            const originalRejected = onReject(this.#value)

            if (originalRejected instanceof PromiseImpl) {
              originalRejected.then(resolve, reject)
            } else {
              reject(originalRejected)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
    })
  }
}

const promise = new PromiseImpl((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved!!!')
  }, 1000)
})

promise
  .then(
    resolvedValue => {
      console.log('1st resolve: ' + resolvedValue)
      return 'passed to 2nd resolve'
    },
    rejectedValue => console.log('1st reject:' + rejectedValue)
  )
  .then(
    resolvedValue => console.log('2nd resolve: ' + resolvedValue),
    rejectedValue => console.log('2nd reject:' + rejectedValue)
  )

// Callback version
function addString(previous, current, callback){
    setTimeout(
      () => {
        callback((previous + ' ' + current))
      }, 
      1000
    )
  }

  function addAll(){
      addString("", "A", result => {
          addString(result, "B", result => {
              addString(result, "C", result => {
                  console.log(result);   // Prints out " A B C"
              })
          })
      });
  }

addAll();


// Promise version
function addString(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {resolve(previous + '' + current)}, 1000)
    });
}

function addAll(){
    addString("", "A")
    .then(result => {    // 1st parameter is resolve function, 2nd parameter us reject function
        return addString(result, "B");
    })
    .then(result => {
        return addString(result,  "C")
    })
    .then(result => {
        console.log(result); // Prints out " A B C"
    });
}

addAll();


// Await version
function addString(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {resolve(previous + '' + current)}, 100)
    });
}

// async” before a function means : a function always returns a promise.
// If the return s <non-promise>, then it is automatically wrapped into a resolved promise with that value.
async function addAll(){
    let result = "";
    try{
        // await works only inside async functions 
        // await pauses async function execution until a Promise is resolved (fulfilled/rejected)
        result = await addString(result, "A");
        result = await addString(result, "B");
        result = await addString(result, "C");
        // without await, result refers to a promise object (rather than the resolved value)
    } catch(e){
    }

    console.log(result);
}

addAll();

/* 
    every single thing you await will ordinarily be a promise.
    A promise is a special object which contains another object.
    await will simply pause the execution of my method until the value from the promise is available.
    async/await and promises are the same thing under the hood.
 */
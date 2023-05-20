function test () {
  try {
    console.log('try1')
    console.log('try2')

    // a is scoped only in try block
    const a = 1

    // return 1;
    throw 'error' // if we run return before, throw is not executed
  } catch {
    console.log('catch')
    // return 2;
  } finally {
    console.log('finally') // always gets executed
    // return 3; // this take precedences over return in try block
  }

  console.log(a) // error

  return 'test'
}

console.log(test())

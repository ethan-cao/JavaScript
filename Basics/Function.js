// function is scoped to block
{
  function f1 () {
    // gets hoisted
    return console.log(1)
  }
  f1() // 1

  {
    function f1 () {
      return console.log(2)
    }
    f1() // 2
  }

  f1() // 1
}

// default param value
function sum (x, y, z = 2, a) {
  console.log(`receives ${arguments.length} arguments`) // 2

  console.log(arguments instanceof Array) // false, array-like object
  // console.log(arguments.callee)
  // console.log(arguments.caller)

  return x + y + z
}
console.log(sum.name) // sum
console.log(`expects ${sum.length} params`) // 2, only parameters before 1st with default value is counted

console.log('sum : ' + sum(0, 1)) // 3

// Rest Parameter, a is array
function rest (x, y, ...a) {
  return x + y + a.length
}
console.log(rest(1, 2, 's', {}, [], 3)) // 7

const ffff = (...a) => {
  console.log(a)
}

ffff()

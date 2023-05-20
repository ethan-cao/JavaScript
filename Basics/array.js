// new Array() and Array() produce the same result
const oneDimensionArray = new Array(128).fill(0)
console.log(oneDimensionArray.length) // 128

let twoDimensionDArray = new Array(3).fill(0).map(x => new Array(3).fill(0)) // 10% slower than loop
// let twoDimensionDArray = new Array(3).fill(Array(3).fill(0));  // wrong: the inner array is shared

Array.isArray([]) // true

const nums = [1, 2, 3, 4, 5, 100]

console.log(nums) // [ 1, 2, 3, 4, 5, 100 ]
console.log(nums.toString()) // [ 1, 2, 3, 4, 5, 100 ]
console.log(...nums) // 1, 2, 3, 4, 5, 100
console.log(nums['0']) // 1, access with index as string
console.log(nums.reverse()) // [ 100, 5, 4, 3, 2, 1 ]

nums.forEach(num => console.log(num))
for (let num of nums) {
  console.log(num)
}

for (let [index, item] of nums.entries()) {
  console.log(index + ' : ' + item)
}

nums.push(6, 7) //Add to the last index, nums = [1,2,3,4,5,100,6];
nums.pop() // Removes value at the last index, nums = [1,2,3,4,5,100];
nums.pop()

nums.unshift(0) //Add to the first index, nums = [0,1,2,3,4,5,100];
nums.shift() //remove value at the first index, nums = [1,2,3,4,5,100];

nums.includes(2) // true
nums.every(x => x >= 5) // false,  all element meets the condition
nums.some(x => x >= 5) // true,    at least 1 element meets the condition
nums.find(x => x >= 5) // 5, find the first one that satisfies condition
nums.filter(x => x > 3) // [4,5]
nums.map(x => x + 1) // [2,3,4,5,6]
nums.reduce((a, b) => a + b, 5) // 20
// reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue))))

const [head, ...tail] = [1, 2, 3, 4, 5] // head = 1, tail = [2,3,4,5]
const [head, tail] = [1, 2, 3, 4, 5] // head = 1, tail = 2
const [a, , b = 10, rest] = [1, 2, 3, 4, 5] // a = 1, b = 3, rest = 4

// batch add/remove elements, return the removed items
// array.splice(start[, deleteCount[, itemToAdd1[, itemToAdd2[, ...]]]])
// nums = [1, 2, 3, 4, 5, 100];
nums.splice(i, 1) // // remove an element at index i, nums: [ 1, 3, 4, 5, 100 ]
nums.splice(0, 0, -1, 0) // nums : [-1,0,1,2,3,4,5,100]
nums.splice(0, 2) // nums: [1,2,3,4,5,100]
nums.splice(-1) // remove the last element, change the exising array

// remove an element from array: get its index then splice

// empty an array
// nums.length = 0;

// shallow copy
var newArray = nums.slice(0, -1) // remove the last one
var newArray = nums.slice()
var newArray = ([] = [...a])
var newArray = nums.slice(0, 5) // copy the array from 0 til 4

// transform array-like or iterable into true array
var newArray = Array.from('char') // ["c", "h", "a", "r"]
// create array from every arguments
var newArray = Array.of(1, 2, 3, 4, 5, 6) //  [1, 2, 3, 4, 5, 6]

// merge array
var newArray = [].concat(a).concat(b)
var newArray = [...a, ...b]
a.push(...b)

// swap 2 value, Destructuring Assignment Array Matching
a = 5
let b = 6

;[a, b] = [b, a]
const swap = (nums, a, b) => {
  ;[nums[a], nums[b]] = [nums[b], nums[a]]
}

// The default sort order is built upon converting the elements into strings,
nums.sort() // [1, 100, 2, 3, 4, 5]
nums.sort((a, b) => a - b) // // sort array: [1,2,3,4,5,100];

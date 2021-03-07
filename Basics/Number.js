console.log(0.1 + 0.2 === 0.3); // false

// Number.EPSILON : the difference between 1 and the smallest floating point number greater than 1
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true


// average between left and right
let left = 0;
let right = 10;
const middle = Math.floor(left + (right - left) / 2);

parseInt("1")
parseFloat("1.1")


// * +"10" is much faster than parseInt("10", 10)
console.log(typeof (+"10")); //number

console.log(Number.MIN_VALUE);  // float 
console.log(Number.MIN_SAFE_INTEGER); // integer 
console.log(Number.MAX_VALUE);  // float 
console.log(Number.MAX_SAFE_INTEGER); // integer 

Math.min(1,2,3,-4);  // -4
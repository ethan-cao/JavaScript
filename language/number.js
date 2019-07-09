console.log(0.1 + 0.2 === 0.3); // false

// Number.EPSILON : the difference between 1 and the smallest floating point number greater than 1
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true
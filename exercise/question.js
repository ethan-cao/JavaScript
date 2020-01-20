

/*--------------------------------------------------------------------------------------------
Create a function pipe that performs left-to-right function composition by returning a function that accepts one argument.
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3)))
*/

const pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x);

/*--------------------------------------------------------------------------------------------
    make this work
    duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
 */

duplicate([1, 2, 3, 4, 5]);
function duplicate(arr) {
	return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = (arr) => [...arr, ...arr];

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]



/*--------------------------------------------------------------------------------------------
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
*/
for (let i = 1; i <= 100; i++) {
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
/*--------------------------------------------------------------------------------------------
Create a function pipe that performs left-to-right function composition by returning a function that accepts 1 argument
const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19;   addOne(double(square(3)))
*/

const pipe = (...fxs) => (result = 0) => fxs.reduce((accumulator, fx) => fx(accumulator), result);

// reduce( (accumulator, currentValue, currentIndex, array) => {}, initialValue);

/*--------------------------------------------------------------------------------------------
    make this work : duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
 */

const duplicate1 = function(arr) {
	return arr.concat(arr);
}

const duplicate2 = arr => [...arr, ...arr];

/*--------------------------------------------------------------------------------------------
 Create a for loop that iterates up to 100 while outputting 
  "fizz" at multiples of 3, 
  "buzz" at multiples of 5 
  "fizzbuzz" at multiples of 3 and 5
*/
const fizzbuzz = () => {
  const FIZZ = "fizz";
  const BUZZ = "buzz";

  for (let i = 1; i <= 100; ++i) {
	  const fizz = (i % 3 === 0);
    const buzz = (i % 5 === 0);

    let output = null;

    if (fizz && buzz) {
      output = FIZZ + BUZZ;
    } else if (fizz ) {
      output = FIZZ;
    } else if (buzz) {
      output = BUZZ;
    }

    if (output !== null) {
      console.log(i + " : " + output);
    }
  }
}
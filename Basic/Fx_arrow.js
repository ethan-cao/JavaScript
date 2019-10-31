// Arrow function cannot set this with .bind() or .call()
// Arrow functions cannot be called with new

// Expression, it returns value implicitly 
let f1 = x => x + 1;  
console.log(f1(1));  // 2

f1 = _ => 1; // euqals to () => 1;
console.log(f1(1));  // 1

f1 = (x, y) => 1; // () is only required for multiple params
console.log(f1(1));  // 1

// ... (rest parametera) represens an indefinite number of arguments as an array.
f1 = (...args) => args.length;
console.log("args length : ",  f1(1,2,3));


// Statement, it does not return value implicitly, it must have {}
let f2 = x => { 
        x *= 2; 
        return x + 1; // use return explicitly if need return value
};
console.log((f2(1))) // 3


// Lexical this, arguments
function f() {
    this.name = "ethan";

    let ff = _ => {
        // inside arrow function, this/arguments refer to this/arguments in the environment the arrow function is defined 
        console.log("this.name: " + this.name);  // ethan
        console.log("1st arguments: "+ arguments[0]);  // 1
    };

    ff();
}

f(1);



// optional chaining
const user = {
    id: 1,
    name:  "ethan",
    job: {
        title: "CEO",
        employer: {
            name: "TS",
        }
    }
};

console.log(user.job?.title); // if job is not found, it will not continue
console.log(user.job?.employer?.name);  



// Nullish Coalescing
const input = null;
const output = input ?? "output";  // iff the left operand is null or undefined, return "output", otherwise return input
console.log(output)


// declare is used to tell TypeScript that the variable has been created elsewhere. 
// If you use declare, nothing is added to the generated JavaScript - just simply a hint to the compiler

// e.g. if use an external script that defines a, use declare const a to tell TS compiler that a has already been set up
declare const a: any;
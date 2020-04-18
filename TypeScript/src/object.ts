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
const output = input ?? "output";  // iff input is null or undefined, output is "output"
console.log(output)
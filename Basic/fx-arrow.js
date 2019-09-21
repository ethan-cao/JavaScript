// Expression 
let f1 = x => x + 1;
console.log(f1(1));  // 2

// Statement 
let f2 = x => { 
        x *= 2; 
        return x + 1;
    }
console.log((f2(1))) // 3


// Lexical this
this.name = "ethan";
let f3 = x => {
        // arrows share the same lexical this as their surrounding code
        console.log(this.name);  // name
        return x;
     };
f3();

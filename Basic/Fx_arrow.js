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
        // arrows function share the same lexical this in its surrounding code
        console.log(this.name);  // ethan
        return x;
     };
f3();

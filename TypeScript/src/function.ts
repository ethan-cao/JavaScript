// good pratice: just let TS infer the return type
function add(n1: number, n2: number): number{
    return n1 + n2;
}



// with void as return type, no need to have return sentence, better than undefined 
function print1(n: any): void {
    console.log(n);
}

// with undefined as return type, there must be return sentence
function print2(n: any): undefined {
    return;
}



// Function type
const f: Function = () => console.log("f");
const printList = (...items: [number]) => console.log();
const printOutput: (a: number | string) => void = output => console.log(output);

let combine: (a: number, b: number) => number;
combine = add;
console.log(combine(10, 20)); // 30



// void callback function type   does not force no return, mererly indicate return is useless
function combineAndPrint(a: number, b: number = 1, callback: (n: number) => void) {
    const n = callback(a + b);
    return n;
}

const result = combineAndPrint(1, 2, (x) => {
    console.log(x); // 3
    // callback can return anything, even if the function type has void return
    return "s";    
});
console.log(result) // s


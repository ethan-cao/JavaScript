// good practice: just let TS infer the return type
const add = (n1: number, n2: number) => n1 + n2;


// with void as return type, no need to have return sentence, better than undefined 
// Do use the return type void for callbacks whose value will be ignored
// Don’t use the return type any for callbacks whose value will be ignored
// the param is optional, the default value is undefined 
function print1(n?: any): void {
    console.log(n);
}

// with undefined as return type, there must be return sentence
function print2(n: any): undefined {
    return;
}


// Don’t use optional parameters in callbacks unless you really mean it:
// Rather, just let consumer decide how many params, it’s always legal to provide a callback that accepts fewer arguments.
/* WRONG */
interface Fetcher {
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}
/* OK */
interface Fetcher {
    getObject(done: (data: any, elapsedTime: number) => void): void;
}


// Function type
const f: Function = () => console.log("f");
const printList = (...items: [number]) => console.log();
const printOutput: (a: number | string) => void = output => console.log(output);

let combine: (a: number, b: number) => number;
combine = add;
console.log(combine(10, 20)); // 30

// define function type with interface
interface combineI {
    // define an anuonus fuction in interface, ts use this to define function
    (a: number, b: number): number;
}
let addFx: combineI;
addFx = add;

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



// function overload
function checkType(obj: Array<any>): void;
function checkType(obj: string): void;
function checkType(obj: Array<any> | string): void {
    if (obj instanceof Array) {
        console.log("Array");
    } else {
        console.log("String");
    }
}

// Don’t put more general overloads before more specific overloads:

/* WRONG */
declare function fn1(x: any): any;
declare function fn2(x: HTMLElement): number;
declare function fn3(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any, wat?

//Do sort overloads by putting the more general signatures after more specific signatures
// TypeScript chooses the first matching overload when resolving function calls. 
/* OK */
declare function fn3(x: HTMLDivElement): string;
declare function fn4(x: HTMLElement): number;
declare function fn5(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)


// high order function 
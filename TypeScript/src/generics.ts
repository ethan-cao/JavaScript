// Generic type in function
const fn = <T>(a: T) => a


// TS can infers the return type is T1 & T2, 
function merge<T1, T2> (obj1: T1, obj2: T2) {
    return Object.assign(obj1, obj2);
}

let mergedObj1 = merge<{name: string}, {age: number}>({name: "Ethan"}, {age:28});
console.log("merged obj1: ", mergedObj1);

// TS automatically infer T1 is type {name: string}, T2 is type {age: number}
let mergedObj2 = merge({name: "Ethan"}, {age:28});
console.log("merged obj2: ", mergedObj2);


const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(100); // generic type only allows number
    }, 5000);
});

promise.then((data)=>{
    data.toFixed(2); // data is number
});


// type constraints
function sayHi<T extends string> (greet: string) {
    console.log(greet);
}

sayHi("hello");
// sayHi(1); // compiler error

// keyof T yields the type of permitted property names for T, namely union of known public property names of T
// A (keyof T) type is considered a subtype of string.
// keyof operates on types
type keys = keyof Man;

function extract<O extends Man, K extends keyof Man>(obj: O, key: K) {
    return obj[key];
}

console.log(extract({name: "Ethan", language: "English"}, "name"));
// console.log(extract({name: "Ethan", language: "English"}, "age")); // compiler error, age is not key for Person




// generic type in class
class DataStorage<T> {
    private data: T[] = [];

    add(datum: T) {
        this.data.push(datum);
    }

    // generic type in class method
    add1<U extends T>(datum: U) {
        this.data.push(datum)
    }

    get(): T {
        return this.data.pop();
    }
}

const stringStorage = new DataStorage<string>();
stringStorage.add("a");
stringStorage.add("b");
stringStorage.add("c");
stringStorage.add1("d");





class Car {
    color: string;
    brand: string;
    price: number;
}

// Partical<Type>: wrap Type and all property optional 
const car:Partial<Car> = {};
car.color = "red";
car.brand = "Tesla";
car.price = 50000;
const newCar:Car = car as Car;




// Readonly<Type>: lock the object, don't allow change
const names: Readonly<string[]> = ["Ethan", "Max"];
// names.push("Nile"); // complier error





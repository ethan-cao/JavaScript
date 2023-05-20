// when creating new types through like primitives, union types, and tuple types, use type (keyword)
// when anything else, use interface


// interface has no implementation 
interface Human {
    // interface member cannot use public/protected/private modifier
    // can only use readonly
    readonly name: string;
    alias?: string; // optional property
    language: "English" // default value

    sayHi?(): void;  // optional method
}

// interface can inherit multiple interface
interface Greetable extends Human {
    greet?(phrase: string): void;
}

let user1: Greetable;

user1 = {
    name: "Ethan",
    language: "English",

    greet (phrase: string) {
        console.log(phrase);
    }
};


interface Adult {
    nationality: string
    
    [prop: string] : string; 
    // index property, describe what kind of property this type can hold
    // all property in this type must comply with this description 
}

// illegal, cannot use instanceof with Greetable
// console.log(user1 instanceof Greetable)

class Man implements Greetable {
    name : string;
    language: "English";
    alias?: string;

    constructor(name: string, age: number) {
        this.name = name;
    }

    sayHi?(): void {
        throw new Error("Method not implemented.");
    }

    greet?(phrase: string): void {
        throw new Error("Method not implemented.");
    }
}

const p1: Human = new Man("Ethan", 29);

// type cast
const p2: Man = <Man> p1;
const p3: Man = p1 as Man;
const p4 = {name: "Ethan"} as Human;



// interface for describing function
interface F {
    (a: number, b: number): number;  // this is the function signature
    p1?: string;     // property for the function
}

const f1: F = (x: number, y: number) => x + y;

console.log(f1(1, 2));
console.log(f1.p1);


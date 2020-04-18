// interface has no implementation 
interface Human {
    // interface property cannot use public/private modifier, only possible with readonly
    readonly name: string;
    alias?: string; // optional property
    language: "English"

    sayHi?(): void;  // optional method
}

// interface can inherit multiple interface
interface Greetable extends Human {
    greet(phrase: string): void;
}

let user1: Greetable;

user1 = {
    name: "Ethan",
    language: "English",

    greet(phrase: string) {
        console.log(phrase);
    }
};


interface Adult {
    nationality: string
    
    [prop: string] : string; 
    // index property, describe what kind of property this type can hold
    // all property in this type must comply with this descirption 
}

// illegal, cannot use instanceof with Greetable
// console.log(user1 instanceof Greetable)

class Person implements Greetable {
    name : string;
    language: "English";
    alias?: string;

    constructor(name: string, age: number) {
        this.name = name;
    }

    sayHi?(): void {
        throw new Error("Method not implemented.");
    }

    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }
}

const p1: Human = new Person("Ethan", 29);

// type cast
const p2: Person = <Person> p1;
const p3: Person = p1 as Person;
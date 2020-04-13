// interface has no implementation 
interface Named {
    // interface property cannot use public/private modifier, only possible with readonly
    readonly name: string;
    alias?: string; // optional property

    sayName?(): void; // optional method
}

// interface can inherit multiple interface
interface Greetable extends Named{
    greet(phrase: string): void;
}

let use1: Greetable;

use1 = {
    name: "Ethan",

    greet(phrase: string) {
        console.log(phrase);
    }
};

class Person implements Named, Greetable {
    name : string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }

}

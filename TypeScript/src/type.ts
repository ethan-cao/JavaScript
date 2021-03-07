// enum
const enum Role {
    ADMIN = 'ADMIN', 
    READ_ONLY = 100,  
    AUTHOR
}

// type alias
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    readonly gender: boolean; // type alias can have readonly modifier
}

// Intersection type
type ElevatedEmployee = Employee & Admin;

// Alternatively
// interface Admin {}  
// interface Employee {}
// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = { name: "Max", gender: true, privileges: ["manage"]}; 

const XXX: "a" = "a";
console.log(XXX)

// type assertions, just tell TS complier that the variable is type
// compiler does not not perform any checks to make sure the type assertion is actually valid

// let v: any;
// let s = v as string // ok in tsx and ts
// let s2 = <string> v // only valid in ts


// define a type alias for a function
type TypeGuard<P, C extends P> = (obj: P) => obj is C;

interface I {

}

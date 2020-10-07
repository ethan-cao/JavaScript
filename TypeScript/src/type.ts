// enum
enum Role {
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

// type assertions, equivalent
// let v: any;
// let s = v as string // ok in tsx and ts
// let s2 = <string> v // only valid in ts


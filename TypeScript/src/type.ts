// enum
enum Role {
    ADMIN = 'ADMIN', 
    READ_ONLY = 100,  
    AUTHOR
};

// type alias
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    readonly gender: boolean; // type alias can have readonly modeifer
}

// Intersection type
type ElevatedEmployee = Employee & Admin;

// possible to do it with interface
// interface Admin {}  
// interface Employee {}
// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = { name: "Max", gender: true, privileges: ["manage"]}; 


// enum
enum Role {
    ADMIN = 'ADMIN', 
    READ_ONLY = 100,  
    AUTHOR
};

// type alias
type User = {
    name: string;
    age: number
    readonly gender: boolean; // type alias can have readonly modeifer
};

const u1: User = { name: 'Max', age: 30, gender: true}; 

console.log(u1.name);

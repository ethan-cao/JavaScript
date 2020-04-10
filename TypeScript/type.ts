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
}

const u1: User = { name: 'Max', age: 30 }; 

console.log(u1.name);
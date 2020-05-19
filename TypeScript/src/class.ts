abstract class Organization {
    // 3 types of access modifiers: public, private and protected.
    // by default, class member (property, method) is public
    taxId: string; 

    // a class that has an abstract method must be asbtract class
    protected name: string;

    abstract describe(this: Organization): void;
}

class Department extends Organization{
    // by default, filed is public, private property can only be accessed in class
    // readonly: property shoudl not change after initialization 
    private readonly id: string;
    protected employees: string[]; // also accessible from child class
    static location: string = "US";

    get departmentName() {
        return this.name;
    }

    set departmentName(name: string){
        this.name = name;
    }

    // property alias set in constructor param is also the class proerty
    // shorten way to initialize property
    constructor(id: string, name: string, private alias: string){
        super();

        this.id = id;
        this.name = name;
    }

    // restrict this must be of type Department
    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    // static methd
    static sayWelcome(): void{
        console.log("welcome");
    }
}

// class can only inherit from 1 class
class ITDepartment extends Department {
    private static instance: ITDepartment;
    admins?: string[]; // optional property

    // private constructor
    private constructor(id: string, ...admins: [string]) {
        // super() must be invoked in the very beginning of child constructor
        super(id, "IT", "IT Department"); 

        this.admins = [...admins];
        this.employees = [...admins];
    }

    // single
    static getInstance(){
        if (ITDepartment.instance === null) {
            ITDepartment.instance = new ITDepartment("1", "Ethan");
        }

        return ITDepartment.instance;
    }
}

const it = ITDepartment.getInstance();
it.departmentName = "new IT";   // setter
console.log(it.departmentName); // getter
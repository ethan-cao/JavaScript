class Department {
    // by default, filed is public, private property can only be accessed in class
    // readonly: property shoudl not change after initialization 
    private readonly id: string;
    protected name: string;
    protected employees: string[]; // also accessible from child class

    get departmentName() {
        return this.name;
    }

    set departmentName(name: string){
        this.name = name;
    }

    // property alias set in constructor param is also the class proerty
    // shorten way to initialize property
    constructor(id: string, name: string, private alias: string){
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

}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, ...admins: [string]) {
        // super() must be invoked in the very beginning of child constructor
        super(id, "IT", "IT Department"); 

        this.admins = [...admins];
        this.employees = [...admins];
    }
}

const it = new ITDepartment("1", "Ethan");
it.departmentName = "new IT";   // setter
console.log(it.departmentName); // getter